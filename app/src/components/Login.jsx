import React, { useState } from "react";
import { getUser } from "../services/user";
const Login = ({ setUserData, userData }) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleInput = (event) => {
    error && setError(false);
    setUserData("");
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);

    try {
      const { data } = await getUser(formData);
      setLoading(false);
      setUserData(data);
    } catch (err) {
      setLoading(false);
      setError(true);
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit} className="box">
        <div className="field">
          <label className="label">Email</label>
          <div className="control has-icons-left">
            <input
              type="email"
              placeholder="test@test.com"
              className="input"
              name="email"
              onChange={handleInput}
              required
            />
            <span className="icon is-small is-left">
              <i className="fa fa-envelope"></i>
            </span>
          </div>
        </div>
        <div className="field">
          <label className="label">Password</label>
          <div className="control has-icons-left">
            <input
              type="password"
              placeholder="*******"
              className="input"
              autoComplete="on"
              name="password"
              onChange={handleInput}
              required
            />
            <span className="icon is-small is-left">
              <i className="fa fa-lock"></i>
            </span>
          </div>
        </div>

        <div className="field">
          <button className="button is-primary is-fullwidth" type="submit">
            {!loading ? "Login" : "Loading..."}
          </button>
        </div>
        {userData === null && (
          <div className="block">
            <span className="tag is-danger is-light">
              El usuario no está registrado
            </span>
          </div>
        )}
        {error && (
          <div className="block">
            <span className="tag is-danger is-light">
              Error de conexión con el servidor
            </span>
          </div>
        )}
      </form>

      <div className="box">
        <p>
          <strong>Email: </strong>test@test.com
        </p>
        <p>
          <strong>Password:</strong> test
        </p>
      </div>
    </>
  );
};

export default Login;
