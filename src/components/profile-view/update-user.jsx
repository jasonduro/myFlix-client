import React from "react";
import { Form } from "react-bootstrap";

function UpdateUser({ handleSubmit, handleUpdate }) {
  return (
    <>
    <h4>Update</h4>
    <Form>
      <Form.Group>
      <Form.Label>Username:</Form.Label>
      <Form.Control
        type="text"
        name="Username"
        defaultValue={user.Username}
        onChange={e => handleUpdate(e)} />
    </Form.Group>

    <Form.Group>
      <Form.Label>Password</Form.Label>
      <Form.Control
        type="password"
        name="password"
        defaultValue={user.Password}
        onChange={e => handleUpdate(e)} />
    </Form.Group>

    <Form.Group>
      <Form.Label>Birthday</Form.Label>
      <Form.Control
        type="birthday"
        name="Birthday"
        defaultValue={user.Birthday}
        onChange={e => handleUpdate(e)} />
      </Form.Group>   

      <Form.Group>
        <Form.Label>Email</Form.Label>
        <Form.Control 
          type="email"
          name="email"
          defaultValue={user.Email}
          onChange={e => handleUpdate(e.target.value)} />
      </Form.Group>
        <button variant="primary" type="submit">Update</button>
    </Form>
    </>
  )
}

export default UpdateUser