import { gql } from "@apollo/client";

export const ADD_USER = gql`
  mutation addUser($username: String!, $password: String!, $email: String!) {
    addUser(username: $username, password: $password, email: $email) {
      token
      user {
        _id
        username
        email
        favorites {
          _id
          name
          lat
          long
        }
      }
    }
  }
`;

export const UPDATE_USER = gql`
mutation updateUser($id: ID!, $username: String!, $password: String!, $email: String!) {
  updateUser(username: $username, password: $password, email: $email) {
    token
    user {
    _id
    username
    email
    }
  }
}
`;

export const REMOVE_USER = gql`
  mutation deleteUser($id: ID!, $username: String!, $password: String!, $email: String!) {
    deleteUser(id: ID, username: String, password: String, email: String) {
      token
        user {
          _id
          username
          email
            favorites {
              favoritesId
              name
              lat
              long
            }
        }
    }
  }
`;

export const LOGIN_USER = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
        username
        email
      }
    }
  }
`;

export const CREATE_FAVORITE = gql`
  mutation addFavorite($name: String!, $lat: Int!, $long: Int!) {
    addFavorite(name: $name, lat: $lat, long: $long) {
      favorites {
        _id
        name
        lat
        long
      }
    }
  }
`;
