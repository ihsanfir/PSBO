import React from "react";
import Navbar from "../../components/Navbar";
import Kehadiran from "../../components/Kehadiran";
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
  const options = {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  };
  const res = await axios.get(
    process.env.NEXT_PUBLIC_BACKEND_URL + "/presensi/my",
    options
  );
  const data = await res.data;
  return {
    props: { user, token, data }, // Will be passed to the page component as props
  };
}

export default function Presence({ user, token, data }) {
  return (
    <Navbar user={user} token={token}>
      <Kehadiran data={data} />
    </Navbar>
  );
}

Presence.propTypes = {
  user: PropTypes.object,
  token: PropTypes.string,
  data: PropTypes.array,
};
