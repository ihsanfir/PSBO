import Navbar from "../../components/Navbar";
import Rekaman from "../../components/Rekaman";
import PropTypes from "prop-types";
import Link from "next/link";
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
    process.env.NEXT_PUBLIC_BACKEND_URL + "/matkul/my",
    {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    }
  );
  const { data } = res;
  return {
    props: { user, token, data }, // Will be passed to the page component as props
  };
}

export default function Record({ user, token, data }) {
  return (
    <Navbar user={user} token={token}>
      <Rekaman data={data} />
    </Navbar>
  );
}

Record.propTypes = {
  user: PropTypes.object,
  token: PropTypes.string,
  data: PropTypes.object,
};
