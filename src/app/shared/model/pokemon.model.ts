export class Pokemon {
    public id: number
    public name : string
    public url : string
    public description : string
    public type: string
    constructor( id: number, name: string, url: string, description:string,type:string){
        this.id = id 
        this.name = name
        this.url =url 
        this.description = description
        this.type = type

    }
}