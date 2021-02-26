import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { fetchUsers } from "../Redux/Users/usersAction";

const UserContainer = ({ userData, fetchUsers }) => {
  useEffect(() => {
    fetchUsers();
  }, []);

  return userData.loading ? (
    <h3>loading</h3>
  ) : userData.error ? (
    <h3>{userData.error}</h3>
  ) : (
    <div>
      <h2>User List</h2>
      <div>
        {userData &&
          userData.users &&
          userData.users.map((user) => (
            <p>
              {user.name}&nbsp;{user.address.city}
            </p>
          ))}
      </div>
    </div>
  );
};
const mapStateToProps = (state) => {
  return {
    userData: state.user,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchUsers: () => dispatch(fetchUsers()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(UserContainer);
