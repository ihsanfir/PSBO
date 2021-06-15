import Navbar from "../../components/Navbar";
import ListRekaman from "../../components/ListRekaman";
import PropTypes from "prop-types";
import axios from "axios";

export async function getServerSideProps(context) {
  const token = context.req.cookies["auth-token"];
  if (!token)
    return {
      redirect: {
        permanent: false,
        destination: "/",
      },
    };
  const user = JSON.parse(context.req.cookies["user"]);
  const res = await axios.get(
    process.env.NEXT_PUBLIC_BACKEND_URL +
      "/link/record?kodeMatkul=" +
      context.params.list,
    {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    }
  );
  const records = res.data;
  return {
    props: { user, token, records }, // Will be passed to the page component as props
  };
}

export default function List({ user, token, records }) {
  return (
    <Navbar user={user} token={token}>
      <ListRekaman records={records} />
    </Navbar>
  );
}

List.propTypes = {
  user: PropTypes.object,
  token: PropTypes.string,
  records: PropTypes.object,
};
