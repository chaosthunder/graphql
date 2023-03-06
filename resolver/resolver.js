const resolvers = {
    Query: {
        books: () => [
            {
                id: 1,
                name: "Book 1",
                genre: "Education"
            },
            {
                id: 2,
                name: "Book 2",
                genre: "Dance"
            },
            {
                id: 3,
                name: "Book 3",
                genre: "Holidays"
            }
        ]
    }
}

export default resolvers
