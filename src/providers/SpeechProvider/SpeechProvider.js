import React, { createContext, useContext, useState } from "react";

const SpeechContext = createContext(new SpeechSynthesisUtterance());
const useSpeech = () => useContext(SpeechContext);

const SpeechProvider = ({ children }) => {
  const [speech] = useState(() => new SpeechSynthesisUtterance());

  speech.voiceURI = "native";
  speech.volume = 1; // 0 to 1
  speech.rate = 1; // 0.1 to 10
  speech.pitch = 1; //0 to 2
  speech.text = "Hello World";
  speech.lang = "en-US";

  const speak = (text) => {
    window.speechSynthesis.cancel();
    speech.text = text;
    window.speechSynthesis.speak(speech);
  };

  return (
    <SpeechContext.Provider value={[speech, speak]}>
      {children}
    </SpeechContext.Provider>
  );
};

export { SpeechProvider, useSpeech };
