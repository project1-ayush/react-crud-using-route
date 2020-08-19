import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { connect } from "react-redux";
import UserForm from "./userform";
import UserEdit from "./useredit";
class UserIndex extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route exact path="/">
            <UserForm />
          </Route>

          <Route exact path="/useredit/:rose">
            <UserEdit />
          </Route>
        </div>
      </Router>
    );
  }
}
function mapStatetoProps(state) {
  const { user } = state;
  return { emp: user };
}

export default connect(mapStatetoProps)(UserIndex);

//export default UserIndex;