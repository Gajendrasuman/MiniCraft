"use client"
import React, { useState, useEffect, useRef} from "react"
import { SiXiaomi } from "react-icons/si";
import { FaPowerOff } from "react-icons/fa"
import { IoArrowBackCircleSharp } from "react-icons/io5";
import { FaDotCircle } from "react-icons/fa";
import { SiPrimevideo } from "react-icons/si";

interface Channels{
    channel?: number;
    name?: string;
    show?: string;
    video: string;
}


const allChannels: Channels[] = [
    {
        channel: 100,
        name: "Home",
        show: "Naaptol",
        video: "/resources/mi_tv/show/home.mp4"
    },
    {
        channel: 527,
        name: "Hungama",
        show: "Shinchan",
        video: "/resources/mi_tv/show/shinchan.mp4"
    },
    {
        channel: 529,
        name: "Disney",
        show: "Doraemon",
        video: "/resources/mi_tv/show/doraemon.mp4"
    },
    {
        channel: 532,
        name: "Cartoon Network",
        show: "Ben 10 Alien Force",
        video: "/resources/mi_tv/show/ben 10.mp4"
    },
    {
        channel: 535,
        name: "Sony Yay!",
        show: "Naruto",
        video: "/resources/mi_tv/show/naruto.mp4"
    },
    {
        channel: 0,
        name: "",
        show: "",
        video: "/resources/mi_tv/turn_on.mp4"
    }
]


export default function MiTv(): React.ReactNode {
    
    const [mn, setMn] = useState<number>(0);
    const [hr, setHr] = useState<number>(0);
    const [volume, setVolume] = useState<number>(50);
    const [power, setPower] = useState<boolean>(false);
    const [signal, setSignal] = useState<boolean>(false);
    const [tvOn, setTvOn] = useState<boolean>(false);
    const [tvChannel, setTvChannel] = useState<number>(5);
    const [started, setStarted] = useState<boolean>(false);
    const [special, setSpecial] = useState<string>("");
    // const [status, setStatus] = useState<boolean>(false)

    const videoRef = useRef<HTMLVideoElement>(null);

    useEffect(() => {
        const intv = setInterval(() => {
            const now = new Date();
            const hours = now.getHours();
            const minutes = now.getMinutes();
            setHr(hours);
            setMn(minutes);
        }, 1000);

        return () => clearInterval(intv);
    }, [tvOn]);
    
    useEffect(() => {
        if (power) {
            setSignal(true)
            const t1 = setTimeout(() => { setSignal(false) }, 1500)
            const t2 = setTimeout(() => { setSignal(true) }, 2000)
            const t3 = setTimeout(() => { setSignal(false) }, 3000)
            const t4 = setTimeout(() => { setSignal(true) }, 3500)
            const t5 = setTimeout(() => {
                setTvOn(true);
                setTimeout(() => {
                    setStarted(true)
                    setTvChannel(0);
                }, 12000)
            }, 3600)
            return () => {
                clearTimeout(t1);
                clearTimeout(t2);
                clearTimeout(t3);
                clearTimeout(t4);
                clearTimeout(t5);
            }
        }
        else {
            if (started) {
                setTvChannel(6)
                setSpecial("")
                setTvOn(false);
                setSignal(false)
            }
        }
    }, [power]);

    useEffect(() => {
        // const st = document.querySelector(".status");
        // if (started && st) {
        //     st.classList.remove("bottom-[-10%]");
        //     setTimeout(() => { st.classList.add("bottom-[10.6%]", "hidden") }, 10)
        //     const t1 = setTimeout(() => { st.classList.add("bottom-[-10%]", "hidden") }, 3000);
        //     videoRef.current?.load();
        //     videoRef.current?.play();
            
        //     return () => clearTimeout(t1)
        // }
        // else {
        // }
        videoRef.current?.load();
        videoRef.current?.play();

    }, [tvChannel])

    useEffect(() => {

        if (started) {
            const v = document.querySelector(".volume");
            v?.classList.remove("hidden");
            if (videoRef.current) {
                const vol = (volume / 100) * 1
                videoRef.current.volume =  vol > 1.0 ? 1.0 : vol < 0.0 ? 0.0 : vol
            }
            const t1 = setTimeout(() => {
              v?.classList.add("hidden")  
            }, 3000)
            return () => clearTimeout(t1);
            
        }
    }, [volume])

    

    return (
        <main className="bg-[#222] text-text w-screen h-screen">
            <div className="container">
                <div className="tv relative w-fit top-16 z-20 left-1/2 -translate-x-1/2">
                    <div className="border-4 z-10 relative border-zinc-700 rounded-sm w-[26rem] bg-black aspect-video">
                        <div className="w-full h-[89.4%] ">
                            {tvOn ? 
                                <>
                                    {tvChannel < 6 ? 
                                        <video ref={videoRef} id={"turn-on"} className="h-full w-full object-cover" loop onCanPlay={(e: React.SyntheticEvent<HTMLVideoElement>) => { e.currentTarget.play() }}>
                                        <source src={allChannels[tvChannel]?.video}  type="video/mp4" />
                                        Your browser does not support the video tag.
                                        </video>
                                        : ""
                                    }
                                    
                                    <div className="status trans-bottom hidden w-full z-[0] px-2 h-[15%] bottom-[-10%] absolute bg-[#07f7]">
                                        <h2 className="h2 text-xs font-semibold">{allChannels[tvChannel]?.channel}&nbsp;&nbsp; {allChannels[tvChannel]?.name}</h2>
                                        <h1 className="absolute left-1/2 -translate-x-1/2 -top-1 text-sm font-semibold">{allChannels[tvChannel]?.show}</h1>
                                        <div className={`loadHungama load h-2 w-1/2 mx-auto bg-blue-200 my-1`}></div>
                                        <h3 className="text-white absolute right-4 top-0 font-bold text-sm">{hr} : {mn}</h3>
                                    </div>

                                    <div className="volume hidden absolute w-4 h-1/3 bg-blue-100 top-1/4 rounded-full right-2">
                                        <div className="w-full bg-blue-500 bottom-0 absolute rounded-full" style={{height: volume + "%"}}></div>
                                    </div>

                                    {special ? 
                                        <iframe src={special} className="absolute w-[100%] h-[89.4%] left-[0px] top-[0px]"></iframe>
                                     : ""}
                                </>
                                : ""
                            }
                        </div>
                        <div className="pannel z-[10] flex justify-center items-center w-full h-6 bg-[#111] bottom-0 absolute">
                            <SiXiaomi />
                        </div>
                        <div className={`${signal ? "IR" : ""} absolute -bottom-3 left-1/2 -translate-x-1/2 w-10 h-3 bg-[#3A3A3F] flex justify-center items-center`}><div className={`h-2 rounded-full aspect-square ${signal ? "bg-[#0ff]" : "bg-zinc-800"}`}></div></div>
                    </div>
                    <div className="stand z-[1] absolute left-14 bottom-2"><div className="h-8 w-2 rotate-45 absolute bg-zinc-900 rounded-full"></div> <div className="h-8 w-2 -rotate-45 left-[18px] absolute bg-zinc-900 rounded-full"></div></div>
                    <div className="stand z-[1] absolute right-14 bottom-2"><div className="h-8 w-2 rotate-45 absolute bg-zinc-900 rounded-full"></div> <div className="h-8 w-2 -rotate-45 left-[18px] absolute bg-zinc-900 rounded-full"></div></div>
                </div>

                <div className="table relative w-fit z-10 -top-[8vh] left-1/3 -translate-x-1/2">
                    <div className="w-[28rem] z-10 absolute left-0 top-0 aspect-video"></div>
                    <div className="leg1 absolute bg-[#786d62] w-2 h-[15.5rem] z-[1] -rotate-0 left-[30.4rem] top-10 "></div>
                    <div className="leg2 absolute bg-[#786d62] w-2 h-80 z-[1] -rotate-0 left-[25rem] top-20 "></div>
                    <div className="leg3 absolute bg-[#786d62] w-2 h-[15rem] z-[1] -rotate-0 left-[2rem] top-48 "></div>
                    <div className="leg4 absolute bg-[#786d62] w-2 h-[15rem] z-[1] -rotate-0 left-[8rem] top-24 "></div>

                    <div className="legsupport1 absolute w-[9.5rem] -rotate-[50deg] h-2 z-[1] bg-[#786d62] left-2 top-[22rem]"></div>
                    <div className="legsupport2 absolute w-[9.5rem] -rotate-[55deg] h-2 z-[1] bg-[#786d62] left-[23.2rem] top-[18rem]"></div>
                </div>

                <div className="remote relative h-[80vh] w-[10vw] rounded-3xl bg-black left-[10vw] -top-[19vh]">
                    <FaPowerOff className="left-1/2 absolute cursor-pointer -translate-x-1/2 top-[10%] bg-red-500 rounded-full p-1" onClick={() => setPower(!power)} size={25} />

                    <div className="googleAssistantButton cursor-pointer relative w-7 left-1/2 top-[17%] -translate-x-1/2 aspect-square rounded-full bg-white">
                        <div className="blue left-[10%] top-[10%] absolute w-[40%] aspect-square rounded-full bg-[#3E82F7]"></div>
                        <div className="red left-[50%] top-[40%] absolute w-[23%] aspect-square rounded-full bg-[#ED412D]"></div>
                        <div className="red left-[30%] top-[63%] absolute w-[33%] aspect-square rounded-full bg-[#FDBD00]"></div>
                        <div className="red left-[75%] top-[25%] absolute w-[15%] aspect-square rounded-full bg-[#2DA94F]"></div>
                    </div>

                    <div className="arrowButtons cursor-pointer overflow-hidden relative aspect-square rounded-full w-24 left-1/2 -translate-x-1/2 top-[23%] bg-zinc-800">
                        <div className=" cursor-pointer topkey key absolute aspect-square w-12 bg-zinc-900 rotate-45 left-1/2 -translate-x-1/2 -top-1/2 translate-y-[80%]"></div>
                        <div className=" cursor-pointer bottomkey key absolute aspect-square w-12 bg-zinc-900 rotate-45 left-1/2 -translate-x-1/2 top-1/2 translate-y-[20%]"></div>
                        <div onClick={() => { setTvChannel(tvChannel - 1 < 0 ? 4 : tvChannel - 1); setSpecial("")}} className=" cursor-pointer leftkey key absolute aspect-square w-12 bg-zinc-900 rotate-45 top-1/2 -translate-y-1/2 -left-1/2 translate-x-[80%]"></div>
                        <div onClick={() => { setTvChannel(tvChannel + 1 > 4 ? 0 : tvChannel + 1); setSpecial("")}} className=" cursor-pointer rightkey key absolute aspect-square w-12 bg-zinc-900 rotate-45 top-1/2 -translate-y-1/2 left-1/2 translate-x-[20%]"></div>

                        <div className="ok cursor-pointer absolute w-1/2 aspect-square rounded-full left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 bg-zinc-800"></div>
                    </div>

                    <div className="menu relative top-[27%] flex gap-3 justify-center items-center px-2 w-full">
                        <SiXiaomi className=" cursor-pointer" onClick={() => { setSpecial("https://i.mi.com");  setTvChannel(6)}} size={25} />
                        <IoArrowBackCircleSharp onClick={() => { setTvChannel(tvChannel == 4 ? 0 : (tvChannel == 0 ? 4 : tvChannel - 1)); setSpecial("")}} className=" cursor-pointer" size={35} />
                        <FaDotCircle className=" cursor-pointer" onClick={() => { setTvChannel(0);  setSpecial("")}} size={30} />
                    </div>

                    <div className="menu relative top-[28%] flex gap-5 justify-center items-center px-2 w-full">
                        <h2 className="text-red-500 cursor-pointer font-bold text-[10px] bg-white py-1 px-2 rounded-full" onClick={() => { setSpecial("https://netflix-clone-susmita-dey.vercel.app/"); setTvChannel(6)}}>NETFLIX</h2>
                        <div className="prime-btn w-fit cursor-pointer h-fit" onClick={() => { setSpecial("https://amazon-prime-video-clone-sp.netlify.app/");  setTvChannel(6)}}>
                            <SiPrimevideo className="text-[#30566C] z-10" size={45} />
                        </div>
                    </div>

                    <div className="volumm1 cursor-pointer relative top-[30%] left-1/2 -translate-x-1/2 w-[15%] h-[15%] bg-white text-black flex flex-col justify-between items-center rounded-full">
                        <span onClick={() => setVolume(volume >= 100 ? 100 : volume + 2)} className="block h-10 w-full text-center" >+</span>
                        <span onClick={() => setVolume(volume <= 0 ? 0 : volume - 2)} className="block h-10 w-full text-3xl leading-[3rem] text-center">-</span>
                    </div>
                    <SiXiaomi className="top-[40%] text-zinc-800 relative left-1/2 -translate-x-1/2" size={25} />
                </div>
            </div>
        </main>
    )
}