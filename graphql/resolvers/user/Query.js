import { GraphQLError } from "graphql";
import userModel from "../../../models/user.js";

let userQuery = {
  users: async (_,args) => {
    return await userModel.find();
  },
  user: async (_, { id }) => {
    let user = await userModel.findOne({ _id: id });
    if (user) return user;
    else
      throw new GraphQLError("user not found", {
        extensions: { http: { status: 404 } },
      });
  },
};

export default userQuery;
