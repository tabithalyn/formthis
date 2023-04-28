import { Form } from "react-bootstrap";
import { FormWrapper } from "./FormWrapper";

type ProfileData = {
  name: string,
  username: string,
  age: string,
  country: string
}

type ProfileFormProps = ProfileData & {
  updateFields: (fields: Partial<ProfileData>) => void
}

export function ProfileForm({
  name,
  username,
  age,
  country,
  updateFields
}: ProfileFormProps) {
  return (
    <FormWrapper title="Profile Creation">
      <Form.Group className="form-control-lg" controlId="formName">
        <Form.Label>Name</Form.Label>
        <Form.Control
          autoFocus
          required
          type="text"
          value={name}
          placeholder="Name..."
          onChange={e => updateFields({ name: e.target.value })}
        />
      </Form.Group>
      <Form.Group className="form-control-lg" controlId="formUsername">
        <Form.Label>Username</Form.Label>
        <Form.Control
          required
          type="text"
          value={username}
          placeholder="Username..."
          onChange={e => updateFields({ username: e.target.value })}
        />
      </Form.Group>
      <Form.Group className="form-control-lg" controlId="formAge">
        <Form.Label>Age</Form.Label>
        <Form.Control
          required
          type="text"
          value={age}
          placeholder="Age..."
          onChange={e => updateFields({ age: e.target.value })}
        />
      </Form.Group>
      <Form.Group className="mb-3 form-control-lg" controlId="formCountry">
        <Form.Label>Country</Form.Label>
        <Form.Control
          required
          type="string"
          value={country}
          placeholder="Country..."
          onChange={e => updateFields({ country: e.target.value })}
        />
      </Form.Group>
    </FormWrapper>
  );
}