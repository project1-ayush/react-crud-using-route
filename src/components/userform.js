import React from "react";
import { Button, Table } from "react-bootstrap";
import { connect } from "react-redux";
import { withRouter } from "react-router";

class UserForm extends React.Component {
  constructor() {
    super();
    this.state = {
      error: null,
      response: {},
    };
  }

  async componentDidMount() {
    if (!this.props.editemp) {
      const url = "https://reqres.in/api/users?page=2";
      const response = await fetch(url);
      const data1 = await response.json();
      this.props.dispatch({ type: "User_data", payload: data1.data });
    }
  }
  editEmployee = (id) => {
    console.log(this.props);
    this.props.history.push({
      pathname: "/useredit/" + id,
    });
  };

  deleteEmployee(id) {
    this.props.dispatch({ type: "User_delete", payload: id });
  }

  render() {
    console.log(this.props.editemp);
    return (
      <div>
        <h1>This is User Record page.</h1>

        <br></br>

        <Table striped bordered hover variant="dark">
          <thead>
            <tr>
              <th>id</th>
              <th>email</th>
              <th>first_name</th>
              <th>last_name</th>
              <th>avatar</th>
            </tr>
          </thead>
          <tbody>
            {this.props.emp.map((users) => (
              <tr key={users.id}>
                <td>{users.id}</td>
                <td>{users.email}</td>
                <td>{users.first_name}</td>
                <td>{users.last_name}</td>
                <td>
                  <img src={users.avatar} alt="error" />{" "}
                </td>

                <td>
                  <Button
                    onClick={() => this.editEmployee(users.id)}
                    variant="primary"
                  >
                    Edit
                  </Button>
                </td>
                <td>
                  <Button
                    onClick={()=>this.deleteEmployee(users.id)}
                    variant="danger"
                  >
                    Delete
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    );
  }
}

function mapStatetoProps(state) {
  const { user, edituser } = state;
  console.log(state);
  if(edituser)
  state["edituser"]=false;
  return { emp: user, editemp: edituser };
}

export default withRouter(connect(mapStatetoProps)(UserForm));
