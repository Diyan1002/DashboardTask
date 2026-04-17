import React, { useState } from "react";

function EditorPanel({ project }) {
  const [note, setNote] = useState("");
  const [status, setStatus] = useState({ type: "", message: "" });

  const handleSubmit = () => {
    if (!note.trim()) {
      setStatus({ type: "error", message: "Please enter a note before submitting." });
      return;
    }

    setStatus({ type: "success", message: `Note saved for ${project.title}!` });
    setNote("");
  };

  return (
    <div>
      <h3 className="text-lg font-bold mb-4 text-gray-800">{project.title}</h3>

      <textarea
        className="w-full border border-gray-300 p-3 rounded-2xl text-base focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
        rows="5"
        placeholder="Write your notes here..."
        value={note}
        onChange={(e) => {
          setNote(e.target.value);
          if (status.type) {
            setStatus({ type: "", message: "" });
          }
        }}
      />

      <div className="flex gap-3 mt-4">
        <button
          onClick={handleSubmit}
          disabled={status.type === "loading"}
          className="px-6 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-xl font-semibold transition-all duration-200 disabled:opacity-60 disabled:cursor-not-allowed"
        >
          {status.type === "loading" ? "Submitting..." : "Submit"}
        </button>
      </div>

      {status.message && (
        <p
          className={`mt-3 text-sm font-medium ${
            status.type === "success" ? "text-green-600" : "text-red-600"
          }`}
        >
          {status.message}
        </p>
      )}
    </div>
  );
}

export default EditorPanel;