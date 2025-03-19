"use client";
import { useState } from "react";

export default function Home() {
  const [prompt, setPrompt] = useState("");
  const [response, setResponse] = useState("no response");
  const [fileName, setFileName] = useState("");

  const sendPrompt = async () => {
    setResponse("Waiting...");
    const res = await fetch("/api/ollama", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ prompt }),
    });

    const data = await res.json();
    setResponse(data.response);
  };

  const handleFileChange = async (e) => {
    console.log(fileName);
    const file = e.target.files[0];
    if (!file) return;

    setFileName(file.name);

    const reader = new FileReader();

    reader.onload = (event) => {
      const content = event.target.result;
    };
  };

  const handleClear = () => {};

  return (
    <div className="container">
      <div>
        <h1>Ollama Chat</h1>
      </div>
      <div>
        <input
          id="fileItem"
          type="file"
          accept=".txt,.md,.pdf"
          onClick={handleFileChange}
        ></input>
      </div>
      <div>
        <button className="button" onClick={handleClear}>
          Clear File
        </button>
      </div>
      <div className="border p-2 w-[200px] h-[50px]">chatbot text here</div>
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

// TO DO:

// Main task:
// read FileReader docs to see how to open file selection?

// Front end:
// Center Items, are divs necessary?
// and/or reorganize by using more tailwind
// General front end appearance

// Additional time:
// Later: try to redo without nextjs
