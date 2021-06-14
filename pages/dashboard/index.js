import React from "react";
import Navbar from "../../components/Navbar";
import PropTypes from "prop-types";
import MainContent from '../../components/MainContent';

export async function getServerSideProps(context) {
  const token = context.req.cookies['auth-token']
  const user = JSON.parse(context.req.cookies['user'])
  return {
    props: { user, token }, // Will be passed to the page component as props
  };
}

export default function Dashboard({ user, token}) {
  return (
    <>
      <Navbar user={user} token={token}>
           <MainContent />
      </Navbar>
    </>
  );
}

Dashboard.propTypes = {
  user: PropTypes.object,
  token: PropTypes.string,
};
