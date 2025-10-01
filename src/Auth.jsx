import React, { useState } from "react";
import { useAuth } from "./hooks/useAuth";

export const Auth = () => {
  const {
    user,
    profile,
    signUp,
    signIn,
    signOut,
    updateProfile,
    loading,
    error,
  } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  if (!user) {
    return (
      <div>
        <h2>Login or Register</h2>
        <input placeholder="email" onChange={(e) => setEmail(e.target.value)} />
        <input
          type="password"
          placeholder="password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <button onClick={() => signIn(email, password)}>Login</button>
        <button onClick={() => signUp(email, password)}>Register</button>
      </div>
    );
  }

  return (
    <div>
      <h2>Welcome, {user.email}</h2>
      <pre>{JSON.stringify(profile, null, 2)}</pre>
      <button onClick={() => updateProfile({ theme: "dark" })}>
        Set Theme: Dark
      </button>
      <button onClick={signOut}>Logout</button>
    </div>
  );
};
