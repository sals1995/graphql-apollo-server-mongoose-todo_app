import { GraphQLError } from "graphql";
import todoModel from "../../../models/todo.js";

let todoQuery = {
  todos: async () => {
    return await todoModel.find();
  },
  todo: async (_, args) => {
    let todo = await todoModel.findOne({ _id: args.id });
    if (!todo)
      throw new GraphQLError("todo is not found", {
        extensions: { http: { status: 404 } },
      });
    return todo
  },
};

export default todoQuery;
