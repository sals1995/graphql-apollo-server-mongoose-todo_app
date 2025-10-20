import userModel from "../../models/user.js"

const userQuery={
    users:async ()=>{
        return await userModel.find()
    },
    async user (_,{_id}) {
       return await userModel.findOne({_id})
    }
}
export default userQuery