import "./register.scss";
import { Link, useNavigate } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../AuthContext/AuthContext";

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
          const { currentUser } = useContext(AuthContext);  // Accéder à l'utilisateur authentifié
        
          // Si l'utilisateur est déjà authentifié, on le redirige vers le dashboard
          useEffect(() => {
            if (currentUser) {
              navigate('/dashboard');  // Redirection vers la page dashboard
            }
          }, [currentUser, navigate]);
        

  return (
    <div className="registerPage">
    <div className="formContainer">
      <form>
        <h1>Créer un compte</h1>
        <input name="username" type="text" placeholder="Username" />
        <input name="email" type="text" placeholder="Email" />
        <input name="password" type="password" placeholder="Password" />
        <button disabled={isLoading}>S'inscrire</button>
        {error && <span>{error}</span>}
        <Link to="/login">Vous avez déjà un compte ?</Link>
      </form>
    </div>
    <div className="imgContainer">
      <img src="/pg.png" alt="" />
    </div>
  </div>
  )
}

export default Register