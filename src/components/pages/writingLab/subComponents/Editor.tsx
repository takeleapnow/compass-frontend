import { useState, useRef, useMemo } from "react";
import JoditEditor, { Jodit } from "jodit-react";

interface EditorProps {
  placeholder: string;
  currWordCount?: number;
  setCurrWordCount?: (val: number) => void;
}

const Editor = ({
  placeholder,
  currWordCount,
  setCurrWordCount,
}: EditorProps) => {
  const editor = useRef<Jodit | null>(null); // Correct typing for useRef
  const [content, setContent] = useState<string>("");
  const [isEditing, setIsEditing] = useState<boolean>(true); // Tracks if editor is in edit mode

  console.log(currWordCount);

  const config = useMemo(
    () => ({
      readonly: false,
      // defaultMode: Jodit.constants.MODE_SPLIT,
      placeholder: placeholder || "Start typing...",
      toolbarSticky: true,
      buttons: [
        "bold",
        "italic",
        "underline",
        "strikethrough",
        "eraser",
        "ul",
        "ol",
        "font",
        "fontsize",
        "paragraph",
        "link",
        "align",
        "selectAll",
        "table",
        "fullsize",
        "undo",
        "redo",
      ],
      buttonsXS: [
        "bold",
        "italic",
        "underline",
        "eraser",
        "ul",
        "ol",
        "link",
        "undo",
        "redo",
      ],
      buttonsSM: [
        "bold",
        "italic",
        "underline",
        "eraser",
        "ul",
        "ol",
        "link",
        "undo",
        "redo",
      ],
      buttonsMD: [
        "bold",
        "italic",
        "underline",
        "eraser",
        "ul",
        "ol",
        "link",
        "undo",
        "redo",
      ],
      toolbarAdaptive: false,
      removeButtons: ["image", "video", "file", "media", "about", "hr"],
      removePlugins: [
        "video",
        "imageUploader",
        "media",
        "clipboard",
        "dragAndDropFile",
      ],
      showXPathInStatusbar: false,
      style: {
        // Custom CSS to style links
        a: {
          "text-decoration": "underline",
          "text-decoration-color": "lightgray",
        },
      },
    }),
    [placeholder]
  );

  console.log(content);
  const handleContentChange = (newContent: string) => {
    setContent(newContent);
    const wordCount = newContent.trim().split(/\s+/).filter(Boolean).length;
    if (setCurrWordCount) {
      setCurrWordCount(wordCount);
    }
  };

  const handleBlur = () => {
    setIsEditing(false); // Switch to display mode on blur
  };

  const handleDoubleClick = () => {
    setIsEditing(true); // Switch back to edit mode on double-click
  };

  const stripHtml = (html: string) => {
    const doc = new DOMParser().parseFromString(html, "text/html");
    return doc.body.textContent || "";
  };
  return (
    <div>
      {isEditing ?
        <JoditEditor
          ref={editor} // Ensures the ref is attached correctly
          value={content}
          config={config}
          onBlur={(newContent) => {
            handleContentChange(newContent);
            handleBlur();
          }}
          onChange={(newContent) => handleContentChange(newContent)}

        />
        :
        <div onDoubleClick={handleDoubleClick}>
          <p>{stripHtml(content) || "Double-click to edit"}</p>
        </div>
      }

    </div>

  );
};

export default Editor;
