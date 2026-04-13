// Author： Xuquan Deng
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
        this.variants=menuItem.variants?menuItem.variants:[];
        this.toppings=menuItem.toppings?menuItem.toppings:[];
    }

    getVariants(){
        const variantIdsOnItem=this.variants;
        const variantJson=JSON.parse(variantData);
        const variantArray=variantJson.filter(v=>v.vendorId==this.vendorId);
        return variantArray.filter( v => variantIdsOnItem.includes(v.id));
    }
    getToppings(){
        const toppingIdsOnItem=this.toppings.flatMap(x=>x.options);
        const toppingJson=JSON.parse(toppingsArr);
        const toppingArray=toppingJson.filter(v=>v.vendorId==this.vendorId);
        return toppingArray.filter( v => toppingIdsOnItem.includes(v.id));
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
    getItemsByKeyNumberValue(key,value){
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

    getVariants(vendorId,itemId){
        const items=this.getItemsByKeyNumberValue("vendorId",vendorId);
        const item=items.find(i => i.id===itemId);
        const variantIdsOnItem=item.variants;

        const variantJson=JSON.parse(variantData);
        const variantArray=variantJson.filter(v=>v.vendorId==vendorId);
        
        return variantArray.filter( v => variantIdsOnItem.includes(v.id));
        
    }

    getToppings(vendorId,itemId){
        const items=this.getItemsByKeyNumberValue("vendorId",vendorId);
        const item=items.find(i => i.id===itemId);
        const toppingIdsOnItem=item.toppings.flatMap(x=>x.options);

        const toppingJson=JSON.parse(toppingsArr);
        const toppingArray=toppingJson.filter(v=>v.vendorId==vendorId);
        
        return toppingArray.filter( v => toppingIdsOnItem.includes(v.id));
    }
    
}