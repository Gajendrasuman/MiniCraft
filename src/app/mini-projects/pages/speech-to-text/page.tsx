"use client"
import { useState, useEffect, ChangeEvent } from "react"
import { FaMicrophone, FaMicrophoneSlash } from "react-icons/fa";
import useSpeechRecognition from "./speechRecognition";

export default function SpeechToText(): React.ReactNode{
    const [mic, setMic] = useState<boolean>(false)
    const [filename, setFilename] = useState<string>("undefined")
    const [text, setText] = useState<string>("");
    const [lang, setLang] = useState<string>("en-US")

    const { start, stop, transcript } = useSpeechRecognition(lang);

    useEffect(() => {
        setText(text + transcript + "")
    }, [transcript])

    useEffect(() => {
        setText(text)
    }, [text])

    useEffect(() => {
        if (mic) {
            stop()
            const t1 = setTimeout(() => start(), 1000)
            return ()=> clearTimeout(t1)
        }
    }, [lang])

    useEffect(() => {
        if (mic) {
            start()
        }
        else {
            stop()
        }

    }, [mic])

    const handleDownload = () => {
        const blob = new Blob([text], { type: 'text/plain;charset=utf-8' });
        const link = document.createElement('a');
        link.href = URL.createObjectURL(blob);
        link.download = filename + ".txt";
        link.click();
    };

    return (
        <main className="w-screen h-screen bg-bg text-text flex justify-center items-center">
            <div className="container w-[80%] h-[90vh] flex flex-col">
                <div className="navbar px-3 flex justify-between items-center w-full h-10 rounded-t-md bg-text">
                    <div className="flex gap-5 h-full items-center">
                        <div className="flex gap-2">
                            <span className="aspect-square rounded-full w-3 bg-[#FB6158]"></span>
                            <span className="aspect-square rounded-full w-3 bg-[#FDBC2B]"></span>
                            <span className="aspect-square rounded-full w-3 bg-[#29CC41]"></span>      
                        </div>
                        <div className="name">
                            <span className="text-zinc-400">Downloads/</span>
                            <input type="text" className="bg-[#fff0] text-black w-44 focus:bg-[#fff0] focus:outline-none mx-0.5" value={filename} onChange={(e: ChangeEvent<HTMLInputElement>) => setFilename(e.currentTarget.value)} />
                        </div>
                    </div>
                    <div className="flex items-center gap-3">
                        {mic ? 
                            <FaMicrophone className="text-bg cursor-pointer" onClick={() => setMic(!mic)} size={20} />
                            :
                            <FaMicrophoneSlash className="text-bg cursor-pointer" onClick={() => setMic(!mic)} size={20} />
                        }
                        <h1 className="text-transparent bg-clip-text animate-gradient bg-[length:300%_100%] bg-gradient-to-tr from-[#FB6158] via-[#FDBC2B] to-[#29CC41]  font-semibold tracking-wider">Speech To Text</h1>

                    </div>
                    <div className="flex h-full gap-5 items-center">
                        <div className="lang">
                            <select className="bg-bg px-3 py-1 rounded cursor-pointer" onChange={(e:ChangeEvent<HTMLSelectElement>) => setLang(e.currentTarget.value)} >
                                <option value="en-US">English</option>
                                <option value="hi-IN">Hindi</option>
                                <option value="ta-IN">Tamil</option>
                                <option value="te-IN">Telugu</option>
                                <option value="gu-IN">Gujarati</option>
                                <option value="pa-IN">Punjabi</option>
                                <option value="bn-IN">Bengali</option>
                                <option value="ja-JP">Japanese</option>

                            </select>
                        </div>
                        <div role="button" onClick={handleDownload} className="text-white bg-indigo-600 active:bg-indigo-800 cursor-pointer px-2 py-1 rounded ">Download</div>

                    </div>
                </div>
                <div className="textarea w-full h-full">
                    <textarea
                        value={text}
                        placeholder="Say something to write"
                        onChange={(e: ChangeEvent<HTMLTextAreaElement>) => { setText(e.currentTarget.value);}}
                        className="text-bg bg-gray-100 w-full h-full focus:outline-none px-2 py-1 rounded-b-md border-text border-2"
                    >
                        
                    </textarea>
                </div>
            </div>
        </main>
    )
    
}