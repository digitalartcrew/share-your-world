import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

interface FormProps {
    onSubmit: any
}

const SignUpForm: React.FC<FormProps>= ({ onSubmit }) => {
  return (
    <Form style={{ marginTop: "20px" }} onSubmit={onSubmit}>
    <Form.Group className="mb-3" controlId="formBasicUsername">
        <Form.Label>Username</Form.Label>
        <Form.Control type="username" placeholder="Enter username" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPhone">
        <Form.Label>Phone</Form.Label>
        <Form.Control type="tel" placeholder="Enter phone number" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formRBasicPassword">
        <Form.Label>Repeat Password</Form.Label>
        <Form.Control type="password" placeholder="Repeat Password" />
      </Form.Group>
      <Button type="submit">
        Sign Up
      </Button>
    </Form>
  );
}

export default SignUpForm;
