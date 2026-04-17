"use client";

import React, { useState } from "react";
import { Editor } from "primereact/editor";

export default function MyEditor() {
  const [text, setText] = useState<string>("");

  return (
    <div className=" p-4">
      <Editor
        value={text}
        onTextChange={(e) => setText(e.htmlValue || "")}
        style={{ height: "300px" }}
      />

      <div className="mt-4">
        <h3>Preview:</h3>
        <div dangerouslySetInnerHTML={{ __html: text }} />
      </div>
    </div>
  );
}
