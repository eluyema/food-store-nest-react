import { TextField } from "@mui/material";
import { useField } from "formik";
import { ErrorMessage, InputWrapper } from "./FormikTextInput.styled";

type FormikTextInputProps = {
  label: string;
  name: string;
  type: string;
  placeholder: string;
};

const FormikTextInput: React.FC<FormikTextInputProps> = ({
  label,
  ...props
}) => {
  const [field, meta] = useField(props);
  return (
    <InputWrapper>
      <TextField {...field} {...props} />
      <ErrorMessage variant="subtitle2">
        {meta.touched && meta.error}
      </ErrorMessage>
    </InputWrapper>
  );
};

export default FormikTextInput;
