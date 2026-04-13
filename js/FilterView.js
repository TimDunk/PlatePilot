// Author： Xuquan Deng
class FilterView {
    constructor(containerId) {
        this.container = document.getElementById(containerId);
        this.searchForm = document.querySelector('.head form.search');
        this.searchInput = document.querySelector('.head form input');
    }
    createCuisineFilter(cuisineSet){
        let cuisine_filter_container=this.container.querySelector("aside .cuisine-filter .list-group");
        let cuisineFilterTemplate=document.getElementById("cuisine-filter-template");

        cuisineSet.forEach(
            (cuisine) => {
                let id=`cuisine-id-${cuisine}`;
                let clone=document.importNode(cuisineFilterTemplate.content,true);
                let input=clone.querySelector("input");
                input.value=cuisine;
                input.id=id;
                let label=clone.querySelector("label");
                label.setAttribute("for",id);
                let cuisineName=cuisineModel.findCuisineTextById(cuisine);
                label.children[1].textContent=cuisineName;
                cuisine_filter_container.appendChild(clone);
            }
        );
    }
    getCheckedFilter(element){
        let arr=[];
        element.forEach( e => {
            if(e.checked)
                arr.push(Number(e.value))
        });
        return arr;
    }
    getFilterCirteira(){
        let rating_filter=this.container.querySelectorAll(".rating-filter input.form-check-input");
        let rating_filter_arr=this.getCheckedFilter(rating_filter);
        let cuisine_filter=this.container.querySelectorAll(".cuisine-filter input.form-check-input");
        let cuisine_filter_arr=this.getCheckedFilter(cuisine_filter);
       
        return {rateLevel:rating_filter_arr,cuisines:cuisine_filter_arr};
    }
    bindFilterChange(handler){
        let filter_container=this.container.querySelector(".rating-cuisine-filter");
        filter_container.addEventListener('change', event => { 
            const btn = event.target;    
            if (btn) {
                event.stopPropagation(); // Stops the click from moving up the DOM
                console.info("FilterView.bindFilterChange()");
                let filter=this.getFilterCirteira();
                handler(filter);
            }
        });
    }
    bindSort(handler){
        let sort_container=this.container.querySelector(".sort-filter");
        sort_container.addEventListener('change', event => { 
            const btn = event.target;    
            if (btn) {
                event.stopPropagation(); // Stops the click from moving up the DOM
                console.info("FilterView.bindSort()");
                console.info(event.target.toString());
                // let sort_filter=this.container.querySelectorAll(".sort-filter input.form-check-input");
                handler(btn.value);
            }
        });
    }
    bindSearch(handler) {
        this.searchForm.addEventListener('submit', (event) => {
            event.preventDefault();
            const searchText = this.searchInput.value;
            handler(searchText);
        });
    }
}