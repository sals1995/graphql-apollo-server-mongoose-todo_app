import todoModel from "../../models/todo.js"

const todoQuery={
    todos:async (_,arg,context) => {
        // console.log('context: ', context);
        return await todoModel.find()
    },
     async todo (_,{_id}) {
      try {
         return await todoModel.findOne({_id})
      } catch (error) {
        throw new Error("Can't get todo")
      }
    }
}
export default todoQuery