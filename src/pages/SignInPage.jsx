import { useContext, useState } from "react";
import { useNavigate } from "react-router";
import { AuthContext } from "../context/Contexts.js";
import AuthSection from "../components/auth/AuthSection.jsx";
import TextInput from "../components/common/TextInput.jsx";
import PasswordInput from "../components/common/PasswordInput.jsx";
import Button from "../components/common/Button.jsx";

export default function SignIn() {
  const authContext = useContext(AuthContext);
  const navigate = useNavigate();
  const [validation, setValidation] = useState({
    username: "",
    password: "",
  });

  function handleSubmit(e) {
    e.preventDefault();
    const formData = new FormData(e.target);
    const username = formData.get("username");
    const password = formData.get("password");
    const user = authContext.users.find((user) => user.username === username);
    const isUsernameNotFound = !user;
    const isPasswordIncorrect = !!user && user.password !== password;
    const newValidation = {
      username: !username
        ? "Username is required."
        : isUsernameNotFound
          ? "Username not found."
          : "",
      password: !password
        ? "Password is required."
        : isPasswordIncorrect
          ? "Password incorrect."
          : "",
    };
    const isInvalid = !Object.values(newValidation).every((value) => !value);
    if (isInvalid) return setValidation(newValidation);
    authContext.currentUserDispatch({ type: "LOGIN_USER", payload: user });
    navigate("/", { replace: true });
  }

  return (
    <AuthSection sign="in">
      <form
        onSubmit={handleSubmit}
        className="mx-auto mb-6 flex w-full max-w-120 flex-col gap-6"
      >
        <div className="flex w-full flex-col gap-4">
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
        </div>
        <Button type="submit" size="lg">
          SUBMIT
        </Button>
      </form>
    </AuthSection>
  );
}
