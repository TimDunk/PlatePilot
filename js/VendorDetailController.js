class VendorDetailController{
    constructor(vendorId,categories,menuItems,detailView){
        this.detailView=detailView;
        this.categories=categories;
        this.menuItems=menuItems;
        this.init(vendorId);
    }
    async init(vendorId){
        const vendorModel = new VendorModel();
        await vendorModel.loadVendors();
        this.vendor=vendorModel.getVendorById(vendorId);
        this.detailView.setVendorInfo(this.vendor);
        this.detailView.setCategoryTabs(this.categories);
        this.detailView.renderMenu(this.categories,this.menuItems);
        this.detailView.bindAddToCart(this.addToCart.bind(this));
        this.setupObserver();
    }

    handleRenderMenu(){

    }

    handleSearch(){

    }
    addToCart(itemId){
        console.info("itemId="+itemId);
        this.detailView.openOrderModal(this.menuItems,itemId);
    }
    removeFromCart(){

    }
    setupObserver(){
        //TODO: the target -sections - should be adjusted
        const sections = this.detailView.menuView.querySelectorAll('.dish-category-section');
        const tabs = this.detailView.tabsContainer.querySelectorAll('li');

        let rootMarginBottom= (window.innerHeight-122-150);
        let rootMargin=`-122px 0px -${rootMarginBottom}px 0px`;

        const observerOptions = {
            root: null, // use the viewport
            rootMargin: rootMargin, // triggers when section is at this
            threshold: 0.0
        };

        const observer = new IntersectionObserver(
            (entries) => {
                let entry=entries[0];
                if (entry.isIntersecting) {
                    console.info("Intersecting is true.");
                    
                    tabs.forEach(link => link.classList.remove('active'));
                    const id = entry.target.getAttribute('id');
                    const idInedx=id.split("-").pop();
                    const activeLink = this.detailView.tabsContainer.querySelector(`#tabs-tab-${idInedx}`);
                    if (activeLink) {
                        activeLink.classList.add('active');
                        activeLink.scrollIntoView({ behavior: 'smooth', inline: 'nearest', block: 'nearest' });
                    }
                }else{
                    console.info("Intersecting is false.");
                }
            }, 
            observerOptions );

        sections.forEach(section => observer.observe(section));
    }
    checkout(){

    }
}

if ('history' in window && 'scrollRestoration' in history) {
    window.history.scrollRestoration = 'manual';
}

window.addEventListener('DOMContentLoaded', () => {
    const view = new VendorDetailView();
    const urlParams = new URLSearchParams(window.location.search);
    const vendorId= urlParams.get('id');
    if(vendorId){
        console.log(`vendorId=${vendorId}`);
    }
    const categories=new MenuCategoryModel().getCategoriesByKeyValue("vendorId",vendorId);
    const menuItems=(new MenuItemModel()).getItemsByKeyValue("vendorId",vendorId);
    const controller = new VendorDetailController(vendorId,categories,menuItems, view);
});


