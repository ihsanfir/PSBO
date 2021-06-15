import React from "react";
import Navbar from "../../components/Navbar";
import VidconForm from "../../components/VidconForm";
import PropTypes from "prop-types";
import axios from "axios";

export async function getServerSideProps(context) {
  const token = context.req.cookies["auth-token"];
  const user = {
    Nama: "Admin"
  }
  // fetch all data jadwal
  // const res = await axios.get(
  //   process.env.NEXT_PUBLIC_BACKEND_URL + "/jadwal",
  //   {
  //     headers: {
  //       "Content-Type": "application/json",
  //       Authorization: "Bearer" + process.env.NEXT_PUBLIC_TOKEN_ADMIN,
  //     },
  //   }
  // );
  // const schedule = await res.data;
  return {
    props: { user, token }, // Will be passed to the page component as props
  };
}

export default function Meet({ user, token }) {
  return (
    <Navbar user={user} token={token} isAdmin={true}>
      <VidconForm />
    </Navbar>
  );
}

Meet.propTypes = {
  user: PropTypes.object,
  token: PropTypes.string,
};
