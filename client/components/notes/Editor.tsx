"use client";

import React, { useState } from "react";
import { Editor } from "primereact/editor";

export default function MyEditor() {
  const [text, setText] = useState<string>("");

  return (
    <div className="custom-editor h-full flex flex-col">
      <Editor
        value={text}
        onTextChange={(e) => setText(e.htmlValue || "")}
        style={{ height: "452px", border: "none" }}
      />
    </div>
  );
}
