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
   let result = this.items.reduce((sum,current) => sum +current.price,0);
    return result;
}
sumWithDiscount(discount:number): number { 
    const resultWithOutdiscount = this.sumTotal();
return resultWithOutdiscount - resultWithOutdiscount*discount/100;
}
deleteItem(id:number):void {
     console.log(this.items);
     const suteIndex = this.items.findIndex((item:any) => item.id === id);
     this._items.splice(suteIndex,1);
}
}

