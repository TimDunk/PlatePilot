class VendorController {
    constructor(vendorModel, view, filterView) {
        this.vendorModel = vendorModel; // Instance of VendorModel
        this.view = view;   // Instance of VendorListView
        this.filterView = filterView;
        this.displayedVendors = [];  // The "Filtered List"
        this.init();
        this.criteria = new FilterCriteria(); 
		this.view.bindToggleFavorite( (id,isFavourite) => this.handleToggleFavorite(id,isFavourite) );
        this.filterView.bindFilterChange(this.handleFiltering.bind(this));
        this.filterView.bindSort(this.handleSort.bind(this));
        this.filterView.bindSearch(this.handleSearch.bind(this));
        this.sort="id";
    }

    handleToggleFavorite(id,isFavourite){
        try {
            let storedString=sessionStorage.getItem("FavouriteVendors");
            const parsedArray = storedString ? JSON.parse(storedString) : [];
            let fvSet=new Set(parsedArray);
            if(isFavourite){ //remove from favourit 
                fvSet.delete(Number(id))
            }else{ //add to favourit
                fvSet.add(Number(id));
            }
            const fvArray=[...fvSet];
            sessionStorage.setItem("FavouriteVendors",JSON.stringify(fvArray));  
        } catch (error) {
            console.error(error);
        } finally {
        }        
    }

    async init() {
        await this.vendorModel.loadVendors();
        this.currentPage=1;
		const initialData = await this.vendorModel.getVendorsByPage(this.currentPage);
        this.displayedVendors = [...initialData];
        this.renderList(this.displayedVendors);
        this.filterView.createCuisineFilter(this.vendorModel.getCuisineSet());
		this.setupObserver();
    }
	
	renderList(vendors) {
		const favorites = this.vendorModel.getFavoriteIds(); 
		this.view.render(vendors, favorites);
	}

    async handleSort(sortId){
        switch(sortId){
            case "relevant-sort":
                this.sort="id";
                this.vendorModel.sortVendors("id");
                break;
            case "fastest-sort":
                this.sort="maxDeliveryTime";
                this.vendorModel.sortVendors("maxDeliveryTime");
                break;
            case "distance-sort":
                this.sort="distance";
                this.vendorModel.sortVendors("distance");
                break;
            case "rated-level-sort":
                this.sort="ratedLevel";
                this.vendorModel.sortVendors("ratedLevel");
                break;
            default:
                break;
        }
        this.currentPage = 1;
        const initialData = await this.vendorModel.getVendorsByPage(this.currentPage);
        this.displayedVendors = [...initialData];
        this.renderList(this.displayedVendors );
        this.setupObserver(); 
    }

    handleSearch(searchText) {
        this.criteria.searchText = searchText.toLowerCase();
        this.handleFiltering(this.criteria);
    }
    
    async handleFiltering(newCriteria) {
        this.criteria.setCriteria(newCriteria) ;
        await this.vendorModel.filterVendors(this.criteria);
        this.vendorModel.sortVendors(this.sort);
        this.currentPage = 1;
        const initialData = await this.vendorModel.getVendorsByPage(this.currentPage);
        this.displayedVendors = [...initialData];
        this.renderList(this.displayedVendors );
        this.setupObserver(); 
    }

	async handleLoadMore() {
		this.isLoading = true;
		this.currentPage++;
		const nextBatch = await this.vendorModel.getVendorsByPage(this.currentPage);

		if (nextBatch.length > 0) {
            const favorites = this.vendorModel.getFavoriteIds(); 
			this.view.appendVendors(nextBatch,favorites);
            this.isLoading = false;
		} else {
			this.observer.disconnect(); 
		}
	}

	/*to observe whether it should load more page*/
	setupObserver() {
        this.isLoading=false;
		const options = { root: null, threshold: 1.0 };
		const callback=entries=>{
			if (entries[0].isIntersecting && !this.isLoading) {
				this.handleLoadMore();
			}
		}
		this.observer = new IntersectionObserver(callback,options);
		this.observer.observe(document.querySelector('#load-more-anchor'));
	}
	
}

window.addEventListener('DOMContentLoaded', () => {
    const vendorModel = new VendorModel();
    const view = new VendorListView('vendor-list');
    const filterView= new FilterView("filter-panel");
    const controller = new VendorController(vendorModel, view, filterView);
});