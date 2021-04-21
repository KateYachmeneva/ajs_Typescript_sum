import Buyable from '../domain/Buyable';

export default class Cart{
    private _items: Buyable [] = [];

    add (item:Buyable):void {
        this._items.push(item);
    }

    get items(): Buyable[]{
        return [...this._items];
    }
sumTotal():number{
   let result = this.items.reduce(function(sum,current){
        return sum + current.price;
    },0);
    return result;
}
sumWithDiscount(discount:number): number { 
    const resultWithOutdiscount = this.items.reduce(function(sum,current){
        return sum + current.price;
    },0);
return resultWithOutdiscount - resultWithOutdiscount*discount/100;
}
deleteItem(id:number):void {
    const suteIndex = this.items.findIndex((item) => item.id === id);
     this._items.splice(suteIndex,1);
}
}

