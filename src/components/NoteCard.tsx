import React, { useState } from "react";
import ReactMarkdown from "react-markdown";
import { type RouterOutputs } from "@/utils/api";

type Note = RouterOutputs["note"]["getAll"][0];

function NoteCard({
  note,
  onDelete,
  onEdit,
}: {
  note: Note;
  onDelete: () => void;
  onEdit: (note: Note) => void;
}) {
  const [isExpanded, setIsExpanded] = useState(true);

  return (
    <div className="card mt-5 border border-gray-200 bg-base-100 shadow-xl">
      <div className="card-body m-0 p-3">
        <div
          className={`collapse-arrow ${
            isExpanded ? "collapse-open" : ""
          } collapse`}
          onClick={() => setIsExpanded((old) => !old)}
        >
          <div className="collapse-title text-xl font-bold">{note.title}</div>
          <div className="collapse-content">
            <article className="prose lg:prose-xl">
              <ReactMarkdown>{note.content}</ReactMarkdown>
            </article>
          </div>
          <div className="row flex w-full justify-between">
            <button
              className="btn-info btn-xs btn px-5"
              onClick={() => onEdit(note)}
            >
              Edit
            </button>
            <button className="btn-warning btn-xs btn px-5" onClick={onDelete}>
              Delete
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NoteCard;
