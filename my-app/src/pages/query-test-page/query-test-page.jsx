import { useQuery, gql } from "@apollo/client";

const GET_PHOTO = gql`
  query GetPhoto($id: ID!) {
    photo(id: $id) {
      album {
        id
        title
        user {
          id
        }
      }
    }
  }
`;

const GraphQLPage = () => {
  const { loading, error, data } = useQuery(GET_PHOTO, {
    variables: { id: 5 }, // Change '5' to any dynamic ID as needed
  });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>error:{error.message}</p>;

  return (
    <div>
      <h1>Photo Album</h1>
      <p>Album ID: {data.photo.album.id}</p>
      <p>Album Title: {data.photo.album.title}</p>
      <p>User ID: {data.photo.album.user.id}</p>
    </div>
  );
};

export default GraphQLPage;
