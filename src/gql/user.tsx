export const INSERT_USER_ONE = `
mutation insert_user_one($id: String!, $name: String!) {
  insert_user_one(object: {id: $id, name: $name}) {
    id
    name
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
