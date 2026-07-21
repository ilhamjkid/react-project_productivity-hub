import { useContext } from "react";
import { Link, Navigate } from "react-router";
import { AuthContext } from "../../context/Contexts.js";

export default function AuthSection({ children, sign }) {
  const authContext = useContext(AuthContext);

  if (authContext.currentUser !== null) {
    return <Navigate replace to="/" />;
  }

  return (
    <section className="flex min-h-screen w-full items-center justify-center bg-slate-950 text-slate-200">
      <div className="w-full max-w-105 p-5 md:max-w-160 lg:max-w-215">
        <h2 className="mb-6 text-center text-4xl font-semibold uppercase">
          SIGN {sign}
        </h2>
        {children}
        <p className="text-center text-xl">
          <span>
            {sign.toLowerCase() === "up" ? "Already" : "Don't"} have an
            account?{" "}
          </span>
          <span className="inline-block break-keep">
            Please{" "}
            <Link
              to={sign.toLowerCase() === "up" ? "/signin" : "/signup"}
              className="text-blue-500 hover:opacity-80 focus:opacity-80 focus:outline-none"
            >
              {sign.toLowerCase() === "up" ? "Sign In" : "Sign Up"}
            </Link>
            .
          </span>
        </p>
      </div>
    </section>
  );
}
