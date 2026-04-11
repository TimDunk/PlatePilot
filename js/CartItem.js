class CartItem{
    constructor(data){
        this.cartId=data.cartId;
        this.vendorId=data.vendorId;
        this.subTotal=data.subTotal;
        this.standardDelivery=data.standardDelivery;
        this.platformFee=data.platformFee;
        this.total=data.total;
        this.items=data.items?data.items:[];    
    }
}

class CartItemModel{
    constructor(){
        this.cartArr=[];
        this.loadData();  //TODO:delete this line
        this.maxCartId=0;
        this.toppingModel=new ToppingModel();
        this.variantModel=new VariantModel();
    }

    loadData(){
        try {
            let storedString=sessionStorage.getItem("CartData");
            // const parsedArray = storedString ? JSON.parse(storedString) : JSON.parse(cartData); //TODO:JSON.parse(cartData) is testing data
            const parsedArray = storedString ? JSON.parse(storedString) : []; //TODO:JSON.parse(cartData) is testing data
            if(parsedArray)
                this.cartArr=parsedArray.map(data => new CartItem(data));
            this.cartArr.forEach(
                cart => {
                    if(cart.id > this.maxCartId)
                        this.maxCartId=cart.id;
                }
            );
        } catch (error) {
            console.error(error);
        } finally {
            ;
        }
    }

    getItemsByKeyValue(key,value){
        this.loadData();
        return this.cartArr.filter(v => v[key] === value);
    }

    getCartByVendorId(vendorId){
        this.loadData();
        return this.cartArr.find(data=>data.vendorId==vendorId); //get the first match data
    }

    getCartItemsByVendorId(vendorId){
        let cart=this.getCartByVendorId(vendorId);
        if(cart)
            return cart.items; //get the first match data
    }
    getCartItemsQuantity(vendorId){
        const items=this.getCartItemsByVendorId(vendorId);
        let quantity=0;
        if(items){
            items.forEach(
                item => quantity=quantity+item.quantity
            );
        }
        return quantity;
    }

    getItem(vendorId,itemId){
        let items=this.getCartItemsByVendorId(vendorId);
        if(items)
            return items.find(data => data.id==itemId);
    }

    getItemNew(vendorId,itemId){
        let items=this.getCartItemsByVendorId(vendorId);
        if(items)
            return items.filter(data => data.id==itemId);
    }

    getUniqueItem(vendorId,itemId,selectedVariants,SelectedToppings,instruction){
        let items=this.getCartItemsByVendorId(vendorId);
        if(items)
            return items.find(data => {
                let cartVariantSet=new Set(data.selectedVariants);
                let variantSet=new Set(selectedVariants);
                let difSet1=cartVariantSet.symmetricDifference(variantSet);

                let cartToppingSet=new Set(data.SelectedToppings);
                let toppingSet=new Set(SelectedToppings);
                let difSet2=cartToppingSet.symmetricDifference(toppingSet);
                return data.id==itemId && difSet1.size==0 && difSet2.size==0 && instruction==data.instruction;
                });
    }
    getUniqueItemIndex(vendorId,itemId,selectedVariants,SelectedToppings,instruction){
        let items=this.getCartItemsByVendorId(vendorId);
        let isFound=false;
        let index=-1;
        if(items&&items.length>0){
            
            for(let i=0;i<items.length;i++){
                let cartVariantSet=new Set(items[i].selectedVariants);
                let variantSet=new Set(selectedVariants);
                let difSet1=cartVariantSet.symmetricDifference(variantSet);

                let cartToppingSet=new Set(items[i].SelectedToppings);
                let toppingSet=new Set(SelectedToppings);
                let difSet2=cartToppingSet.symmetricDifference(toppingSet);
                isFound=items[i].id==itemId && difSet1.size==0 && difSet2.size==0 && instruction==items[i].instruction; 
                if(isFound){
                    index=i;
                    break;
                } 
            }
        }  
        return index;
    }

    getQuantityInCart(vendorId,itemId){
        let item=this.getItem(vendorId,itemId);
        return item?item.quantity:0;
    }

    getQuantityInCartNew(vendorId,itemId){
        let items=this.getItemNew(vendorId,itemId);
        if(!items)
            return 0;
        let num=0;
        items.forEach( item => {
            num=num+ item.quantity;
        });
        return num;
    }

    getUniqueQuantityInCart(vendorId,itemId,selectedVariants,SelectedToppings,instruction){
        let item=this.getUniqueItem(vendorId,itemId,selectedVariants,SelectedToppings,instruction);
        return item?item.quantity:0;
    }

    newCart(vendor,item,quantity,selectedVariants,SelectedToppings,instruction){
        let cartInfo={};
        cartInfo.cartId=this.maxCartId+1;
        cartInfo.vendorId=vendor.id;
        cartInfo.items=[this.newItem(vendor,item,quantity,selectedVariants,SelectedToppings,instruction)];
        return new CartItem(cartInfo)
    }

    getDetail(vendor,selectedVariants,SelectedToppings){
        let detail=[];
        selectedVariants.forEach( v => {
            const variant=this.variantModel.getVariant(vendor.id,v);
            if(variant)
                detail.push(variant.name);
        })
        SelectedToppings.forEach( v => {
            const topping=this.toppingModel.getTopping(vendor.id,v);
            if(topping)
                detail.push(topping.name);
        })
        return detail.toString();
    }

    newItem(vendor,item,quantity,selectedVariants,SelectedToppings,instruction=""){
        let itemInfo={};
        itemInfo.id=item.id;
        itemInfo.name=item.name;
        itemInfo.picture=item.picture;
        itemInfo.quantity=quantity;
        itemInfo.selectedVariants=[...selectedVariants];
        itemInfo.SelectedToppings=[...SelectedToppings];
        itemInfo.totalPrice=this.caculateTotalPrice(vendor,item,quantity,selectedVariants,SelectedToppings);
        itemInfo.detail=this.getDetail(vendor,selectedVariants,SelectedToppings);
        itemInfo.instruction=instruction;
        return itemInfo;
    }

    setFee(cart,vendor){
        cart["subTotal"]=0;

        cart.items.forEach(
            item => {
                cart["subTotal"]=cart["subTotal"] + item.totalPrice;
            }
        );
        cart["standardDelivery"]=vendor.deliveryFee;
        cart["platformFee"]=vendor.platformFee?vendor.platformFee:1;
        cart.total= cart["subTotal"]+cart["standardDelivery"]+cart["platformFee"];
    }

    caculateTotalPrice(vendor,item,quantity,selectedVariants,SelectedToppings){
        let toppingFee=0;
        SelectedToppings.forEach( t=>{
            const topping=this.toppingModel.getTopping(vendor.id,t);
            if(topping){
                toppingFee=toppingFee + topping.price * quantity
            }
        }); 
            
        let variantFee=0;
        selectedVariants.forEach( t=>{
            const variant=this.variantModel.getVariant(vendor,t);
            if(variant){
            variantFee = variantFee + variant.extraFee * quantity;

            }
        }); 

        return variantFee+toppingFee+quantity*item.price;
        
    }

    update(vendor,item,quantity,selectedVariants=[],SelectedToppings=[],instruction){
        console.info("Update to session storage");
        let cart=this.getCartByVendorId(vendor.id);
        if(cart){
            let cartIndex=this.cartArr.findIndex(i => i.vendorId==vendor.id);
            let cartItems=this.getCartItemsByVendorId(vendor.id);
            if(cartItems){
                let cartItem=this.getUniqueItem(vendor.id,item.id,selectedVariants,SelectedToppings,instruction);
                if(cartItem){
                    let cartItemIndex=this.getUniqueItemIndex(vendor.id,item.id,selectedVariants,SelectedToppings,instruction)
                    if(quantity>0){ //modify quantify and price of the item in cart
                        cartItem["quantity"]=quantity;
                        cartItem["totalPrice"]=this.caculateTotalPrice(vendor,item,quantity,selectedVariants,SelectedToppings);
                        cartItems[cartItemIndex]=cartItem;
                    }else{
                        //delete from the item array
                        if(cartItemIndex>=0)
                            cartItems.splice(cartItemIndex,1);
                    }
                }
                else{ //add item to cart
                    if(quantity>0){
                        let newItem=this.newItem(vendor,item,quantity,selectedVariants,SelectedToppings,instruction);
                        cartItems.push(newItem);
                    }
                }

                if(cartItems.length==0){
                    this.cartArr.splice(cartIndex,1); //delete the entire cart of the vendor
                }else{
                    cart["items"]=cartItems;
                    this.setFee(cart,vendor);
                    this.cartArr[cartIndex]=cart; 
                }
            }
            else{
                if(quantity>0){
                    let cartItems=[];
                    let newItem=this.newItem(vendor,item,quantity,selectedVariants,SelectedToppings,instruction);
                    cartItems.push(newItem);
                    cart["items"]=[...cartItems];
                    this.setFee(cart,vendor);
                    this.cartArr[cartIndex]=cart;
                }
            }
        }else{
            if(quantity>0){
                let newCart=this.newCart(vendor,item,quantity,selectedVariants,SelectedToppings,instruction);
                this.setFee(newCart,vendor);
                this.cartArr.push(newCart);
            }
        }
        sessionStorage.setItem("CartData",JSON.stringify(this.cartArr));
    }

}