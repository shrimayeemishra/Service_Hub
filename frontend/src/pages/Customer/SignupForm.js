/** @format */

import React, { useState } from "react";
import Button from "../../components/ui/Button";
import { Link, useNavigate } from "react-router-dom";

function SignupForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [contact, setContact] = useState("");
  const [address, setAddress] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("/api/user/signup/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, email, password, contact, address }),
      });

      if (!response.ok) {
        throw new Error("Failed to login");
      }
      console.log("Signed up as:", name);
      navigate("/auth/user");
      window.location.reload();
    } catch (error) {
      setError("Invalid email or password");
      console.error(error);
    }
  };
  return (
    <form
      className="flex flex-col justify-center items-center py-8 w-full px-4 "
      onSubmit={handleSubmit}
    >
      <input
        className="md:min-w-[300px] border border-b-[#1170B0] outline-none bg-[#E9E9E9] px-2 py-1 text-sm hover:border-[#1170B0] hover:bg-white my-2"
        placeholder="Name"
        type="text"
        onChange={(e) => setName(e.target.value)}
        value={name}
      />
      <input
        className="md:min-w-[300px] border border-b-[#1170B0] outline-none bg-[#E9E9E9] px-2 py-1 text-sm hover:border-[#1170B0] hover:bg-white my-2"
        placeholder="Email"
        type="email"
        onChange={(e) => setEmail(e.target.value)}
        value={email}
      />
      <input
        className="md:min-w-[300px] border border-b-[#1170B0] outline-none bg-[#E9E9E9] px-2 py-1 text-sm hover:border-[#1170B0] hover:bg-white my-2"
        placeholder="Password"
        type="password"
        onChange={(e) => setPassword(e.target.value)}
        value={password}
      />
      <input
        className="md:min-w-[300px] border border-b-[#1170B0] outline-none bg-[#E9E9E9] px-2 py-1 text-sm hover:border-[#1170B0] hover:bg-white my-2"
        placeholder="Mobile No."
        type="text"
        onChange={(e) => setContact(e.target.value)}
        value={contact}
      />
      <input
        className="md:min-w-[300px] border border-b-[#1170B0] outline-none bg-[#E9E9E9] px-2 py-1 text-sm hover:border-[#1170B0] hover:bg-white my-2"
        placeholder="Address"
        type="text"
        onChange={(e) => setAddress(e.target.value)}
        value={address}
      />
      <Button title={"Signup"} />
    </form>
  );
}

export default SignupForm;
