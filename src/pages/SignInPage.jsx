import { useState } from "react";
import AuthSection from "../components/auth/AuthSection.jsx";
import AuthInputField from "../components/auth/AuthInputField.jsx";
import AuthPasswordInput from "../components/auth/AuthPasswordInput.jsx";

export default function SignIn() {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });
  const [validationMessage, setValidationMessage] = useState({
    username: "",
    password: "",
  });

  function handleChange(e) {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
    if (validationMessage[id]) {
      setValidationMessage((prev) => ({ ...prev, [id]: "" }));
    }
  }

  function handleSubmit(e) {
    e.preventDefault();
    const newValidationMessage = {
      username: !formData.username ? "Username is required!" : "",
      password: !formData.password ? "Password is required!" : "",
    };
    setValidationMessage(newValidationMessage);
    const isValid = Object.values(newValidationMessage).every(
      (msg) => msg === "",
    );
    if (isValid) {
      console.dir(formData);
    }
  }

  return (
    <AuthSection sign="in">
      <form
        onSubmit={handleSubmit}
        className="mx-auto mb-6 flex w-full max-w-120 flex-col gap-4"
      >
        <AuthInputField
          forId="username"
          label="Username"
          value={formData.username}
          onChange={handleChange}
          validationMessage={validationMessage.username}
        />
        <AuthPasswordInput
          forId="password"
          label="Password"
          value={formData.password}
          onChange={handleChange}
          validationMessage={validationMessage.password}
        />
        <button
          type="submit"
          className="mt-2 cursor-pointer rounded-lg bg-blue-500 p-4 text-center text-xl font-semibold hover:opacity-80 focus:opacity-80 focus:outline-none"
        >
          SUBMIT
        </button>
      </form>
    </AuthSection>
  );
}
