import { Link } from "react-router";

export default function AuthSection({ children, sign }) {
  return (
    <section className="w-full min-h-screen bg-slate-950 text-slate-200 flex justify-center items-center">
      <div className="w-full max-w-105 md:max-w-160 lg:max-w-215 p-5">
        <h2 className="font-semibold text-center text-4xl uppercase mb-6">SIGN {sign}</h2>
        {children}
        <p className="text-center text-xl">
          <span>{sign.toLowerCase() === "up" ? "Already" : "Don't"} have an account? </span>
          <span className="break-keep inline-block">
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
