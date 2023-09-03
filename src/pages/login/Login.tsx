import React, { useState } from "react";
import "./Login.css";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleEmailChange = (e:any) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e:any) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e:any) => {
    e.preventDefault();

    // Lógica de autenticação aqui

    console.log("Email:", email);
    console.log("Senha:", password);
  };

  return (
    <div className="login-container">

      <div className="form-container">
      <div className="login-logo-container">
        <img
          src="/img/brand/QuestForm.png"
          className="login-logo"
          alt="Logo"
        />
      </div>
    
          <div className="row login-logo-container justify-content-center mt-5">
            <div className="col-md-12">
              <div className="card">
                <div className="card-body">
                  <h2 className="card-title text-center">Fazer login</h2>
                  <form onSubmit={handleSubmit}>
                    <div className="form-group">
                      <label htmlFor="email">Email:</label>
                      <input
                        type="email"
                        className="form-control"
                        id="email"
                        name="email"
                        value={email}
                        onChange={handleEmailChange}
                        required
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="password">Senha:</label>
                      <input
                        type="password"
                        className="form-control"
                        id="password"
                        name="password"
                        value={password}
                        onChange={handlePasswordChange}
                        required
                      />
                    </div>
                    <button
                      type="submit"
                      className="btn container btn-primary btn-block mt-3"
                    >
                      Entrar
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

  );
}

export default Login;
