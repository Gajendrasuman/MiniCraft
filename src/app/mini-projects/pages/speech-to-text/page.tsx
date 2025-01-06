"use client"
import { useState, useEffect, ChangeEvent } from "react"
import { FaMicrophone, FaMicrophoneSlash } from "react-icons/fa";
import useSpeechRecognition from "./speechRecognition";
import { FaDownload } from "react-icons/fa6";

export default function SpeechToText(): React.ReactNode{
    const [mic, setMic] = useState<boolean>(false)
    const [filename, setFilename] = useState<string>("undefined")
    const [text, setText] = useState<string>("");
    const [lang, setLang] = useState<string>("en-US")
    const [small, setSmall] = useState<boolean>(false)

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

    useEffect(() => {
        setSmall(window.innerWidth < 1024)
        window.addEventListener("resize", () => {
            setSmall(window.innerWidth < 1024)
        }) 
        return () => window.removeEventListener("resize", () => {
            if (window.innerWidth < 1024) setSmall(true)
            else setSmall(false)
        })
    },[])

    const handleDownload = () => {
        const blob = new Blob([text], { type: 'text/plain;charset=utf-8' });
        const link = document.createElement('a');
        link.href = URL.createObjectURL(blob);
        link.download = filename + ".txt";
        link.click();
    };

    return (
        <main className="w-screen bg-bg text-text flex justify-center items-center" style={{ height: "calc(100vh - 76px)" }}>
            <div className="container w-[70%] max-lg:w-[90%] max-lg:py-5  h-full flex flex-col">
                <div className="navbar relative px-3 flex max-lg:flex-col max-lg:h-12 max-sm:h-20 justify-between items-center w-full h-10 rounded-t-md bg-text">
                    <div className="flex gap-5 left-0 max-lg:absolute max-lg:flex-col h-full max-lg:justify-center items-center">
                        <div className="flex max-lg:absolute left-2 top-2 gap-2">
                            <span className="aspect-square rounded-full w-3 bg-[#FB6158]"></span>
                            <span className="aspect-square rounded-full w-3 bg-[#FDBC2B]"></span>
                            <span className="aspect-square rounded-full w-3 bg-[#29CC41]"></span>      
                        </div>
                        <div className="name text-sm top-3 left-2 max-lg:relative">
                            <span className="text-zinc-400">Downloads/</span>
                            <input type="text" className="bg-[#fff0] text-black w-44 focus:bg-[#fff0] focus:outline-none mx-0.5" value={filename} onChange={(e: ChangeEvent<HTMLInputElement>) => setFilename(e.currentTarget.value)} />
                        </div>
                    </div>
                    <div className="flex items-center gap-3 max-lg:my-3 max-sm:-top-2 max-sm:right-2 max-sm:absolute">
                        {mic ? 
                            <FaMicrophone className="text-bg cursor-pointer" onClick={() => setMic(!mic)} size={20} />
                            :
                            <FaMicrophoneSlash className="text-bg cursor-pointer" onClick={() => setMic(!mic)} size={20} />
                        }
                        <h1 className="text-transparent bg-clip-text animate-gradient bg-[length:300%_100%] bg-gradient-to-tr from-[#FB6158] via-[#FDBC2B] to-[#29CC41]  font-semibold tracking-wider">Speech To Text</h1>

                    </div>
                    <div className="flex h-full max-lg:absolute max-lg:right-2 max-sm:top-3 gap-5 items-center">
                        <div className="lang">
                            <select className="bg-bg px-3 max-lg:w-16 py-1 rounded cursor-pointer" onChange={(e: ChangeEvent<HTMLSelectElement>) => setLang(e.currentTarget.value)} >
                                {small ?
                                    <>
                                        <option value="en-US">En</option>
                                        <option value="hi-IN">Hi</option>
                                        <option value="ta-IN">Tm</option>
                                        <option value="te-IN">Tl</option>
                                        <option value="gu-IN">Gj</option>
                                        <option value="pa-IN">Pn</option>
                                        <option value="bn-IN">Bn</option>
                                        <option value="ja-JP">Jp</option>
                                    </>
                                    :
                                    <>
                                        <option value="en-US">English</option>
                                        <option value="hi-IN">Hindi</option>
                                        <option value="ta-IN">Tamil</option>
                                        <option value="te-IN">Telugu</option>
                                        <option value="gu-IN">Gujarati</option>
                                        <option value="pa-IN">Punjabi</option>
                                        <option value="bn-IN">Bengali</option>
                                        <option value="ja-JP">Japanese</option>
                                    </>
                                }

                            </select>
                        </div>
                        {small ? 
                            <FaDownload className="text-indigo-600 cursor-pointer" onClick={handleDownload} size={20} />
                            :
                            <div role="button" onClick={handleDownload} className="text-white bg-indigo-600 active:bg-indigo-800 cursor-pointer px-2 py-1 rounded ">Download</div>

                        }

                    </div>
                </div>
                <div className="textarea w-full h-[90%]">
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