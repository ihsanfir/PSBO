import React from "react";
import Navbar from "../../components/Navbar";
import JadwalTable from "../../components/JadwalTable";
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
    process.env.NEXT_PUBLIC_BACKEND_URL + "/jadwal/my",
    options
  );
  const { data } = await res.data.content;
  return {
    props: { user, token, data }, // Will be passed to the page component as props
  };
}

export default function Schedule({ user, token, data }) {
  return (
    <Navbar user={user} token={token}>
      <JadwalTable data={data} />
    </Navbar>
  );
}

Schedule.propTypes = {
  user: PropTypes.object,
  token: PropTypes.string,
  data: PropTypes.array,
};
