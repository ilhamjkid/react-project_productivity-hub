import { useState } from "react";
import AuthSection from "../components/auth/AuthSection.jsx";
import TextInput from "../components/common/TextInput.jsx";
import PasswordInput from "../components/common/PasswordInput.jsx";
import Button from "../components/common/Button.jsx";

export default function SignIn() {
  const [validation, setValidation] = useState({
    username: "",
    password: "",
  });

  function handleSubmit(e) {
    e.preventDefault();
    const formData = new FormData(e.target);
    const username = formData.get("username");
    const password = formData.get("password");
    const newValidation = {
      username: !username ? "Username is required." : "",
      password: !password ? "Password is required." : "",
    };
    const isInvalid = !Object.values(newValidation).every((value) => !value);
    if (isInvalid) return setValidation(newValidation);
    console.dir({ username, password });
    setValidation({ username: "", password: "" });
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
