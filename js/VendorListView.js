// Author： Xuquan Deng
class VendorListView {
    constructor(containerId) {
        this.container = document.getElementById(containerId);
    }

    render(vendors,favoriteIds) {
        this.container.innerHTML = ""; // Clear old list

        if (vendors.length === 0) {
			this.container.innerHTML = `
                <div></div><div></div><div></div><div></div>
                <div class="card text-center">
                    <div class="card-body">
                        <h4 class="card-title" style="color: var(--bs-pink);">No Result!</h4>
                        <p class="card-text">Please Change Your Search or Filter Conditions.</p>
                    </div>
                </div>
			`;
			return;
		}
        
        vendors.forEach(vendor => {
			// Check if this specific vendor's ID is in the favorite list
			const isFav = favoriteIds.includes(vendor.id);
			const card = this.createVendorCard(vendor, isFav);
			this.container.appendChild(card);
		});
    }
		
	appendVendors(vendors,favoriteIds) {
		vendors.forEach(vendor => {
            const isFav = favoriteIds.includes(vendor.id);
			const card = this.createVendorCard(vendor,isFav);
			this.container.appendChild(card); // Adds to the bottom
		});
    }
	
	createVendorCard(vendor, isFavorited) {
        let cardTemplate=document.getElementById("vendorTemplate");
        let clone=document.importNode(cardTemplate.content,true);
        clone.querySelector(".vendor-name").textContent=vendor.name;
        clone.querySelector(".vendor-rating-label").textContent=vendor.ratedLevel;
        // let imgSrc=`../images/vendor/${vendor.picture}`;
        let imgSrc=`../images/330W/${vendor.picture}`;
        clone.querySelector(".vendor-img-container img").setAttribute("src",imgSrc);
        let durationNode=clone.querySelector(".delivey-duration");
        durationNode.children[0].textContent=vendor.minDeliveryTime;
        durationNode.children[1].textContent=vendor.maxDeliveryTime;
        clone.querySelector(".vendor-minimum-total").children[0].textContent=vendor.minDeliveryTotal.toFixed(2);
        let primaryCuisine=cuisineModel.findCuisineTextById(vendor.primaryCuisineId);
        clone.querySelector(".vendor-cuisine").textContent=primaryCuisine;
        clone.querySelector(".vendor-delivery-fee").children[1].textContent=vendor.deliveryFee.toFixed(2);
        clone.querySelector(".vendor-card").setAttribute("data-id",vendor.id);
        clone.querySelector(".vendor-card").setAttribute("href",`vendor-detail.html?id=${vendor.id}`);
        
        if(isFavorited)
            clone.querySelector(".vendor-card").classList.add("is-favourite-vendor");
		return clone;
	}
	
	// This is called by the Controller
    bindToggleFavorite(handler) {
        this.container.addEventListener('click', event => { 
            const btn = event.target.closest('.favourite-btn');    
            if (btn) {
                event.preventDefault();  // Stops the <a> link from firing
                event.stopPropagation(); // Stops the click from moving up the DOM
                const vendorCard=btn.closest(".vendor-card");
                const vendorId =vendorCard.dataset.id;
                const isFavourite=vendorCard.classList.contains("is-favourite-vendor");
                if(!isFavourite)
                    vendorCard.classList.add("is-favourite-vendor");
                else
                    vendorCard.classList.remove("is-favourite-vendor");
                handler(vendorId,isFavourite);
                console.log("bindToggleFavorite");
            }
        });
    }
	
}