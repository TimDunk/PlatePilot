class VendorDetailView{
    constructor(){
        this.vendorInfoView=document.querySelector(".vendor-info");
        this.menuView=document.getElementById("menu");
        this.cartSummaryView=document.querySelector(".cart-summary");
        this.tabsContainer=document.querySelector('.tabs-container');
        this.addEventsToMenuNav();
    }
    setVendorInfo(vendor){

    }

    setCategoryTabs(menuCategoryArr){
        const tabList=this.tabsContainer.querySelector(".tabs-list");
        menuCategoryArr.forEach( element => {
            let child=`
            <li class="" id="tabs-tab-${element.id}">
                <button><span>${element.category}</span></button>
            </li>`;
            const fragment=document.createRange().createContextualFragment(child);
            tabList.appendChild(fragment);
        });
        tabList.children[0].classList.add("active");
    }

    renderMenu(categories,menuItems){
        categories.forEach( cag => {
            let categorySection=`
            <div class="dish-category-section" id="menu_category-id-${cag.id}">
                <div class="category-title">${cag.category}</div>
                <ul class="dish-list-grid">
                </ul>
            </div>
            `;
            const fragment=document.createRange().createContextualFragment(categorySection);

            const menuItemContainer=fragment.querySelector("ul.dish-list-grid");
            const items=menuItems.filter(item => item.categoryId == cag.id )
            items.forEach(item => {
                let itemCard=`
                <li id="menu-item-id-${item.id}"><div>Item name is ${item.name}</div></li>`;
                menuItemContainer.appendChild(document.createRange().createContextualFragment(itemCard));
            });

            this.menuView.appendChild(fragment);
        });
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
            if(targetCategory)
                targetCategory.scrollIntoView({ behavior: 'smooth', block: 'start',container: 'nearest' });            
        });
        
    }

    openOrderModal(menuItem, cartData){
        const modalElement=document.getElementById("manage-menuitems-modal");
        const modal = new bootstrap.Modal(modalElement);
        modal.show();
    }

    bindAddToCart(handler){
        this.menuView.addEventListener(
            "click",
            event=>{
                const itemCard=event.target.closest("li.menu-item-card");
                const itemId=itemCard.dataset.menuItemId.split("-").pop();
                handler(Number(itemId));
                event.stopPropagation();
            }
        );
    }

    bindIncreaseInCart(handler){

    }
    bindRemoveInCart(handler){

    }
    bindCheckout(handler){

    }
    bindDeliveryApproach(handler){

    }
}