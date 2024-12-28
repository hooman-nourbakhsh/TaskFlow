import Link from "next/link";

function SignupPage() {
  return (
    <div className="signin-form">
      <h3>Registration Form</h3>
      <input type="email" placeholder="Email" />
      <input type="password" placeholder="Password" />
      <button>Register</button>
      <div>
        <p>Already have an account?</p>
        <Link href="/signin">Sign in</Link>
      </div>
    </div>
  );
}
export default SignupPage;
