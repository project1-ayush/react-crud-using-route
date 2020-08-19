import React from "react";
import { withRouter, Redirect } from "react-router";
import { Form, Button, Row, Col } from "react-bootstrap";
import { connect } from "react-redux";

class UserEdit extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      first_name: "",
      last_name: "",
      email: "",
      id: "",
      avatar: "",
      emp: [],
    };
    this.state = this.props.emp;
  }

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };
  handleSubmit=()=> {
    const data = {
      first_name: this.state.first_name,
      last_name: this.state.last_name,
      email: this.state.email,
      id: this.state.id,
      avatar: this.state.avatar,
                };

    this.props.dispatch({ type: "User_edit", payload: data });
  }
  render() {
    if (this.props.editemp) {
      return <Redirect to="/" />;
    }

    return (
      <Form>
        <h3>User Edit Page</h3>
        <Row>
          <Col>
            <Form.Label>First_Name</Form.Label>
            <Form.Control
              type="name"
              size="sm"
              placeholder="Enter first_name"
              name="first_name"
              value={this.state.first_name}
              onChange={this.handleChange}
            />
          </Col>
          <Col>
            <Form.Label>Last_Name</Form.Label>
            <Form.Control
              type="name"
              size="sm"
              placeholder="Enter first_name"
              name="last_name"
              value={this.state.last_name}
              onChange={this.handleChange}
            />
          </Col>
        </Row>
        <br></br>
        <Row>
          <Col>
            <Form.Label>Email</Form.Label>
            <Form.Control
              type="text"
              size="sm"
              name="email"
              placeholder="Enter email"
              value={this.state.email}
              onChange={this.handleChange}
            />
          </Col>
          <Col>
            <Form.Label>Avatar</Form.Label>
            <Form.Control
              type="text"
              size="sm"
              name="board"
              placeholder="Enter avatar"
              value={this.state.avatar}
              onChange={this.handleChange}
            />
          </Col>
        </Row>

        <br></br>

        <Button onClick={this.handleSubmit} variant="primary">
          Submit
        </Button>
      </Form>
    );
  }
}
function mapStatetoProps(state, props) {
  const { user, edituser } = state;
  var a = props.location.pathname;

  a = a.split("/");

  var obj = user.filter((employee) => employee.id == a[2]);

  return { emp: obj[0], editemp: edituser };
}

export default withRouter(connect(mapStatetoProps)(UserEdit));
