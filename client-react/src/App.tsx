import { useState } from "react";
import "./App.css";
import { addUser, UserReq, UserResp } from "./services/user";

function App() {
  const [resp, setResp] = useState<UserResp>({ userId: 0, username: "" });
  const [values, setValues] = useState<UserReq>({ username: "", password: "" });

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const r = await addUser({
      password: values.password,
      username: values.username,
    });

    setResp(r.toObject());
  };

  return (
    <div className="App">
      <h1>SIGN UP</h1>
      <form onSubmit={onSubmit}>
        <input
          name="username"
          value={values.username}
          onChange={(e) => {
            setValues((prev) => ({ ...prev, username: e.target.value }));
          }}
          placeholder="Username"
        />
        <br />
        <input
          name="password"
          value={values.password}
          onChange={(e) => {
            setValues((prev) => ({ ...prev, password: e.target.value }));
          }}
          placeholder="Password"
        />
        <br />
        <button type="submit">Sign Up</button>
      </form>
      <div>{`Resp from server: ${JSON.stringify(resp)}`}</div>
    </div>
  );
}

export default App;
