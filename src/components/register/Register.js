import "./register.scss";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

const Register = () => {
    const [error, setError] = useState("");
    const [isLoading, setIsLoading] = useState(false);
  
    const navigate = useNavigate();

    /*const handleSubmit = async (e) =>{
        e.preventDefault();
        const formData = new FormData(e.target);

        const username = formData.get("username");
        const email = formData.get("email");
        const password = formData.get("password");

        try {
            const res = await apiRequest.post("/auth/register", {
              username,
              email,
              password,
            });
      
            navigate("/login");
          } catch (err) {
            setError(err.response.data.message);
          } finally {
            setIsLoading(false);
          }
    }*/

  return (
    <div className="registerPage">
    <div className="formContainer">
      <form>
        <h1>Create an Account</h1>
        <input name="username" type="text" placeholder="Username" />
        <input name="email" type="text" placeholder="Email" />
        <input name="password" type="password" placeholder="Password" />
        <button disabled={isLoading}>Register</button>
        {error && <span>{error}</span>}
        <Link to="/login">Do you have an account?</Link>
      </form>
    </div>
    <div className="imgContainer">
      <img src="/pg.png" alt="" />
    </div>
  </div>
  )
}

export default Register