export class Burger {
    // price:number
    constructor(
        public name:string,
        public salad:boolean,
        public chees:number,
        public cutlets:number,
        public bun:number,
        public price:number=0
    ) {}
}