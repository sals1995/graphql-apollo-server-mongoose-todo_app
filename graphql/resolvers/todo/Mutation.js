import { GraphQLError } from "graphql";
import todoModel from "../../../models/todo.js";

let todoMutation = {
  async addTodo(_, { todo }, context) {
    if (!context.id)
      throw new GraphQLError("you're not authorized", {
        extensions: { http: { status: 401 } },
      });
      todo.userId=context.id
    return await todoModel.create(todo)
  },


};

export default todoMutation;
