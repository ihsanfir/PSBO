import React from "react";
import Navbar from "../../components/Navbar";
import RecordForm from "../../components/RecordForm";
import PropTypes from "prop-types";

export async function getServerSideProps(context) {
  const token = context.req.cookies["auth-token"];
  const user = {
    Nama: "Admin"
  }
  return {
    props: { user, token }, // Will be passed to the page component as props
  };
}

export default function Rekaman({ user, token }) {
  return (
    <Navbar user={user} token={token} isAdmin={true}>
      <RecordForm />
    </Navbar>
  );
}

Rekaman.propTypes = {
  user: PropTypes.object,
  token: PropTypes.string,
};
