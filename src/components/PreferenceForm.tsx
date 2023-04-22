import { Form } from "react-bootstrap";
import { FormWrapper } from "./FormWrapper";

type AccountData = {
  email: string,
  password: string
}

type AccountFormProps = AccountData & {
  updateFields: (fields: Partial<AccountData>) => void
}

export function PreferenceForm({
  email,
  password,
  updateFields
}: AccountFormProps) {

  return (
    <FormWrapper title="Account Creation">
    Preferences
    </FormWrapper>
  )
}