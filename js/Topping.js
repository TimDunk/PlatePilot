// Author： Xuquan Deng
class Topping{
    constructor(topping){
        this.id=topping.id;
        this.name=topping.name;
        this.price=topping.price;
        this.vendorId=topping.vendorId;
    }
}

class ToppingModel{
    constructor(){
        this.toppingsArr=[];
        this.loadData();
    }
    loadData(){
        const rawData=JSON.parse(toppingsArr);
        if(rawData)
            this.toppingsArr=rawData.map(item => new Topping(item));
    }
    getTopping(vendorId,id){
        return this.toppingsArr.find(v => v.id == id && v.vendorId==vendorId);
    }
}

class Variant{
    constructor(topping){
        this.id=topping.id;
        this.name=topping.name;
        this.extraFee=topping.price;
        this.vendorId=topping.vendorId;
    }
}

class VariantModel{
    constructor(){
        this.variantArr=[];
        this.loadData();
    }
    loadData(){
        const rawData=JSON.parse(variantData);
        if(rawData)
            this.variantArr=rawData.map(item => new Variant(item));
    }
    getVariant(vendorId,id){
        return this.variantArr.find(v => v.id == id && v.vendorId==vendorId);
    }
}
