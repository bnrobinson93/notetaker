import React, { useState } from "react";
import CodeMirror from "@uiw/react-codemirror";
import { markdown, markdownLanguage } from "@codemirror/lang-markdown";
import { languages } from "@codemirror/language-data";
import { type RouterOutputs } from "@/utils/api";

type Note = RouterOutputs["note"]["getAll"][0];

function NoteEditor({
  onSave,
  activeNote,
}: {
  onSave: ({ title, content }: { title: string; content: string }) => void;
  activeNote: Note | null;
}) {
  const [code, setCode] = useState(activeNote?.content || "");
  const [title, setTitle] = useState(activeNote?.title || "");

  return (
    <div className="card mt-5 border border-gray-200 bg-base-100 shadow-xl">
      <div className="card-body">
        <h2 className="card-title">
          <input
            type="text"
            placeholder="Note Title"
            className="input-primary input input-lg w-full font-bold"
            value={title}
            onChange={(e) => setTitle(e.currentTarget.value)}
          />
        </h2>
        <CodeMirror
          className="border border-gray-700"
          extensions={[
            markdown({ base: markdownLanguage, codeLanguages: languages }),
          ]}
          height="30vh"
          minWidth="100%"
          minHeight="30vh"
          onChange={(val) => setCode(val)}
          value={code}
          width="500px"
        />
      </div>
      <div className="card-actions justify-end">
        <button
          className="btn-primary btn"
          disabled={title.trim().length === 0 || code.trim().length === 0}
          onClick={() => {
            onSave({ title, content: code });
            setCode("");
            setTitle("");
          }}
        >
          Save
        </button>
      </div>
    </div>
  );
}

export default NoteEditor;
