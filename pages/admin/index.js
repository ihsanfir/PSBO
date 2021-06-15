import React from "react";
import Navbar from "../../components/Navbar";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import PropTypes from "prop-types";
import axios from "axios";

export async function getServerSideProps(context) {
  const token = context.req.cookies["auth-token"];
  const user = {
    Nama: "Admin",
  };
  // const user = JSON.parse(context.req.cookies["user"]);
  return {
    props: { token, user }, // Will be passed to the page component as props
  };
}

export default function Admin({ user, token }) {
  return (
    <Navbar user={user} token={token} isAdmin={true}>
      <Box padding={10}>
        <Typography variant="h1">Hai, Admin</Typography>
      </Box>
    </Navbar>
  );
}

Admin.propTypes = {
  user: PropTypes.object,
  token: PropTypes.string,
};
