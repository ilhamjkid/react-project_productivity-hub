import { useState } from "react";
import AuthSection from "../components/auth/AuthSection.jsx";
import TextInput from "../components/common/TextInput.jsx";
import PasswordInput from "../components/common/PasswordInput.jsx";
import Button from "../components/common/Button.jsx";

export default function SignUp() {
  const [validation, setValidation] = useState({
    firstName: "",
    lastName: "",
    username: "",
    password: "",
    confirmation: "",
  });

  function handleSubmit(e) {
    e.preventDefault();
    const formData = new FormData(e.target);
    const firstName = formData.get("firstName");
    const lastName = formData.get("lastName");
    const username = formData.get("username");
    const password = formData.get("password");
    const confirmation = formData.get("confirmation");
    const newValidation = {
      firstName: !firstName ? "First Name is required." : "",
      lastName: !lastName ? "Last Name is required." : "",
      username: !username ? "Username is required." : "",
      password: !password
        ? "Password is required."
        : password.length < 8
          ? "Password must be at least 8 characters."
          : "",
      confirmation: !confirmation
        ? "Confirm password is required."
        : confirmation !== password
          ? "Confirm password does not match."
          : "",
    };
    const isInvalid = !Object.values(newValidation).every((value) => !value);
    if (isInvalid) return setValidation(newValidation);
    console.dir({ firstName, lastName, username, password });
    setValidation({
      firstName: "",
      lastName: "",
      username: "",
      password: "",
      confirmation: "",
    });
  }

  return (
    <AuthSection sign="up">
      <form
        onSubmit={handleSubmit}
        className="mx-auto mb-6 flex w-full max-w-120 flex-col gap-6"
      >
        <div className="flex w-full flex-col gap-4">
          <div className="flex flex-wrap gap-4 md:flex-nowrap">
            <TextInput
              label="First Name"
              forId="firstName"
              name="firstName"
              validationMessage={validation.firstName}
            />
            <TextInput
              label="Last Name"
              forId="lastName"
              name="lastName"
              validationMessage={validation.lastName}
            />
          </div>
          <TextInput
            label="Username"
            forId="username"
            name="username"
            validationMessage={validation.username}
          />
          <PasswordInput
            label="Password"
            forId="password"
            name="password"
            validationMessage={validation.password}
          />
          <PasswordInput
            label="Confirmation"
            forId="confirmation"
            name="confirmation"
            validationMessage={validation.confirmation}
          />
        </div>
        <Button type="submit" size="lg">
          SUBMIT
        </Button>
      </form>
    </AuthSection>
  );
}
