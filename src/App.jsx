import { useState } from "react";

function App() {
  const [notes, setNotes] = useState([]);
  const [input, setInput] = useState("");
  const [search, setSearch] = useState("");

  const addNote = () => {
    if (input.trim() === "") return;
    setNotes([...notes, input.trim()]);
    setInput("");
  };

  const deleteNote = (indexToDelete) => {
    const updatedNotes = notes.filter((_, i) => i !== indexToDelete);
    setNotes(updatedNotes);
  };

  const filteredNotes = notes.filter((note) =>
    note.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gray-100 p-6 flex justify-center">
      <div className="w-full max-w-xl bg-white shadow-lg rounded-lg p-6">
        <h1 className="text-4xl font-bold text-center text-blue-600 mb-6">
          QuickNotes
        </h1>

        {/* Search bar */}
        <input
          type="text"
          placeholder="Search notes..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full px-4 py-2 mb-4 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
        />

        {/* Note input */}
        <div className="flex gap-2 mb-6">
          <input
            type="text"
            placeholder="Write a note..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className="flex-1 px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <button
            onClick={addNote}
            className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded"
          >
            Add
          </button>
        </div>

        {/* Notes list */}
        <ul className="space-y-3 max-h-96 overflow-y-auto">
          {filteredNotes.length === 0 ? (
            <li className="text-center text-gray-500">No notes found.</li>
          ) : (
            filteredNotes.map((note, index) => (
              <li
                key={index}
                className="flex justify-between items-center bg-gray-50 p-3 rounded border"
              >
                <span>{note}</span>
                <button
                  onClick={() => deleteNote(index)}
                  className="text-red-500 hover:underline text-sm"
                >
                  Delete
                </button>
              </li>
            ))
          )}
        </ul>
      </div>
    </div>
  );
}

export default App;


