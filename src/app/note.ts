export class Note {
    id:number;
    notes:string;
    date:number;
    description:string;

    constructor(id:number,notes:string,date:number,description:string){
        this.notes=notes;
        this.id=id;
        this.description=description;
        this.date=date;
    }
}
