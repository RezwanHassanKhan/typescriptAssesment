
import { User } from "../app/assesment"
describe("User Test Suite",()=>{

    let sut : User
    beforeEach(()=>{
        sut= new User('rez',1,"md.rezwanhassan@gmail.com")

    })
    it("should check email",()=>{
        
        const actual_email = sut.get_email()
        expect(actual_email).toBe("md.rezwanhassan@gmail.com")
    })

}
)