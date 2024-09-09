export interface User {
  id: string
  username: string
  email: string
  roles: UserRoles[]
  createdAt: Date
  updatedAt: Date
  deletedAt: null | Date
  createdBy: null | User
}

export enum UserRoles {
  Admin = 'Admin',
  User = 'User',
  Moderator = 'Moderator'
}
