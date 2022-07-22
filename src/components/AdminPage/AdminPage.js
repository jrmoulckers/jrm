import React from "react";
import Login from "./Login.js";
import AdminPanel from "./AdminPanel";

function AdminPage(props) {
  return <div>Hello!!!</div>;
  if (props.user) {
    return <AdminPanel {...props.siteContent} />;
  } else {
    return <Login loginUser={props.loginUser} />;
  }
}

export default AdminPage;
