
import { Link } from "react-router-dom";
export default function Register() {
  return (
    <section className="auth-page">
      <form className="auth-card">
        <h1>Create account</h1>
        <input placeholder="Full name" />
        <input type="email" placeholder="Email" />
        <input type="password" placeholder="Password" />
        <button className="primary-button" type="button">
          Register
        </button>
        <p>
          Already registered? <Link to="/login">Login</Link>
        </p>
      </form>
    </section>
  );
}
