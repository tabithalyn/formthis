import { Form } from "react-bootstrap";
import { FormWrapper } from "./FormWrapper";

type AccountData = {
  email: string,
  password: string
}

type AccountFormProps = AccountData & {
  updateFields: (fields: Partial<AccountData>) => void
}

export function AccountForm({
  email,
  password,
  updateFields
}: AccountFormProps) {

  return (
    <FormWrapper title="Account Creation">
    <Form>
      <Form.Group className="mb-3" controlId="formEmail">
        <Form.Label>Email Address</Form.Label>
        <Form.Control
          autoFocus
          required
          type="email"
          value={email}
          placeholder="Email..."
          onChange={e => updateFields({ email: e.target.value })}
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control
          required
          type="password"
          value={password}
          placeholder="Password..."
          onChange={e => updateFields({ password: e.target.value })}
        />
      </Form.Group>
    </Form>
    </FormWrapper>
  )
}