import userModel from "../../models/user.js"
import bcrypt from "bcrypt"
import { GraphQLError } from "graphql"
import jwt from "jsonwebtoken"
const userMutation={
    async  register(p,arg) {
        return await userModel.create(arg.user)
    },
    async  login(_,{user:{email,password}}) {
        if (!email || !password) {
          throw new GraphQLError('please provide email and password',{
            extensions:{
                http:{status:400}
            }
          });
        }
        var user = await userModel.findOne({ email })
        if (!user) {
            throw new GraphQLError('Invalid email or password' ,{
            extensions:{
                http:{status:401}
            }
          })
        }
        var isValid = await bcrypt.compare(password, user.password)

        if (!isValid) {
            throw new GraphQLError( 'Invalid email or password' ,{
            extensions:{
                http:{status:401}
            }
          })
        }

     var token = jwt.sign({ id: user._id, name: user.name }, process.env.SECRET)
        return token
    }
}
export default userMutation