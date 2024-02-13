import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const [userData, setUserData] = useState(null);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    try {
      const response = await axios.get(
        `http://localhost:9834/araba/login?username=${username}&password=${password}`
      );

      if (response.data) {
        setUserData(response.data);
        sessionStorage.setItem("username", username);
      } else {
        console.log("Giriş başarısız");
      }
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    if (userData) {
      console.log("Giriş başarılı. Kullanıcı bilgileri:", userData);
      navigate("/home");
    }
  }, [userData, navigate]);

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="bg-white p-8 rounded shadow-md w-96">
        <h2 className="text-2xl font-bold mb-4">Login</h2>
        <form>
          <div className="mb-4">
            <label
              htmlFor="username"
              className="block text-sm font-medium text-gray-600"
            >
              Kullanıcı Adı:
            </label>
            <input
              type="text"
              id="username"
              name="username"
              className="mt-1 p-2 border rounded w-full"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-600"
            >
              Şifre:
            </label>
            <input
              type="password"
              id="password"
              name="password"
              className="mt-1 p-2 border rounded w-full"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button
            type="button"
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
            onClick={handleLogin}
          >
            Giriş Yap
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
