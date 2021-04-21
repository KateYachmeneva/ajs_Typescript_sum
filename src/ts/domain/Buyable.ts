export default interface Buyable{
    readonly id: number,
    readonly name: string,
    readonly nameInEng: string,
    readonly logoImax: boolean,
    readonly country: string,
    readonly tagline: string,
    readonly genre: string[],
    readonly timeline: number,
    readonly poster:string,
    readonly price: number

}