//import { ApolloServer } from 'apollo-server';
import gql from '@apollo/server';
const { parse } = gql;

const typeDefs = gql`
    type Book {
        id: ID,
        name: String,
        genre: String
    }

    # ROOT TYPE
    type Query {
        books: [Book]
    }
`
export default typeDefs