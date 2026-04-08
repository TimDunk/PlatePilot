class Cuisine{
    constructor(data){
        this.id=data.id;
        this.text=data.text;
    }
}

class CuisineModel{
    constructor(data){
        this.cuisineArr=JSON.parse(cuisineData).map( e=>new Cuisine(e)) ;
    }
    findCuisineTextById(id){
        let cuisines=this.cuisineArr.filter(cuisine=>cuisine.id==id);
        if(cuisines[0])
            return cuisines[0].text;
        else
            return "";
    }
}

var cuisineModel=new CuisineModel();