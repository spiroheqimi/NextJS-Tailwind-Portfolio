"use client";

import { useState } from "react";

export default function ContactForm() {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {

      const res = await fetch('/api/contact' ,{
        method: 'POST',
        body: JSON.stringify({
          name,email,message,
        }),
        headers: {
          'Content-Type' : 'application/json',
        },
      })
      
    } catch (error) {
      console.log( "Error : ",error)
    }

  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="w-144 flex flex-col space-y-5">
        <label htmlFor="name" className="text-mytext-color text-xl">
          Name
        </label>
        <input
          value={name}
          onChange={ (e) => setName(e.target.value) }
          type="text"
          pattern="[a-z0-9]{1,15}"
          className="py-2 px-3 rounded-lg border-2 outline-none border-mytext-color"
          required
        />
        <label htmlFor="email" className="text-mytext-color text-xl">
          Email
        </label>
        <input
          value={email}
          onChange={ (e) => setEmail(e.target.value) }
          type="text"
          className="py-2 px-3 rounded-lg border-2 outline-none border-mytext-color"
          required
        />
        <label htmlFor="message" className="text-mytext-color text-xl">
          Message
        </label>
        <textarea
          value={message}
          onChange={ (e) => setMessage(e.target.value) }
          className="py-2 px-3 rounded-lg border-2 outline-none border-mytext-color"
          cols="30"
          rows="6"
        ></textarea>
      </div>
      <button
        type="submit"
        className="bg-violet-700 my-8 px-6 py-3 rounded-3xl text-white hover:scale-105 "
      >
        Submit
      </button>
    </form>
  );
}
