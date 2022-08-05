import { gql } from '@apollo/client';

export const QUERY_USER = gql`
  query User {
  user {
    _id
    username
    email
    favorites {
      _id
      name
      lat
      lon
    }
  }
}
`;
