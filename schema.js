

const typeDefs=`#graphql
    type Query{
        users:[User]!
        todos: [Todo]!
        user(_id:ID!):User
        todo(_id:ID!):Todo
    }

    type User{
        _id:ID
        email:String
        name:String
        todos:[Todo]
    }
    type Todo{
        _id:ID
        title:String
        completed:Boolean
        user:User
    }

    type Mutation{
        register(user:UserInput): User
        login(user:UserInput):String
        addTodo(todo:TodoInput):Todo
        deleteTodo(id:ID!):String
    }
    input TodoInput{
        title:String!
        completed:Boolean
    }

    input UserInput{
        email:String!
        password:String!
        name:String
    }
`

export default typeDefs