export interface ApiListResponse<T> {
  meta: ApiListMeta
  data: T[]
}

export interface ApiListMeta {
  total: number
  lastPage: number
}
