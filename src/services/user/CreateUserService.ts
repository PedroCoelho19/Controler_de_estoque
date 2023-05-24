import prismaClient from "../../prisma";
import {hash} from "bcryptjs"
import {UserRequest} from "../../models/interfaces/user/UserRequest"


class CreateUserService{
    async execute({name, email, password}:UserRequest){
        if(!email){
            throw new Error("Email incorrect")
        }

        const userAlreadyExists = await prismaClient.user.findFirst({
            where:{
                email: email,
            }
        })

        if(userAlreadyExists){
            throw new Error("Email already exists")
        }
        
        const passwordHash = await hash(password , 8);
        
        const user = prismaClient
    }
}

export {CreateUserService}