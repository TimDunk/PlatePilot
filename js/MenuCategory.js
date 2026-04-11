class MenuCategory{
    constructor(category){
        this.id=category.id;
        this.category=category.category;
        this.vendorId=category.vendorId;
    }
}

class MenuCategoryModel{
    constructor(){
        this.menuCategoryArr=[];
        this.loadData();
    }
    loadData(){
        const rawData=JSON.parse(categoryData);
        if(rawData)
            this.menuCategoryArr=rawData.map(c => new MenuCategory(c));
    }
    getCategoriesByKeyValue(key,value){
        if((typeof value)=="string"){
            const numberId=Number(value);
            return this.menuCategoryArr.filter(v => v[key] === numberId);
        }
        else if((typeof value)=="number"){
            return this.menuCategoryArr.filter(v => v[key] === value);
        }else{
            return [this.menuCategoryArr[0]];
        }
    }
}