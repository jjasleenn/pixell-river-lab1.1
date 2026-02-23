import { useState } from "react";

export function useFormInput(initialValue: string) {

  const [value, setValue] = useState(initialValue);
  const [error, setError] = useState("");

  const onChange = (e: any) => {
    setValue(e.target.value);
    setError("");
  };

  const validate = (validator: (val: string) => string) => {
    const message = validator(value);

    if (message) {
      setError(message);
      return false;
    }

    return true;
  };

  return {
    value,
    error,
    onChange,
    validate,
    setValue
  };
}