export const INSERT_USERS_ONE = `
mutation insert_users_one($id: String!, $name: String!) {
  insert_users_one(object: {id: $id, name: $name}) {
    id
    created_at
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
