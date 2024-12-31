import { useEffect, useState } from 'react';

const useSpeechRecognition = (lang) => {
  const [listening, setListening] = useState(false);
  const [transcript, setTranscript] = useState('');
  const [recognition, setRecognition] = useState(null);

  useEffect(() => {
    const SpeechRecognition =window.webkitSpeechRecognition;

    if (!SpeechRecognition) {
      console.error('Browser does not support Speech Recognition.');
      return;
    }
    

    const recognitionInstance = new SpeechRecognition();
    recognitionInstance.continuous = true;
    recognitionInstance.interimResults = true;
    recognitionInstance.onresult = (event) => {
      for (let i = event.resultIndex; i < event.results.length; i++) {
        const result = event.results[i];
        setTranscript(result[0].transcript)
      }
    };

    recognitionInstance.onerror = (error) => {
      console.error('Speech Recognition Error:', error);
      };
      
       recognitionInstance.onend = () => {
      if (listening) {
        recognitionInstance.start();
      }
    };
    setRecognition(recognitionInstance);

    if (listening) return () => recognitionInstance.start();
    else return () => recognitionInstance.stop();

  }, []);

  useEffect(() => {
    if (recognition) {
      recognition.lang = lang;
    }
    
  }, [recognition, lang])
  

  const start = () => {
    if (recognition) {
      setListening(true);
      recognition.start();
    } else {
      console.error('Speech Recognition instance not initialized.');
    }
  };

  const stop = () => {
    if (recognition) {
      setListening(false);
      recognition.stop();
    } else {
      console.error('Speech Recognition instance not initialized.');
    }
  };

  return { transcript, listening, start, stop };
};

export default useSpeechRecognition;
