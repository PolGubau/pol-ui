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
import styled from "styled-components";
import { ILanguage, ILanguageAndText } from "../../types";

export const MarkdownEditorStyled = styled.div`
  box-sizing: border-box;
  overflow: hidden;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  background-color: ${({ theme }) => theme.colors.background.normal};
  border-radius: 15px;
  nav {
    box-sizing: border-box;
    gap: 5px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap;
    width: 100%;
    padding: 5px;
    background-color: ${({ theme }) => theme.colors.background.dark};
    @media screen and (max-width: 700px) {
      align-items: center;
      display: flex;
      flex-direction: column;
    }

    .left {
      display: flex;
      flex-wrap: wrap;
      align-items: center;
      justify-content: flex-start;
      gap: 5px;
    }
    button {
      cursor: pointer;
      display: flex;
      align-items: center;
      justify-content: center;
      width: 30px;
      height: 30px;
      border-radius: 10px;
      border: none;
      background-color: ${({ theme }) => theme.colors.secondary.dark};
      color: ${({ theme }) => theme.colors.secondary.light};
      :hover {
        background-color: ${({ theme }) => theme.colors.secondary.normal};
        color: ${({ theme }) => theme.colors.secondary.dark};
        transform: scale(0.98);
      }
    }
    .right {
      display: flex;
      align-items: center;
      gap: 5px;
      justify-content: flex-end;
      align-items: stretch;

      button {
        min-width: 70px;
        height: 30px;

        width: fit-content;
        background-color: ${({ theme }) => theme.colors.main.normal};
      }
      select {
        width: 100px;
        height: 30px;
        border-radius: 10px;
        padding: 0 5px;
      }
    }
  }
  main {
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    width: 100%;
    padding: 5px;
    textarea {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
      width: 100%;
      min-height: 100px;
      max-height: 400px;
      resize: vertical;
      padding: 5px;
      border: 1px solid ${({ theme }) => theme.colors.secondary.dark};
      border-radius: 10px;
      background-color: ${({ theme }) => theme.colors.background.normal};
      font-family: "Poppins", sans-serif;
      font-size: 1.3rem;
    }
  }
`;

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
