import gql from 'graphql-tag';

export const studentsQuery = gql`
  {
    students {
      _id
      firstname
      lastname
      email
      age
    }
  }
`;