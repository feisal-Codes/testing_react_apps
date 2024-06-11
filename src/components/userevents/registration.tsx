import * as React from "react";

export interface IRegistrationProps {
  handleRegister: ({}) => void;
}

export default function Registration(props: IRegistrationProps) {
  const [formValues, setFormValues] = React.useState({
    email: "",
    password: "",
  });

  const handleOnSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    props.handleRegister({
      email: formValues.email,
      password: formValues.password,
    });
  };
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {};
  return (
    <div>
      <form onSubmit={handleOnSubmit}>
        <input
          type="email"
          placeholder="email"
          name="email"
          value={formValues.email}
          onChange={handleChange}
        />
        <input
          type="password"
          placeholder="password"
          name="paswword"
          value={formValues.password}
          onChange={handleChange}
        />
        <input type="submit" placeholder="submit" />
      </form>
    </div>
  );
}
