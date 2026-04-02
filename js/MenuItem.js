class MenuItem{
    constructor(menuItem){
        this.id=menuItem.id;
        this.name=menuItem.name;
        this.price=menuItem.price;
        this.isAvailable=menuItem.isAvailable;
        this.description=menuItem.description;
        this.picture=menuItem.picture;
        this.vendorId=menuItem.vendorId;
        this.categoryId=menuItem.categoryId;
        this.type=menuItem.type;
    }
}

class MenuItemModel{
    constructor(){
        this.menuItemArr=[];
        this.loadData();
    }
    loadData(){
        const rawData=JSON.parse(menuItemData);
        if(rawData)
            this.menuItemArr=rawData.map(item => new MenuItem(item));
    }
    getItemsByKeyValue(key,value){
        if((typeof value)=="string"){
            const number=Number(value);
            return this.menuItemArr.filter(v => v[key] === number);
        }
        else if((typeof value)=="number"){
            return this.menuItemArr.filter(v => v[key] === value);
        }else{
            return [this.menuItemArr[0]];
        }
    }
}