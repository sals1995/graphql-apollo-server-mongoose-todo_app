import userMutation from "./user/Mutation.js";
import todoQuery from "./todo/Query.js";
import todoMutation from "./todo/Mutation.js";
import userQuery from "./user/Query.js";
import userModel from "../models/user.js";
import todoModel from "../models/todo.js";

const resolvers={
    Query:{

        ...userQuery,
        ...todoQuery
    },
    Mutation:{
        ...userMutation,
        ...todoMutation
    },
    Todo:{
        user:async (parent) => {
            return await userModel.findOne({_id :parent.userId })
        }
    },
    User:{
        todos:async (parent) => {
            return await todoModel.find({userId:parent._id})
        }
    }
}

export default resolvers