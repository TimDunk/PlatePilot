class VendorDetailController{
    constructor(vendor,categories,menuItems,detailView,modalView){
        this.detailView=detailView;
        this.categories=categories;
        this.menuItems=menuItems;
        this.vendor=vendor;
        this.modalView=modalView;
        this.init();
    }
    async init(){
        // const vendorModel = new VendorModel();
        // await vendorModel.loadVendors();
        // this.vendor=vendorModel.getVendorById(vendorId);
        this.cartItemModel=new CartItemModel();
        this.detailView.setVendorInfo();
        this.detailView.setCategoryTabs(this.categories);  
        this.detailView.renderMenu(this.categories,this.menuItems,this.cartItemModel);
        this.detailView.initCartView(this.cartItemModel.getCartByVendorId(this.vendor.id));
        this.detailView.bindItemCardAddBtn(this.handleItemCardAdding.bind(this));
        this.detailView.bindToggleFavorite(handleToggleFavorite.bind(this));
        this.detailView.bindDeliveryApproach(this.handleDeliveryApproach.bind(this));
        this.modalView.bindAdding(this.handlerAddingInModal.bind(this));
        this.detailView.bindCheckout(this.getCartSizeAndSubTotal.bind(this));
        this.setupObserver();
    }

    handleRenderMenu(){

    }

    handleSearch(){

    }

    hasRequriedSelection(currentItem){
        let hasVariants=currentItem.variants?currentItem.variants.length:0;
        let requiredTopping=currentItem.toppings?currentItem.toppings.find(topping=>topping.required==true):undefined;
        return hasVariants>0 || requiredTopping!==undefined;
    }

    handlerAddingInModal(itemCard,menuItem,quantity,variants=[],toppings=[],instruction=""){
        const quantityOfItem=this.cartItemModel.getQuantityInCartNew(this.vendor.id,menuItem.id);
        const targetQuantity=this.cartItemModel.getUniqueQuantityInCart(this.vendor.id,menuItem.id,variants,toppings,instruction);
        let allQuantity=quantityOfItem+quantity;
        let targetQuantityInCart=targetQuantity+quantity;
        this.detailView.addToCart(itemCard,allQuantity);

        this.cartItemModel.update(this.vendor,menuItem,targetQuantityInCart,variants,toppings,instruction);
        let cart=this.cartItemModel.getCartByVendorId(this.vendor.id);
        const totalPrice=this.cartItemModel.caculateTotalPrice(this.vendor,menuItem,targetQuantityInCart,variants,toppings);
        const detail=this.cartItemModel.getDetail(this.vendor,variants,toppings);
        this.detailView.updateItemInCart(menuItem,targetQuantityInCart,cart,variants,toppings,totalPrice,detail,instruction);
    }

    handleItemCardAdding(itemCard,target,itemId,variants=[],toppings=[],instruction=""){
        console.info("itemId="+itemId);
        console.log(itemCard);
        const currentItem=this.menuItems.find(item=>item.id==itemId);  
        const requiredSelection=this.hasRequriedSelection(currentItem);
        let quantityOfItem=this.cartItemModel.getQuantityInCartNew(this.vendor.id,itemId);
        let targetQuantity=this.cartItemModel.getUniqueQuantityInCart(this.vendor.id,itemId,variants,toppings,instruction);
        let targetContainer=target.closest("li[data-menu-item-id]");
        let isFromMenu=true;
        if(targetContainer){
            isFromMenu=targetContainer.classList.contains("menu-item-card")?true:false
        }

        const updateCartDataAndView=()=>{
            this.cartItemModel.update(this.vendor,currentItem,targetQuantity,variants,toppings,instruction);
            let cart=this.cartItemModel.getCartByVendorId(this.vendor.id);
            const totalPrice=this.cartItemModel.caculateTotalPrice(this.vendor,currentItem,targetQuantity,variants,toppings);
            const detail=this.cartItemModel.getDetail(this.vendor,variants,toppings);
            this.detailView.updateItemInCart(currentItem,targetQuantity,cart,variants,toppings,totalPrice,detail,instruction);
        }
        
        if(target.classList.contains("item-card-button")){  //click from menu
            this.modalView.openOrderModal(itemCard,currentItem,{});
        }
        else if(requiredSelection && isFromMenu){
            this.modalView.openOrderModal(itemCard,currentItem,{});
        }
        else if(quantityOfItem==0){
            if(target.classList.contains("add-to-cart-btn")){
                quantityOfItem=quantityOfItem+1;
                targetQuantity=targetQuantity+1;
                this.detailView.expandTheAddingBtn(itemCard,quantityOfItem);
                updateCartDataAndView(); 
                this.detailView.addToCart(itemCard,quantityOfItem);
            }
        }else{
            if(target.classList.contains("add-to-cart-btn")){       
                if(itemCard.querySelector(".add-to-cart-wrapper").dataset.expanded=="true"){
                    quantityOfItem=quantityOfItem+1;
                    targetQuantity=targetQuantity+1;
                    updateCartDataAndView();
                    this.detailView.addToCart(itemCard,quantityOfItem);
                }
                else{
                    if(target.classList.contains("btn-in-cart")){ // the add button in the cart
                        quantityOfItem=quantityOfItem+1;
                        targetQuantity=targetQuantity+1;
                        updateCartDataAndView();
                        this.detailView.addToCart(itemCard,quantityOfItem);       
                    }else
                        this.detailView.expandTheAddingBtn(itemCard,quantityOfItem);
                }
            }
            else if(target.classList.contains("remove-from-cart-btn") ){
                if(isFromMenu){
                    let cartItem=this.cartItemModel.getUniqueItem(this.vendor.id,itemId,[],[],"");
                    if(!cartItem)
                        return;
                }
                quantityOfItem=quantityOfItem-1;
                targetQuantity=targetQuantity-1;
                updateCartDataAndView();
                this.detailView.removeFromCart(itemCard,quantityOfItem);  //******** */
            }
        }
        
    }

    setupObserver(){
        const sections = this.detailView.menuView.querySelectorAll('.dish-category-section');
        const tabs = this.detailView.tabsContainer.querySelectorAll('li');

        let rootTop=document.querySelector(".head").offsetHeight+54;
        let rootButtom=window.innerHeight - rootTop - 50;
        let rootM=`-${rootTop}px 0px -${rootButtom}px 0px`;
        const observerOptions = {
            root: null,             // use the viewport
            rootMargin: rootM,      // triggers when section is at this
            threshold: 0.0
        };

        const observer = new IntersectionObserver(
            (entries) => {
                const entry = entries.find(e => e.isIntersecting);
                if (entry) {
                    console.info("Intersecting is with "+ entry);
                    
                    tabs.forEach(link => link.classList.remove('active'));
                    const id = entry.target.getAttribute('id');
                    const idInedx=id.split("-").pop();
                    const activeLink = this.detailView.tabsContainer.querySelector(`#tabs-tab-${idInedx}`);
                    if (activeLink) {
                        activeLink.classList.add('active');
                        const container = this.detailView.tabsContainer;
                        const scrollLeft = activeLink.offsetLeft - (container.offsetWidth / 2) + (activeLink.offsetWidth / 2);
                        container.scrollTo({
                            left: scrollLeft,
                            behavior: 'smooth'
                        });
                    }
                }else{
                    console.info("Intersecting is false.");
                }

            }, 
            observerOptions );

        sections.forEach(section => observer.observe(section));
    }

    handleDeliveryApproach(approach){
        sessionStorage.setItem("delivery-approach",approach);
    }

    getCartSizeAndSubTotal(){
        const cart=this.cartItemModel.getCartByVendorId(this.vendor.id);
        if(cart)
            return [this.cartItemModel.getCartItemsQuantity(this.vendor.id),cart.subTotal];
        else
            return [0,0]
    }
}

if ('history' in window && 'scrollRestoration' in history) {
    window.history.scrollRestoration = 'manual';
}

window.addEventListener('DOMContentLoaded', () => {
    // const view = new VendorDetailView();
    const urlParams = new URLSearchParams(window.location.search);
    const vendorId= urlParams.get('id');
    if(vendorId){
        console.log(`vendorId=${vendorId}`);
    }
    const categories=new MenuCategoryModel().getCategoriesByKeyValue("vendorId",vendorId);
    const menuItems=(new MenuItemModel()).getItemsByKeyNumberValue("vendorId",vendorId);
    const vendorModel = new VendorModel();
    vendorModel.loadVendors();
    let vendor=vendorModel.getVendorById(vendorId);
    const view = new VendorDetailView(vendor);
    const modalView=new ManageCartModalView();
    const controller = new VendorDetailController(vendor,categories,menuItems, view,modalView);
});


