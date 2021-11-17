function UserProfilePage(props) {
  const { username } = props;
  return (
    <div>
      <h3>{username}</h3>
    </div>
  );
}

export async function getServerSideProps(context) {
  return {
    props: {
      username: "Sufail",
    },
  };
}
export default UserProfilePage;
