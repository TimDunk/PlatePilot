class VendorDetailView{
    constructor(vendor){
        this.vendorInfoView=document.querySelector(".vendor-info");
        this.menuView=document.getElementById("menu");
        this.cartSummaryView=this.getCartSummaryView();
        this.tabsContainer=document.querySelector('.tabs-container');
        this.addEventsToMenuNav();
        this.collapseTimer=null;
        this.activeWrapper=null;
        this.activeQuantity=0;
        this.vendor=vendor;
    }
    setMenuStickyTop(){
        let top=document.querySelector(".head").offsetHeight;
        document.querySelector(".menu-navigation").style.top=top+"px";
    }
    
    getCartSummaryView(){
        const views=document.querySelectorAll(".cart-summary");
        if(views[0].checkVisibility())
            return views[0];
        else if(views[1].checkVisibility())
            return views[1];
    }

    setVendorInfo(){
        
        this.vendorInfoView.querySelector("nav .vendor-name-in-nav").innerText=this.vendor.name;
        const imgSrc=`../images/vendor/${this.vendor.picture}`;
        this.vendorInfoView.querySelector(".vendor-image img").setAttribute("src",imgSrc);


        this.vendor.cuisines.forEach((cuisine=>{
            const fragment=`<div class="d-inline-block separator"></div>
							<li class="d-inline m-0 p-0"><span>${cuisineModel.findCuisineTextById(cuisine)}</span></li>`;
            this.vendorInfoView.querySelector(".vendor-cuisine-list").appendChild(document.createRange().createContextualFragment(fragment));
        }));

        this.vendorInfoView.querySelector(".vendor-name").children[0].innerText=this.vendor.name;
        this.vendorInfoView.querySelector(".vendor-delivery-fee").children[2].innerText=this.vendor.deliveryFee;
        this.vendorInfoView.querySelector(".vendor-min-total").children[2].innerText=this.vendor.minDeliveryTotal;
        this.vendorInfoView.querySelector(".vendor-rated-level").children[1].innerText=this.vendor.ratedLevel;
        if(getFavoriteIds().includes(this.vendor.id))
            this.vendorInfoView.querySelector(".favourite-btn").classList.add("is-favourite-vendor");
    }

    setCategoryTabs(menuCategoryArr){
        const tabList=this.tabsContainer.querySelector(".tabs-list");
        menuCategoryArr.forEach( element => {
            let child=`
            <li class="" id="tabs-tab-${element.id}">
                <button><span class="custom-gray-color">${element.category}</span></button>
            </li>`;
            const fragment=document.createRange().createContextualFragment(child);
            tabList.appendChild(fragment);
        });
        tabList.children[0].classList.add("active");
        this.handleTabsScroll();
    }

    renderMenu(categories,menuItems,cartItemModel){
        categories.forEach( cag => {
            let categorySection=`
            <div class="dish-category-section" id="menu_category-id-${cag.id}">
                <div class="category-title fw-bold fs-4">${cag.category}</div>
                <ul class="dish-list-grid mt-3">
                </ul>
            </div>
            `;
            const fragment=document.createRange().createContextualFragment(categorySection);

            const menuItemContainer=fragment.querySelector("ul.dish-list-grid");
            const items=menuItems.filter(item => item.categoryId == cag.id );
            let cardTemplate=this.menuView.querySelector("#menu-item-card-template");
            items.forEach(item => {
                let clone=document.importNode(cardTemplate.content,true);
                let card=clone.querySelector(".menu-item-card");
                card.setAttribute("data-menu-item-id",`menu-item-id-${item.id}`);
                clone.querySelector(".item-name").innerText=item.name;
                clone.querySelector(".item-price").children[1].innerText=item.price;
                clone.querySelector(".item-description").innerText=item.description;
                clone.querySelector("picture img").setAttribute("src",`../images/item/${item.picture}`);
                // let quantityInCart=cartItemModel.getQuantityInCart(this.vendor.id,item.id);  //it is ok for the previous version
                let quantityInCart=cartItemModel.getQuantityInCartNew(this.vendor.id,item.id);
                clone.querySelector(".item-quantity").innerText=quantityInCart;
                this.updateButtonContent(clone.querySelector(".add-to-cart-wrapper"),quantityInCart);
                this.controlSvg(card,quantityInCart);
                menuItemContainer.appendChild(clone);
            });

            this.menuView.appendChild(fragment);
            
        });
        this.setMenuStickyTop();
    }

    bindMenu(handler){

    }

    addEventsToMenuNav(){
        let preButton=document.querySelector(".category-tabs .pre-btn>button");
        preButton.addEventListener("click",(e) => {
            this.tabsContainer.scrollBy({ left: -200, behavior: 'smooth' });
        });

        let nextButton=document.querySelector(".category-tabs .next-btn>button");
        nextButton.addEventListener("click",(e) => {
            this.tabsContainer.scrollBy({ left: 200, behavior: 'smooth' });
        });

        let tabList=this.tabsContainer.querySelector(".tabs-list");
        tabList.addEventListener("click", (e) => {
            tabList.querySelectorAll("li").forEach(li => {
                li.classList.remove("active");
            });
            let tab=e.target.closest("li");
            tab.classList.add("active");

            let targetCategoryId=tab.getAttribute('id').split("-").pop();
            let targetCategory=this.menuView.querySelector(`#menu_category-id-${targetCategoryId}`);
            if(targetCategory){
                targetCategory.scrollIntoView({ behavior: 'smooth', block: 'start',container: 'nearest' });            
            }
        });
        
    }

    controlSvg(targetItem,quantity){
        if(quantity==1){
            targetItem.querySelector(".add-to-cart-wrapper").setAttribute("data-quantity","single");
        }else if(quantity>1){
            targetItem.querySelector(".add-to-cart-wrapper").setAttribute("data-quantity","multiple");
        }else
            targetItem.querySelector(".add-to-cart-wrapper").setAttribute("data-quantity","zero");
    }

    addToCart(itemCard,quantity){
        console.info("The quantity added to cart is "+quantity);
        itemCard.querySelector(".item-quantity").innerText=quantity;
        this.controlSvg(itemCard,quantity);
        let btnWrapper=itemCard.querySelector(".add-to-cart-wrapper");
        this.updateButtonContent(btnWrapper,quantity);
        if(quantity>1)
            this.startAutoCollapse(btnWrapper,quantity);
    }
    
    removeFromCart(itemCard,quantity){
        console.info("Remove from cart");
        itemCard.querySelector(".item-quantity").innerText=quantity;
        let btnWrapper=itemCard.querySelector(".add-to-cart-wrapper");       
        if(quantity>=1){
            this.controlSvg(itemCard,quantity);
            this.updateButtonContent(btnWrapper,quantity);
            this.startAutoCollapse(btnWrapper,quantity);
        }else if(quantity==0){
            this.activeWrapper=btnWrapper;
            this.activeQuantity=quantity;
            itemCard.querySelector(".add-to-cart-wrapper").setAttribute("data-expanded","false");
            this.controlSvg(itemCard,quantity)
            this.updateButtonContent(btnWrapper,quantity);
            clearTimeout(this.collapseTimer);
            this.collapseTimer=null;
        }
        
    }

    startAutoCollapse(btnWrapper,quantity){
        console.info("startAutoCollapse()");
        if(this.activeWrapper && this.activeWrapper!==btnWrapper){
            this.activeWrapper.setAttribute("data-expanded","false");
            this.updateButtonContent(this.activeWrapper,this.activeQuantity);
        }
            
        if(this.collapseTimer)
            clearTimeout(this.collapseTimer);

        this.activeWrapper=btnWrapper;
        this.activeQuantity=quantity;

        this.collapseTimer=setTimeout(
            () => {
                if(this.activeWrapper===btnWrapper){
                    btnWrapper.setAttribute("data-expanded","false");
                    this.updateButtonContent(btnWrapper,quantity);
                    this.activeWrapper=null;
                    this.collapseTimer=null;
                }
            },
            5000
        ); //If 5 seconds elapsed, the expanded state should collapse;
    }

    updateButtonContent(btnWrapper,quantity){
        let btn=btnWrapper.querySelector(".add-to-cart-btn");
        const isExpanded=btnWrapper.dataset.expanded;
        let svg=`<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-plus-lg" viewBox="0 0 16 16">
                                            <path fill-rule="evenodd" d="M8 2a.5.5 0 0 1 .5.5v5h5a.5.5 0 0 1 0 1h-5v5a.5.5 0 0 1-1 0v-5h-5a.5.5 0 0 1 0-1h5v-5A.5.5 0 0 1 8 2"/>
                                        </svg>`; 
        if (isExpanded!=undefined && isExpanded=="true") {
            btn.innerHTML=svg;
        } else if(quantity>0) {
            btn.innerHTML = `<div class="btn-quantity-text">${quantity}</div>`;
        }else{ 
            btn.innerHTML=svg;
        }
    }

    expandTheAddingBtn(itemCard,quantity){
        console.info("expandTheAddingBtn()");
        const btnWrapper=itemCard.querySelector(".add-to-cart-wrapper");
        const isExpanded=btnWrapper.dataset.expanded;
        if(!isExpanded||isExpanded!=="true"){
            btnWrapper.setAttribute("data-expanded","true");
            itemCard.querySelector(".item-quantity").innerText=quantity;
            this.controlSvg(itemCard,quantity);
            this.updateButtonContent(btnWrapper,quantity);
            this.startAutoCollapse(btnWrapper,quantity);
        }
        
    }

    bindItemCardAddBtn(handler){
        // when users click the adding or removing button in menu and in the cart
        this.menuView.addEventListener(
            "click",
            event=>{
                const itemCard=event.target.closest("li.menu-item-card");
                if(!itemCard)
                    return;
                const itemId=itemCard.dataset.menuItemId.split("-").pop();
                handler(itemCard,event.target,Number(itemId));
                event.stopPropagation();
            }
        );

        this.cartSummaryView.querySelector("ul.group-item-list").addEventListener(
            "click",
            event=>{
                const itemInCart=event.target.closest("li.item-in-cart");
                if(!itemInCart)
                    return;
                const variants=itemInCart.dataset.variants?itemInCart.dataset.variants.split(",").map(x=>Number(x)) : [];
                const toppings=itemInCart.dataset.toppings?itemInCart.dataset.toppings.split(",").map(x=>Number(x)) : [];

                const itemId=itemInCart.dataset.menuItemId.split("-").pop();
                const itemCard=this.menuView.querySelector(`li[data-menu-item-id="menu-item-id-${itemId}"]`);
                const instruction=itemInCart.querySelector("div.item-instruction p").innerText;
                handler(itemCard,event.target,Number(itemId),variants,toppings,instruction);
                event.stopPropagation();
            }
        );
    }

    controlEmptyCart(cart){
        let emptyBlock=this.cartSummaryView.querySelector(".cart-empty-block");
        let contentDIVs=this.cartSummaryView.querySelectorAll("div[data-cart-has-items]");
        if(cart){
            emptyBlock.setAttribute("not-display","");
            contentDIVs.forEach( div => {
                div.setAttribute("data-cart-has-items","1");
            });
        }else{
            emptyBlock.removeAttribute("not-display");
            contentDIVs.forEach( div => {
                div.setAttribute("data-cart-has-items","");
            });
        }
        
    }

    setDeliveryApproach(approach){
        let deliveryButton=this.cartSummaryView.querySelector(".cart-expedition-wrapper button.delivery-btn");
        let pickupButton=this.cartSummaryView.querySelector(".cart-expedition-wrapper button.pickup-btn");
        if(approach=="pickup"){
                deliveryButton.classList.add("bg-light");
                deliveryButton.classList.add("border-0");
                deliveryButton.classList.remove("active");
                deliveryButton.classList.remove("bg-white");
                deliveryButton.classList.remove("border-color-light-gray");

                pickupButton.classList.remove("bg-light");
                pickupButton.classList.remove("border-0");
                pickupButton.classList.add("active");
                pickupButton.classList.add("bg-white");
                pickupButton.classList.add("border-color-light-gray");
            }   
            else{
                pickupButton.classList.add("bg-light");
                pickupButton.classList.add("border-0");
                pickupButton.classList.remove("active");
                pickupButton.classList.remove("bg-white");
                pickupButton.classList.remove("border-color-light-gray");

                deliveryButton.classList.remove("bg-light");
                deliveryButton.classList.remove("border-0");
                deliveryButton.classList.add("active");
                deliveryButton.classList.add("bg-white");
                deliveryButton.classList.add("border-color-light-gray");

                sessionStorage.setItem("delivery-approach","delivery")
            }

                
    }

    initDeliveryApproach(){
        let approach=sessionStorage.getItem("delivery-approach");
        if(approach){
            this.setDeliveryApproach(approach);
        }else{
            this.cartSummaryView.querySelector(".cart-expedition-wrapper button.delivery-btn").classList.add("active");
            this.cartSummaryView.querySelector(".cart-expedition-wrapper button.pickup-btn").classList.remove("active");
            sessionStorage.setItem("delivery-approach","delivery")
        }
    }

    initCartView(cart){
        this.cartSummaryView.querySelector(".delivery-btn .delivery-time").children[0].innerText=this.vendor.minDeliveryTime;
        this.cartSummaryView.querySelector(".delivery-btn .delivery-time").children[1].innerText=this.vendor.maxDeliveryTime;
        this.cartSummaryView.querySelector(".pickup-btn .delivery-time").children[0].innerText=this.vendor.minDeliveryTime;
        this.initDeliveryApproach();
        if(cart==undefined||cart.items==undefined || cart.items.length==0)
            return;

        this.controlEmptyCart(cart);

        let itemList=this.cartSummaryView.querySelector(".group-item-list");
        let cartItemTemplate=this.cartSummaryView.querySelector("#item-in-cart-template");
        cart.items.forEach(
            item => {
                this.setItemToCart(itemList,cartItemTemplate,item);
            }
        );
        
        this.updateCartValue(cart);
    }

    setItemToCart(parent,template,item){
        let variantsStr=item.selectedVariants.toString();
        let toppingsStr=item.SelectedToppings.toString();
        this.preendItem(parent,template,item,item.quantity,variantsStr,toppingsStr,item.totalPrice,item.detail,item.instruction);
    }

    preendItem(parent,template,item,quantity,variantsStr,toppingsStr,totalPrice,detail="",instruction=""){
        let clone=document.importNode(template.content,true);
        clone.querySelector("li.item-in-cart").setAttribute("data-menu-item-id",`item-in-cart-id-${item.id}`);
        clone.querySelector("li.item-in-cart").setAttribute("data-variants",variantsStr);
        clone.querySelector("li.item-in-cart").setAttribute("data-toppings",toppingsStr);
        
        clone.querySelector(".item-name").children[0].innerText=item.name;
        clone.querySelector(".item-detail").children[0].innerText=detail;
        clone.querySelector(".item-instruction").children[0].innerText=instruction;
        clone.querySelector(".price-container").children[0].innerText="€ "+totalPrice;
        clone.querySelector(".item-quantity").innerText=quantity;
        clone.querySelector(".item-image-container img").setAttribute("src",`../images/item/${item.picture}`);
        this.controlSvg(clone,quantity);
        parent.prepend(clone);
    }

    updateCartValue(cart){
        let subTotal=cart?cart.subTotal:0;
        let standardDelivery=cart?cart.standardDelivery:0;
        let platformFee=cart?cart.platformFee:0;
        let total=cart?cart.total:0;
        this.cartSummaryView.querySelector(".subtotal dd").innerText="€ "+subTotal;
        this.cartSummaryView.querySelector(".standard-delivery dd").innerText="€ "+ standardDelivery;
        this.cartSummaryView.querySelector(".platform-fee dd").innerText="€ "+platformFee;
        this.cartSummaryView.querySelector(".cart-total-fee").children[0].innerText="€ "+total;
    }

    updateItemInCart(item,quantity,cart,variants,toppings,totalPrice,detail,instruction){
        const variantsString=variants.toString();
        const toppingsString=toppings.toString();
        let itemsInCart=this.cartSummaryView.querySelectorAll(`
            .item-in-cart[data-menu-item-id="item-in-cart-id-${item.id}"][data-variants="${variantsString}"][data-toppings="${toppingsString}"]
            `);
        let itemInCart=undefined;
        itemsInCart.forEach(i =>{
            if(i.querySelector("div.item-instruction p").innerText==instruction)
                itemInCart=i;
        });
        

        if(quantity<=0 && !itemInCart){
            return;
        }   
        
        if(quantity<=0 && itemInCart){
            itemInCart.remove();
        }
        else if(quantity>0 && itemInCart){
            itemInCart.querySelector(".item-quantity").innerText=quantity;
            itemInCart.querySelector(".price-container").children[0].innerText="€ "+totalPrice;
            this.controlSvg(itemInCart,quantity);
        }else{
            let itemList=this.cartSummaryView.querySelector(".group-item-list");
            let cartItemTemplate=this.cartSummaryView.querySelector("#item-in-cart-template");
            this.preendItem(itemList,cartItemTemplate,item,quantity,variantsString,toppingsString,totalPrice,detail,instruction);
        }
        this.controlEmptyCart(cart);
        this.updateCartValue(cart);
    }

    bindCheckout(handler){
        const reviewBtn=this.cartSummaryView.querySelector("button.instant-review-cart-btn");
        reviewBtn.addEventListener(
            "click",
            ()=>{
                let [number,subTotal]=handler();
                if(number > 0 && subTotal >=this.vendor.minDeliveryTotal){
                    const approach=sessionStorage.getItem("delivery-approach");
                    window.location.href = `checkout.html?vendorId=${this.vendor.id}&approach=${approach}`;
                    return;
                }
                const tipsElement=reviewBtn.parentElement.previousElementSibling;
                const showTips=(content)=>{
                    tipsElement.children[0].innerText=content;
                    tipsElement.style.display="block";
                    setTimeout(
                        ()=>{
                            tipsElement.style.display="none";
                        },
                        3000
                    );
                }
                if (number <= 0 ){
                    showTips("Please add dishes.");
                }else if(subTotal < this.vendor.minDeliveryTotal){
                    showTips("Restaurant require subtotal above € " + this.vendor.minDeliveryTotal);
                }
            }
        );
    }

    bindDeliveryApproach(handler){
        this.cartSummaryView.querySelector(".cart-expedition-wrapper").addEventListener(
            "click",
            (event) => {
                const targetButton=event.target.closest("button");
                let anotherBtn=null;
                if(targetButton.classList.contains("delivery-btn")){
                    handler("delivery");
                    anotherBtn=this.cartSummaryView.querySelector(".pickup-btn");
                }
                else{
                    anotherBtn=this.cartSummaryView.querySelector(".delivery-btn");
                    handler("pickup");
                }

                anotherBtn.classList.add("bg-light");
                anotherBtn.classList.add("border-0");
                anotherBtn.classList.remove("active");
                anotherBtn.classList.remove("bg-white");
                anotherBtn.classList.remove("border-color-light-gray");

                targetButton.classList.remove("bg-light");
                targetButton.classList.remove("border-0");
                targetButton.classList.add("active");
                targetButton.classList.add("bg-white");
                targetButton.classList.add("border-color-light-gray");
                event.stopPropagation();
            }
        );
    }

    bindToggleFavorite(handler) {
        this.vendorInfoView.querySelector(".favourite-btn").addEventListener('click', event => { 
            const btn = event.target.closest('.favourite-btn');    
            if (btn) {
                event.preventDefault();  
                event.stopPropagation(); 
                const isFavourite=btn.classList.contains("is-favourite-vendor");
                if(!isFavourite)
                    btn.classList.add("is-favourite-vendor");
                else
                    btn.classList.remove("is-favourite-vendor");
                handler(this.vendor.id,isFavourite);
            }
        });
    }

    handleTabsScroll(){
        const buffer=10;
        const { scrollLeft, scrollWidth, clientWidth}=this.tabsContainer;
        console.log("At first, scrollLeft="+scrollLeft);
        
        if(scrollWidth > clientWidth){
            document.querySelector("div.category-tabs").classList.add("is-overflowing");
        }
        if(scrollLeft < buffer)
            document.querySelector("div.category-tabs .pre-btn").classList.add("scroll-at-left-end");

        window.addEventListener('resize', () => {
            const {scrollWidth, clientWidth}=this.tabsContainer;
            if (scrollWidth > clientWidth) {
                document.querySelector("div.category-tabs").classList.add('is-overflowing');
            } else {
                document.querySelector("div.category-tabs").classList.remove('is-overflowing');
            }
        });

        this.tabsContainer.addEventListener(
            "scroll",
            () => {
                const { scrollLeft, scrollWidth, clientWidth}=this.tabsContainer;
                console.log("scrollLeft="+scrollLeft);
                if(scrollLeft < buffer)
                    document.querySelector("div.category-tabs .pre-btn").classList.add("scroll-at-left-end");
                else
                    document.querySelector("div.category-tabs .pre-btn").classList.remove("scroll-at-left-end");

                if(scrollLeft + clientWidth > scrollWidth-buffer)
                    document.querySelector("div.category-tabs div.next-btn").classList.add("scroll-at-right-end");
                else
                    document.querySelector("div.category-tabs div.next-btn").classList.remove("scroll-at-right-end");
            }
        );
            

    }
}