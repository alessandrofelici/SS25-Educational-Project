"use client";
import { useState } from "react";

export default function Home() {
  const [prompt, setPrompt] = useState("initial phrase");
  const [response, setResponse] = useState("no response");

  const sendPrompt = async () => {
    const res = await fetch("/api/ollama", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ prompt }),
    });

    const data = await res.json();
    setResponse(data.response);
  };

  return (
    <div className="container">
      <textarea
        className="searchBar"
        value={prompt}
        onChange={(e) => setPrompt(e.target.value)}
      >
        <input type="text" placeholder="Please Enter Prompt..." />
      </textarea>
      <div>
        <button className="button" onClick={sendPrompt}>
          Submit
        </button>
      </div>
      <div>
        <p>{response}</p>
      </div>
    </div>
  );
}
