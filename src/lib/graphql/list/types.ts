export interface GetListsArgs {
  boardId: string
}

export interface CreateListArgs {
  boardId: string
  title: string
}

export interface UpdateListArgs {
  id: string
  title?: string
  cardOrders?: string[]
}
