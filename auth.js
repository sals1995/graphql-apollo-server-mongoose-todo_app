import { GraphQLError } from "graphql"
import { promisify } from "util"
import jwt from "jsonwebtoken"

export async function checkAuth(req){
    try{
      if (!req.headers.authorization) {
        
        return null
      }
      else{
        var decoded = await promisify(jwt.verify)(req.headers.authorization,process.env.SECRET)
        console.log('decoded: ', decoded);
        
        return decoded
        
      }
    }catch(err){

      return null
    }
}