export const INSERT_USER_ACCOUNT_ONE = `
mutation insert_user_account_one($user_id: String!, $name: String!, $image: String, $email: String) {
  insert_user_account_one(object: {user_id: $user_id, name: $name, image: $image, email: $email}, on_conflict: {constraint: user_account_pkey, update_columns: user_id}) {
    user_id
    name
    email
    content_tier
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
