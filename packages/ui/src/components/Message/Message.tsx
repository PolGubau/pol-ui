"use client";

import { cn, mergeDeep } from "../../helpers";
import { getTheme } from "../../theme-store";
import type { MessageTheme } from "./theme";

export interface MessageProps {
  content: string;
  date?: Date;
  locale?: Intl.LocalesArgument;
  arrow?: boolean;
  mine?: boolean;
  theme?: Partial<MessageTheme>;
}
const Message = ({ content, date, arrow, locale, mine = true, theme: customTheme = {} }: MessageProps) => {
  const parsedDate = date?.toLocaleTimeString(locale, {
    hour: "2-digit",
    minute: "2-digit",
  });
  const theme = mergeDeep(getTheme().message, customTheme);

  return (
    <div className={theme.message.base}>
      <div className={cn(theme.message.content.base, theme.message.content.mine[mine ? "on" : "off"])}>
        {content}
        {date && <div className={theme.message.date}>{parsedDate}</div>}
      </div>
      {arrow && <div className={cn(theme.message.arrow.base, theme.message.arrow.mine[mine ? "on" : "off"])}></div>}
    </div>
  );
};

interface MessageGroupProps {
  messages: MessageProps[];
  theme?: Partial<MessageTheme>;
  mine?: boolean;
}
const MessageGroup = ({ messages, theme: customTheme = {}, mine = true }: MessageGroupProps) => {
  const theme = mergeDeep(getTheme().message, customTheme);

  return (
    <div className={cn(theme.messageGroup.base, theme.messageGroup.mine[mine ? "on" : "off"])}>
      {messages.map((message, index) => (
        <Message key={index} mine={message.mine ?? mine} {...message} arrow={index === 0} />
      ))}
    </div>
  );
};

export { Message, MessageGroup };
