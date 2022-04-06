export const cardResolvers = {
  Query: {
    getCard: () => {
      return {
        id: 'Card id',
        title: 'Card title',
      }
    },
  },
}
