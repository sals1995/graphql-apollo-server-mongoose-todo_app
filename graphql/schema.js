//SDL
let typeDefs=` #graphql
    type Query{
        users:[User]
        user(id:ID!):User
        todos:[Todo]
        todo(id:ID!):Todo
    }
    type User{
        id:ID
        name:String
        email:String
        todos:[Todo]
    }
    type Todo{
        id:ID
        title:String
        completed:Boolean
        user:User
    }
    type Mutation{
        register(user:UserInput!):User
        login(user:UserInput!): String
        updateUser(id:ID!,user:UserInputUpdate!):User
        deleteUser(id:ID!):String
        addTodo(todo:TodoInput):Todo
        
    }
    input TodoInput{
        title:String
        completed:Boolean
    }
    input UserInput{
        email:String!
        name:String
        password:String!
    }
    input UserInputUpdate{
        email:String
        name:String
        password:String
    }
`

export default typeDefs