class CustomAddress{
    constructor(address){
        this.country=address.country;
        this.county=address.county;
        this.city=address.city;
        this.district=address.district;
        this.detailAddress=address.detailAddress;
        this.postCode=address.postCode;
        this.latitude=address.latitude;
        this.longitude=address.longitude;
    }

}

class Customer{
    constructor(data){
        this.id=data.id;
        this.address=new CustomAddress(data.address);
    }
}

var currentCustomer=new Customer(JSON.parse(currentCustomerData));

class Vendor{
    constructor(data){
        this.id=data.id;
        this.name=data.name;

        //this.menuCategoryArr = data.menuCategoryArr?data.menuCategoryArr.map(category => new MenuCategory(category)):[];
        //this.toppingsMap=data.toppings?new Map(Object.entries(data.toppings)):new Map();

        this.cuisines=data.cuisines?data.cuisines:[];
        this.primaryCuisineId=data.primaryCuisineId;
        this.minDeliveryTotal=data.minDeliveryTotal;
        this.deliveryFee=data.deliveryFee;
        this.ratedLevel=data.ratedLevel;
        // this.isOpen=data.isOpen;
        this.picture=data.picture;
        this.address=new CustomAddress(data.address);
        let d=this.calculateDistance(data.address);
        this.distance=d;
        this.minDeliveryTime=data.minDeliveryTime;
        this.maxDeliveryTime=this.caculateMaxDeliveryTime(data.minDeliveryTime,d);
    }
    calculateDistance(vendorAddress){
        /*Use the Haversine formula to calculate the straigh-line distance between the customer's address and the venord's*/
        let lat2=vendorAddress.latitude;
        let lat1=currentCustomer.address.latitude;
        let lon2=vendorAddress.longitude;
        let lon1=currentCustomer.address.longitude;
        const R = 6371; //The earth‘s Radius in km
        // Convert degrees to radians
        const dLat = (lat2 - lat1) * Math.PI / 180;
        const dLon = (lon2 - lon1) * Math.PI / 180;
        const a = Math.sin(dLat / 2) * Math.sin(dLat / 2) +Math.cos(lat1 * Math.PI / 180) * Math.cos(lat2 * Math.PI / 180) * Math.sin(dLon / 2) * Math.sin(dLon / 2);
        const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
        const distance = R * c; //The straigh-line distance in km
        return Number(distance.toFixed(2)); 
    }
    caculateMaxDeliveryTime(minTime,distance){
        let collectedTime=3; //make an assumption in minute
        let finalTime=3;
        let speed=30;       // 30 km per hour on the way by a rider 
        const totalDeliveryTime=collectedTime+finalTime + (distance / speed) * 60 + minTime;
        return Number(totalDeliveryTime.toFixed(0));
    }

}

class FilterCriteria{
    constructor(){
        this.searchText="";
        this.cuisines=[];
        this.rateLevel=[];
    }
    setCriteria(data){
        this.searchText=data.searchText?data.searchText:this.searchText;
        this.cuisines=data.cuisines?[...data.cuisines]:[];
        this.rateLevel=data.rateLevel?[...data.rateLevel]:[];
    }
    clearFilters(){
        this.cuisines=[];
        this.rateLevel=[];
    }
}

class VendorModel {
    constructor() {
        this.vendors=[]; 
        this.unFilteredVendors=[];
        this.pageSize=12;
        this.cuisineSet=new Set();
    }

    loadVendors() {
        const rawData =JSON.parse(allVendorsData);
        let vendors = rawData.map(item => new Vendor(item));
        this.unFilteredVendors=[...vendors];
        this.vendors =[...vendors];
        return this.vendors;
    }
    resetAsUnFiltered(){
        this.vendors=[...this.unFilteredVendors];
    }

    //Find a specific vendor for the Detail Page
    getVendorById(id) {
        if((typeof id)=="string"){
            const numberId=Number(id);
            return this.vendors.find(v => v.id === numberId);
        }
        else if((typeof id)=="number"){
            return this.vendors.find(v => v.id === id);
        }else{
            return this.vendors[0];
        }
    }

    // Search filter,just filter against vendor's name
    search(query) {
        return this.vendors.filter(v => 
            v.name.toLowerCase().includes(query.toLowerCase())
        );
    }

    filterVendors(criteria){
        const filterRating = (vendorRatedLevel) => {
            let filteredResult = criteria.rateLevel.filter(rating => vendorRatedLevel >= rating );
            return filteredResult.length>0;
        };
        //every time filter against the unfilter vendor list
        this.vendors = this.unFilteredVendors.filter(vendor => {
            const matchesSearch = vendor.name.toLowerCase().includes(criteria.searchText);
            const matchesRating = criteria.rateLevel.length==0 || filterRating(vendor.ratedLevel);
            let intersectedCuisines=(new Set(vendor.cuisines)).intersection(new Set(criteria.cuisines));
            const matchesCuisine = criteria.cuisines.length==0 || intersectedCuisines.size>0;
            
            return matchesSearch && matchesCuisine && matchesRating;
        });
    }
	
	getVendorsByPage(pageNumber) {
		const start = (pageNumber - 1) * this.pageSize;
		const end = start + this.pageSize;
		return this.vendors.slice(start, end);
	}

    getCuisineSet(){
        this.vendors.forEach((vendor)=>{
            let cuisines=vendor.cuisines;
            for(let c of cuisines){
                this.cuisineSet.add(c);
            }
        })
        return this.cuisineSet;
    }
    sortVendors(key){
        this.vendors.sort(
            (a,b)=>{
                if(key=="ratedLevel")
                    return b[key]-a[key];
                else
                    return a[key]-b[key];
            }
        );
    }
}
