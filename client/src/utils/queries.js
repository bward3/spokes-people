import { gql } from '@apollo/client';

export const QUERY_USER = gql`
  query User {
  user {
    _id
    username
    email
    favorites {
      favoritesId
      lat
      long
    }
  }
}
`;


export const QUERY_ME = gql`
  query me {
    me {
      _id
      username
      email
      favorites {
        _id
        createdAt
      }
    }
  }
`;