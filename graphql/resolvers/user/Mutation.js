import { GraphQLError } from "graphql";
import userModel from "../../../models/user.js";
import  jwt  from "jsonwebtoken";
import bcrypt from "bcrypt"
let userMutation = {
  register: async (_, { user }) => {
    return await userModel.create(user);
  },
  async login(_, { user }) {
    let userInDB = await userModel.findOne({ email: user.email });
    if (!userInDB)
      throw new GraphQLError("invalid credentials", {
        extensions: { http: { status: 401 } },
      });
     let isValid= await bcrypt.compare(user.password,userInDB.password)
     if(!isValid)
        throw new GraphQLError("invalid credentials", {
        extensions: { http: { status: 401 } },
      });
    let token=  jwt.sign({id:userInDB._id,name:userInDB.name},process.env.SECRET)
    return token
  },
  updateUser: async (_,{id, user})=> {
     return await userModel.findOneAndUpdate({_id:id} , user, { 
         // new:true, //Warning: mongoose: the `new` option for `findOneAndUpdate()` and `findOneAndReplace()` 
         // is deprecated. Use `returnDocument: 'after'` instead
         returnDocument: 'after',
    })
  },
  deleteUser:async (_,{id}) => {
    await userModel.deleteOne({_id:id})
    return "deleted successfully"
  }
};

export default userMutation;
