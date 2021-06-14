import Navbar from "../../components/Navbar";
import ListRekaman from "../../components/ListRekaman";
import PropTypes from "prop-types";

export async function getServerSideProps(context) {
  const token = context.req.cookies["auth-token"];
  const user = JSON.parse(context.req.cookies["user"]);

  return {
    props: { user, token }, // Will be passed to the page component as props
  };
}

export default function List({ user, token }) {
  return (
    <Navbar user={user} token={token}>
      <ListRekaman />
    </Navbar>
  );
}

List.propTypes = {
  user: PropTypes.object,
  token: PropTypes.string,
};
