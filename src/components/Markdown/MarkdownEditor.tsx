import React, { useState, useRef } from "react";
import {
  TbBold,
  TbCode,
  TbHeading,
  TbItalic,
  TbNumber1,
  TbNumber2,
  TbNumber3,
} from "react-icons/tb";
import { GrBlockQuote } from "react-icons/gr";
import { ILanguage, ILanguageAndText } from "../../types";
import { MarkdownEditorStyled } from "./MarkdownStyled";

const MarkdownEditor = ({
  onSubmit,
  languages = [],
}: {
  onSubmit: any;
  languages?: ILanguage[];
}) => {
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  const [markdownText, setMarkdownText] = useState<ILanguageAndText[] | string>(
    languages
      ? languages.map((lang) => {
          return { language: lang.code, text: "" };
        }, {})
      : ""
  );
  const [language, setLanguage] = useState(languages[0].code);

  type HandleStyleType =
    | "bold"
    | "italic"
    | "code"
    | "blockquote"
    | "heading1"
    | "heading2"
    | "heading3";
  const handleStyle = (type: HandleStyleType) => {
    if (!textareaRef.current) return;
    const startIndex = textareaRef.current.selectionStart;
    const endIndex = textareaRef.current.selectionEnd;
    const text = textareaRef.current.value;
    const before = text.substring(0, startIndex);
    const after = text.substring(endIndex, text.length);
    const selected = text.substring(startIndex, endIndex);
    switch (type) {
      case "bold":
        selected.length > 0 &&
          setMarkdownText(before + " **" + selected + "** " + after);
        break;
      case "italic":
        selected.length > 0 &&
          setMarkdownText(before + " *" + selected + "* " + after);
        break;

      case "code":
        selected.length > 0 &&
          setMarkdownText(before + " `" + selected + "` " + after);
        break;

      case "blockquote":
        setMarkdownText("> " + text.replace(/>/g, " ").trimStart());

        break;

      case "heading1":
        setMarkdownText("# " + text.replace(/#/g, " ").trimStart());

        break;

      case "heading2":
        setMarkdownText("## " + text.replace(/#/g, " ").trimStart());
        break;

      case "heading3":
        setMarkdownText("### " + text.replace(/#/g, " ").trimStart());
        break;
    }
  };

  const handleMarkdownChange = (event: any) => {
    if (typeof markdownText === "string")
      return setMarkdownText(event.target.value);

    const text = markdownText.map((text: any) => {
      if (text.language === language) {
        text.text = event.target.value;
      }
      return text;
    });
    setMarkdownText(text);
  };

  const handleSubmit = () => {
    onSubmit(markdownText);
  };

  const handleLanguageChange = (event: any) => {
    setLanguage(event.target.value);
  };

  const textOfLanguage = (lang: string) => {
    if (typeof markdownText === "string") return markdownText;
    const text = markdownText.find((text: any) => lang in text);
    return text ? text[lang as keyof ILanguageAndText] : "";
  };

  return (
    <MarkdownEditorStyled>
      <nav>
        <div className="left">
          <button>
            <TbBold
              onClick={() => {
                handleStyle("bold");
              }}
            />
          </button>
          <button
            onClick={() => {
              handleStyle("italic");
            }}
          >
            <TbItalic />
          </button>

          <button
            onClick={() => {
              handleStyle("code");
            }}
          >
            <TbCode />
          </button>

          <button
            onClick={() => {
              handleStyle("blockquote");
            }}
          >
            <GrBlockQuote />
          </button>
          <button
            onClick={() => {
              handleStyle("heading1");
            }}
          >
            <TbHeading />
            <TbNumber1 />
          </button>
          <button
            onClick={() => {
              handleStyle("heading2");
            }}
          >
            <TbHeading />
            <TbNumber2 />
          </button>
          <button
            onClick={() => {
              handleStyle("heading3");
            }}
          >
            <TbHeading />
            <TbNumber3 />
          </button>
        </div>

        <div className="right">
          {languages && (
            <div className="changeLanguage">
              <select onChange={handleLanguageChange} value={language}>
                {languages.map((language) => (
                  <option key={language.code} value={language.code}>
                    {language.name}
                  </option>
                ))}
              </select>
            </div>
          )}
          <button onClick={handleSubmit}>Submit</button>
        </div>
      </nav>
      <main>
        <textarea
          value={textOfLanguage(language)}
          onChange={handleMarkdownChange}
          ref={textareaRef}
        />
        <h5>Result: </h5>
        <p>{textOfLanguage(language)}</p>
      </main>
    </MarkdownEditorStyled>
  );
};
export default MarkdownEditor;
