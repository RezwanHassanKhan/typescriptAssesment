export class User{
    private  email  : string
    private  id : number
    private  name : string

    constructor(name : string, id : number, email: string){
        this.email =email,
        this.id = id,
        this.name = name 
    }

    get_email(): string{
        return this.email
    }

}