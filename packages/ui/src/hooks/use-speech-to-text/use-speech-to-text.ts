"use client";

import { useCallback, useEffect, useState } from "react";

// Define custom types for SpeechRecognition and SpeechRecognitionEvent
interface ISpeechRecognitionEvent extends Event {
  results: SpeechRecognitionResultList;
  resultIndex: number;
}

interface ISpeechRecognition extends EventTarget {
  lang: string;
  continuous: boolean;
  interimResults: boolean;
  maxAlternatives: number;
  start: () => void;
  stop: () => void;
  onresult: (event: ISpeechRecognitionEvent) => void;
  onerror: (event: Event) => void;
  onend: () => void;
}

declare global {
  interface Window {
    SpeechRecognition: new () => ISpeechRecognition;
    webkitSpeechRecognition: new () => ISpeechRecognition;
  }
}

interface UseSpeechToTextProps {
  /**
   * The language code for the recognition
   */
  lang?: string;
  /**
   * Whether the recognition should continue even after the user stops speaking
   */
  continuous?: boolean;
  /**
   * Whether interim results should be returned
   */
  interimResults?: boolean;
  /**
   * The maximum number of alternative transcripts to return
   */
  maxAlternatives?: number;
  /**
   * Callback function to be invoked when a result is recognized
   */
  onResult?: (result: string) => void;
  /**
   * Callback function to be invoked when an error occurs
   */
  onError?: (error: string) => void;
}

const useSpeechToText = ({
  lang = "en-US",
  continuous = true,
  interimResults = true,
  maxAlternatives = 1,
  onResult,
  onError,
}: UseSpeechToTextProps = {}) => {
  const [isListening, setIsListening] = useState(false);
  const [transcript, setTranscript] = useState("");
  const [lastProcessedIndex, setLastProcessedIndex] = useState(0);

  const hasWindow = typeof window !== "undefined";
  const hasWindowSpeechRecognition = Boolean(window.SpeechRecognition);
  const hasWebkitSpeechRecognition = Boolean(window.webkitSpeechRecognition);
  const hasWindowOrWebkitSpeechRecognition = hasWindowSpeechRecognition || hasWebkitSpeechRecognition;

  const windowOrWebkitSpeechRecognition =
    // eslint-disable-next-line @typescript-eslint/no-unnecessary-condition
    window.SpeechRecognition || window.webkitSpeechRecognition;

  const recognition: ISpeechRecognition | null =
    hasWindow && hasWindowOrWebkitSpeechRecognition ? new windowOrWebkitSpeechRecognition() : null;

  const handleResult = useCallback(
    (event: ISpeechRecognitionEvent) => {
      let interimTranscript = "";
      let finalTranscript = "";

      // Iterate through all the current results
      for (let i = lastProcessedIndex; i < event.results.length; i++) {
        const result = event.results[i];
        // If the result is final, append to the final transcript
        if (!result) {
          continue;
        }
        if (result.isFinal) {
          finalTranscript += `${result[0]?.transcript} `;
          setLastProcessedIndex(i + 1);
        } else {
          // Otherwise, append to the interim transcript
          interimTranscript += `${result[0]?.transcript} `;
        }
      }

      // Update the transcript state with a combination of the final and interim results
      setTranscript(transcript + finalTranscript + interimTranscript);

      // Invoke callback with the latest transcript
      onResult?.(transcript + finalTranscript + interimTranscript);
    },
    [onResult, transcript, lastProcessedIndex],
  );

  // start and stop functions using useCallback
  const start = useCallback(() => {
    if (!recognition || isListening) {
      return;
    }
    setTranscript("");
    setLastProcessedIndex(0);
    setIsListening(true);
    recognition.start();
  }, [recognition, isListening]);

  const stop = useCallback(() => {
    if (!(recognition && isListening)) {
      return;
    }
    recognition.stop();
    setIsListening(false);
  }, [recognition, isListening]);

  useEffect(() => {
    if (!recognition) {
      onError?.("Speech recognition is not supported in this browser.");
      return;
    }

    recognition.lang = lang;
    recognition.continuous = continuous;
    recognition.interimResults = interimResults;
    recognition.maxAlternatives = maxAlternatives;
    recognition.onresult = handleResult;
    recognition.onerror = (event) => {
      onError?.(`Errror ${JSON.stringify(event)}`);
    };
    recognition.onend = () => {
      setIsListening(false);
    };

    return () => {
      if (isListening) {
        recognition.stop();
      }
    };
  }, [lang, continuous, interimResults, maxAlternatives, handleResult, onError, recognition, start, stop, isListening]);

  return { start, stop, transcript, isListening };
};

export { useSpeechToText, type UseSpeechToTextProps };
