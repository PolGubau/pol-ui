'use client';

import type { ComponentProps, PropsWithChildren } from 'react';
import { useState } from 'react';
import { BsCheckLg, BsFillClipboardFill } from 'react-icons/bs';
import { HiMoon, HiSun } from 'react-icons/hi';
import { twMerge } from 'tailwind-merge';
import { Select, Tooltip } from '~/src';
import { CodeHighlight, type Language } from './code-highlight';

interface BaseCodeData<T extends 'single' | 'variant'> {
  type: T;
  githubSlug: string;
  component: React.ReactNode;
}

interface VariantCodeData<V extends Variant> extends BaseCodeData<'variant'> {
  variant: V;
  code: CodeVariant<V>;
}

interface SingleCodeData extends BaseCodeData<'single'> {
  code: Code;
}

interface CodeItem {
  fileName: string;
  language: Language;
  code: string;
}

type Variant = string;
type CodeVariant<V extends Variant> = Record<V, Code>;
type Code = CodeItem | [CodeItem, ...CodeItem[]];

export type CodeData<V extends Variant = Variant> = SingleCodeData | VariantCodeData<V>;

interface CodeDemoProps {
  data: CodeData;
}

export function CodeDemo({ data }: CodeDemoProps) {
  const [tabIndex, setTabIndex] = useState(0);
  const [variant, setVariant] = useState(getInitialVariant(data));

  const [isDarkMode, setDarkMode] = useState(false);
  const [isExpanded, setExpanded] = useState(false);
  const [isJustCopied, setJustCopied] = useState(false);

  function copyToClipboard(value: string) {
    setJustCopied(true);
    navigator.clipboard.writeText(value);
    setTimeout(() => setJustCopied(false), 2000);
  }

  function getInitialVariant(data: CodeData): Variant {
    if (data.type === 'variant') return data.variant;

    return '';
  }

  function getVariants(data: CodeData): Variant[] {
    if (data.type === 'variant') return Object.keys(data.code);

    return [];
  }

  function getCode(data: CodeData, variant: Variant): Code {
    if (data.type === 'variant') return data.code[variant];

    return data.code;
  }

  function getCodeItems(code: Code): CodeItem[] {
    return Array.isArray(code) ? code : [code];
  }

  function getCurrent(items: CodeItem[], index: number): CodeItem {
    return items[index];
  }

  function handleSelectVariant(variant: Variant) {
    setTabIndex(0);
    setVariant(variant);
  }

  function getShouldExpand(rawCode: string) {
    const rem = 16;
    const offset = 41; // expand/collapse button height
    const padding = 28;
    const maxHeight = 18 * rem + offset; // mirror `max-h-72`
    const codeHeight = getTextHeight(rawCode) + padding;

    return codeHeight > maxHeight;
  }

  function getTextHeight(value: string) {
    const fontSize = 16.5;
    const lineHeight = 1.25;

    return countLines(value) * fontSize * lineHeight;
  }

  function countLines(value: string) {
    return (value.match(/\n/g) || '').length + 1;
  }

  const variants = getVariants(data);
  const code = getCode(data, variant);
  const codeItems = getCodeItems(code);
  const current = getCurrent(codeItems, tabIndex);
  const shouldExpand = getShouldExpand(current.code.trim());

  return (
    <div className="code-example mt-8">
      <div className="w-full rounded-t-xl border border-gray-200 bg-gray-50 p-4 dark:border-gray-600 dark:bg-gray-700">
        <div className="grid grid-cols-2">
          <EditOnGithubButton githubSlug={data.githubSlug} />
          <div className="ml-auto">
            <ToggleDarkModeButton isDarkMode={isDarkMode} onClick={() => setDarkMode(!isDarkMode)} />
          </div>
        </div>
      </div>
      <CodePreview isDarkMode={isDarkMode}>{data.component}</CodePreview>
      <div className="code-syntax-wrapper">
        <div
          className={twMerge(
            'code-syntax relative border-x border-y border-gray-200 dark:border-gray-600',
            shouldExpand && 'pb-[41px]',
          )}
        >
          <div className="flex w-full rounded-t-md border-b border-gray-200 bg-gray-50 dark:border-gray-600 dark:bg-gray-700">
            <Tabs tabIndex={tabIndex} items={codeItems} onSelect={setTabIndex} />
            {/* TODO: style */}
            {variants.length > 0 && (
              <Select className="mr-2" onChange={(e) => handleSelectVariant(e.target.value)}>
                {variants.map((v) => (
                  <option key={v} value={v} selected={v === variant}>
                    {v}
                  </option>
                ))}
              </Select>
            )}
            <div className="flex justify-end">
              <CopyToClipboardButton isJustCopied={isJustCopied} onClick={() => copyToClipboard(current.code)} />
            </div>
          </div>
          <div className={twMerge('!overflow-y-hidden', shouldExpand && !isExpanded && 'max-h-72')}>
            <CodeHighlight className="!mb-0 !rounded-none" code={current.code} language={current.language} />
          </div>
          {shouldExpand && (
            <CollapseExpandButton isExpanded={isExpanded} onClick={() => setExpanded((state) => !state)} />
          )}
        </div>
      </div>
    </div>
  );
}

function Tabs({ tabIndex, items, onSelect }: { tabIndex: number; items: CodeItem[]; onSelect(index: number): void }) {
  return (
    <ul className="flex flex-1 text-center text-sm font-medium text-gray-500 dark:text-gray-400">
      {items.map((item, index) => (
        <li key={item.fileName}>
          <button type="button" role="tab" onClick={() => onSelect(index)}>
            <span
              className={twMerge(
                'inline-block w-full border-r border-gray-200 bg-gray-100 p-2 px-3 dark:border-gray-600 dark:bg-gray-800',
                index === tabIndex ? 'text-gray-800 dark:text-white' : 'hover:text-gray-600 hover:dark:text-gray-300',
              )}
            >
              {item.fileName + `.${item.language}`}
            </span>
          </button>
        </li>
      ))}
    </ul>
  );
}

function CodePreview({ isDarkMode, children }: PropsWithChildren<{ isDarkMode: boolean }>) {
  return (
    <div className={twMerge('code-preview-wrapper', isDarkMode && 'dark')}>
      <div className="code-preview flex border-x border-gray-200 bg-white bg-gradient-to-r p-0 dark:border-gray-600 dark:bg-gray-900">
        <div className="code-responsive-wrapper w-full">
          <div className="mx-auto w-full bg-white bg-gradient-to-r p-2 dark:bg-gray-900 sm:p-6">
            <div className="py-4">{children}</div>
          </div>
        </div>
      </div>
    </div>
  );
}

function EditOnGithubButton({ githubSlug }: { githubSlug: string }) {
  const githubSrcHref = 'https://github.com/themesberg/flowbite-react/blob/main/examples/';
  const href = `${githubSrcHref}${githubSlug}`;

  return (
    <a
      href={href}
      rel="noreferrer nofollow noopener"
      className="inline-flex w-fit items-center justify-center gap-2 rounded-lg border border-gray-200 bg-white px-3 py-2 text-center text-xs font-medium text-gray-900 hover:bg-gray-100 hover:text-primary-700 focus:text-primary-700 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white dark:focus:text-white dark:focus:ring-gray-700"
    >
      <svg
        aria-hidden
        fill="currentColor"
        viewBox="0 0 24 24"
        focusable="false"
        data-icon="github"
        role="img"
        className="h-4 w-4"
      >
        <path
          fillRule="evenodd"
          d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
          clipRule="evenodd"
        />
      </svg>
      Edit on GitHub
    </a>
  );
}

function ToggleDarkModeButton({ isDarkMode, onClick }: ComponentProps<'button'> & { isDarkMode: boolean }) {
  return (
    <Tooltip content={isDarkMode ? 'Toggle light mode' : 'Toggle dark mode'}>
      <button
        onClick={onClick}
        className="flex items-center rounded-lg border border-gray-200 bg-white p-2 text-xs font-medium text-gray-700 hover:bg-gray-100 hover:text-primary-700 focus:z-10 focus:outline-none focus:ring-2 focus:ring-gray-300 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white dark:focus:ring-gray-500"
      >
        <span className="sr-only">Toggle dark/light mode</span>
        {isDarkMode ? <HiSun className="h-4 w-4" /> : <HiMoon className="h-4 w-4" />}
      </button>
    </Tooltip>
  );
}

function CopyToClipboardButton({ isJustCopied, onClick }: ComponentProps<'button'> & { isJustCopied: boolean }) {
  return (
    <button
      onClick={onClick}
      className="copy-to-clipboard-button flex items-center border-l border-gray-200 bg-gray-100 px-3 py-2 text-xs font-medium text-gray-600 hover:text-primary-700 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-400 dark:hover:text-white"
    >
      {isJustCopied ? (
        <BsCheckLg className="mr-2 h-4 w-4 text-green-500 dark:text-green-400" />
      ) : (
        <BsFillClipboardFill className="mr-2 h-3 w-3" />
      )}
      {isJustCopied ? 'Code copied!' : 'Copy code'}
    </button>
  );
}

function CollapseExpandButton({ isExpanded, onClick }: ComponentProps<'button'> & { isExpanded: boolean }) {
  return (
    <button
      onClick={onClick}
      className="absolute bottom-0 left-0 z-30 w-full border-t border-gray-200 bg-gray-100 px-5 py-2.5 text-sm font-medium text-gray-900 hover:bg-gray-100 hover:text-primary-700 dark:border-gray-600 dark:bg-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
    >
      {isExpanded ? 'Collapse code' : 'Expand code'}
    </button>
  );
}
