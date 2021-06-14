import React from "react";
import Navbar from "../../components/Navbar";
import PropTypes from "prop-types";
import MainContent from "../../components/MainContent";
import axios from "axios";

export async function getServerSideProps(context) {
  const token = context.req.cookies["auth-token"];
  const user = JSON.parse(context.req.cookies["user"]);
  const res = await axios.get(
    process.env.NEXT_PUBLIC_BACKEND_URL + "/jadwal/my",
    {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      params: { tanggal: new Date().toISOString() },
    }
  );
  const { data } = await res.data.content;
  return {
    props: { user, token, data }, // Will be passed to the page component as props
  };
}

export default function Dashboard({ user, token, data }) {
  return (
    <>
      <Navbar user={user} token={token}>
        <MainContent data={data} />
      </Navbar>
    </>
  );
}

Dashboard.propTypes = {
  user: PropTypes.object,
  token: PropTypes.string,
  data: PropTypes.object,
};
