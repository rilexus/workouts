import React, { createContext, useContext, useState } from "react";

const SpeechContext = createContext(new SpeechSynthesisUtterance());
const useSpeech = () => useContext(SpeechContext);

const speech = new SpeechSynthesisUtterance();
speech.voiceURI = "native";
speech.volume = 1; // 0 to 1
speech.rate = 1; // 0.1 to 10 speech.pitch = 1; //0 to 2
speech.text = "Hello World";
speech.lang = "en-US";

const speak = (text) => {
  window.speechSynthesis.cancel();
  speech.text = text;
  window.speechSynthesis.speak(speech);
};

const value = [speech, speak];

const SpeechProvider = ({ children }) => {
  return (
    <SpeechContext.Provider value={value}>{children}</SpeechContext.Provider>
  );
};

export { SpeechProvider, useSpeech };
