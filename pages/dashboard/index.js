import React from "react";
import Navbar from "../../components/Navbar";
import PropTypes from "prop-types";
import MainContent from "../../components/MainContent";
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
  var tzoffset = (new Date()).getTimezoneOffset() * 70000; //offset in milliseconds
  const res = await axios.get(
    process.env.NEXT_PUBLIC_BACKEND_URL + "/jadwal/my",
    {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      params: { tanggal: (new Date(Date.now() - tzoffset)).toISOString().slice(0, -1) },
    }
  );
  const { data } = await res;
  return {
    props: { user, token, data }, // Will be passed to the page component as props
  };
}

export default function Dashboard({ user, token, data }) {
  return (
    <Navbar user={user} token={token}>
      <MainContent data={data} token={token}/>
    </Navbar>
  );
}

Dashboard.propTypes = {
  user: PropTypes.object,
  token: PropTypes.string,
  data: PropTypes.object,
};
