import { useContext, useState } from "react";
import { useNavigate } from "react-router";
import { AuthContext } from "../context/Contexts.js";
import AuthSection from "../components/auth/AuthSection.jsx";
import TextInput from "../components/common/TextInput.jsx";
import PasswordInput from "../components/common/PasswordInput.jsx";
import Button from "../components/common/Button.jsx";

export default function SignUp() {
  const authContext = useContext(AuthContext);
  const navigate = useNavigate();
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
    const isUsernameNotAvailable = authContext.users.find(
      (user) => user.username === username,
    );
    const isPasswordTooShort = password.length < 8;
    const isConfirmationIncorrect = confirmation !== password;
    const newValidation = {
      firstName: !firstName ? "First Name is required." : "",
      lastName: !lastName ? "Last Name is required." : "",
      username: !username
        ? "Username is required."
        : isUsernameNotAvailable
          ? "Username not available."
          : "",
      password: !password
        ? "Password is required."
        : isPasswordTooShort
          ? "Password must be at least 8 characters."
          : "",
      confirmation: !confirmation
        ? "Confirm password is required."
        : isConfirmationIncorrect
          ? "Confirm password does not match."
          : "",
    };
    const isInvalid = !Object.values(newValidation).every((value) => !value);
    if (isInvalid) return setValidation(newValidation);
    const user = {
      id: crypto.randomUUID(),
      firstName,
      lastName,
      username,
      password,
    };
    authContext.usersDispatch({
      type: "REGISTER_USER",
      payload: user,
    });
    authContext.currentUserDispatch({
      type: "LOGIN_USER",
      payload: user,
    });
    navigate("/", { replace: true });
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
