function UserProfilePage(props) {
  const { id } = props;
  return (
    <div>
      <h3>User {id}</h3>
    </div>
  );
}

export async function getServerSideProps(context) {
  const { params } = context;

  return {
    props: {
      id: params.uid,
    },
  };
}
export default UserProfilePage;
