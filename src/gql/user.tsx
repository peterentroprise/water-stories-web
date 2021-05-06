export const INSERT_USERS_AUTH_ONE = `
mutation insertUsersAuthOne($id: String!, $name: String!) {
  insert_users(objects: {id: $id, name: $name}) {
    returning {
      id
      created_at
    }
  }
}`;

export const GET_USER_BY_PK = `
query getUserByPK($id: String!) {
  users_by_pk(id: $id) {
    id
    name
  }
}
}`;
