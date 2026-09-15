import React, {useState} from "react";

function Login() {
  const [username,setUsername]=useState("");
  const [password,setPassword]=useState("");

  const handleLogin=(e)=> {
    e.preventDefault();

    if (username && password) {
      alert("Login Successful!");
    } else{
      alert("Please enter username and password");
    }
  };

  return (
    <div>
      <h1>Instagram</h1>

      <form onSubmit={handleLogin}>
        <input
        type="text"
        placeholder="Phone number, username or email"
        value={username}
        onChange={(e)=> setUsername(e.target.value)}
        />

        <br /><br />

        <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e)=> setPassword(e.target.value)}
        />

        <br /><br />

        <button type="submit">Log In</button>
      </form>

      <p>Don't have an account? Sign up</p>
    </div>
  );
}

export default Login;