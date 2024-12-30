import { useEffect, useState } from 'react';

const useSpeechRecognition = (lang: string) => {
  const [listening, setListening] = useState<boolean>(false);
  const [transcript, setTranscript] = useState<string>('');
  const [recognition, setRecognition] = useState<any>(null);

  useEffect(() => {
    const SpeechRecognition =(window as any).webkitSpeechRecognition;

    if (!SpeechRecognition) {
      console.error('Browser does not support Speech Recognition.');
      return;
    }

    const recognitionInstance = new SpeechRecognition();
    recognitionInstance.continuous = true;
    recognitionInstance.interimResults = true;
    recognitionInstance.onresult = (event: any) => {
      let interimTranscript = '';
      for (let i = event.resultIndex; i < event.results.length; i++) {
        const result = event.results[i];
          if (result.isFinal) {
              setTranscript(result[0].transcript)
        } else {
          interimTranscript += result[0].transcript;
        }
      }
    };

    recognitionInstance.onerror = (error: Event) => {
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
