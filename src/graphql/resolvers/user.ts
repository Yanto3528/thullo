export const userResolvers = {
  Query: {
    getUser: () => {
      return {
        id: 'Foo',
      }
    },
  },
}
