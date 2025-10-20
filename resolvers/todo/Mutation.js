import { GraphQLError } from "graphql";
import todoModel from "../../models/todo.js"

const todoMutation={
   async addTodo(_,{todo},context){
        
        if(!context.user.id){
            throw  new GraphQLError( 'you have not access , please login first' ,{
            extensions:{
                http:{status:401}
            }
          })
        }
        todo.userId= context.user.id
       return await todoModel.create(todo)
    },
    async  deleteTodo(_,{id},context) {
        // console.log('context.user.id: ', context.user.id);
        if(!context.user.id){
             throw  new GraphQLError( 'you have not access , please login first' ,{
            extensions:{
                http:{status:401}
            }
          })
        }
        await todoModel.findByIdAndDelete(id)
        return "deleted successfully"
    }
}
export default todoMutation