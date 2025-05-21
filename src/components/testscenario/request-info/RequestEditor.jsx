import { useState } from "react";
import AceEditor from "react-ace";

import ace from "ace-builds/src-noconflict/ace";
import "ace-builds/src-noconflict/theme-tomorrow";
import "ace-builds/src-noconflict/mode-xml";
import "ace-builds/src-noconflict/mode-json";
import "ace-builds/src-noconflict/ext-language_tools";

ace.config.set("basePath", "/node_modules/ace-builds/src-noconflict");

export default function RequestEditor({ format, formData, setFormData }) {
  const handleChange = (newValue) => {
    let parsedValue = newValue;
    if (format === "JSON") {
      try {
        parsedValue = JSON.parse(newValue);
      } catch (err) {}
    } else if (format === "XML") {
      parsedValue = btoa(newValue);
    }
    setFormData((prev) => ({
      ...prev,
      request_info: {
        ...prev.request_info,
        body: parsedValue,
      },
    }));
  };

  return (
    <AceEditor
      placeholder="Placeholder Text"
      mode={typeof format === "string" ? format.toLowerCase() : "json"}
      theme="tomorrow"
      fontSize={14}
      onChange={handleChange}
      width="100%"
      lineHeight={19}
      showPrintMargin={true}
      showGutter={true}
      highlightActiveLine={true}
      setOptions={{
        enableBasicAutocompletion: false,
        enableLiveAutocompletion: false,
        enableSnippets: false,
        enableMobileMenu: true,
        showLineNumbers: true,
        tabSize: 2,
      }}
    />
  );
}
