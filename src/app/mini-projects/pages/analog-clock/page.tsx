"use client"
import { useEffect, useState } from "react";

export default function AnalogClock(): React.ReactNode {
    const [hr, setHr] = useState<number>(0);
    const [mn, setMn] = useState<number>(0);
    const [sd, setSd] = useState<number>(0);

    useEffect(() => {
        const intv = setInterval(() => {
            const now = new Date();
            const hours = now.getHours();
            const minutes = now.getMinutes();
            const seconds = now.getSeconds();

            setHr(hours > 12 ? (((hours - 12) * 60) + minutes) * 0.5 : ((hours * 60) + minutes) * 0.5);
            setMn(6 * minutes);
            setSd(6 * seconds); 
        }, 1000);

        return () => clearInterval(intv); 
    }, []);
    
    return (
        <section className="bg-bg min-w-screen min-h-screen text-text flex items-center justify-center">
            <div className="w-fit h-fit rounded-full p-1 border-double border-white border-8">
                <div className="dial w-64 bg-white border-8 border-black aspect-square rounded-full relative">
                    <div className="12-6 z-[4] absolute w-1 h-full bg-bg" style={{ left: "calc(50% - 2px)" }}>
                    </div>
                    <div className="9-3 z-[4] absolute w-full h-1 bg-bg" style={{ top: "calc(50% - 2px)" }}></div>
                    
                    <div className="z-[3] 7-1 absolute w-full h-0.5 bg-bg" style={{ top: "calc(50% - 1px)", rotate: "-60deg" }}></div>
                    <div className="z-[3] 8-2 absolute w-full h-0.5 bg-bg" style={{ top: "calc(50% - 1px)", rotate: "-30deg" }}></div>
                    <div className="z-[3] 10-4 absolute w-full h-0.5 bg-bg" style={{ top: "calc(50% - 1px)", rotate: "30deg" }}></div>
                    <div className="z-[3] 11-5 absolute w-full h-0.5 bg-bg" style={{ top: "calc(50% - 1px)", rotate: "60deg" }}></div>
                    
                    <div className="z-[2] absolute w-full h-[1px] bg-bg" style={{ top: "calc(50% - 0.5px)", rotate: "6deg" }}></div>
                    <div className="z-[2] absolute w-full h-[1px] bg-bg" style={{ top: "calc(50% - 0.5px)", rotate: "12deg" }}></div>
                    <div className="z-[2] absolute w-full h-[1px] bg-bg" style={{ top: "calc(50% - 0.5px)", rotate: "18deg" }}></div>
                    <div className="z-[2] absolute w-full h-[1px] bg-bg" style={{ top: "calc(50% - 0.5px)", rotate: "24deg" }}></div>
                    <div className="z-[2] absolute w-full h-[1px] bg-bg" style={{ top: "calc(50% - 0.5px)", rotate: "36deg" }}></div>
                    <div className="z-[2] absolute w-full h-[1px] bg-bg" style={{ top: "calc(50% - 0.5px)", rotate: "42deg" }}></div>
                    <div className="z-[2] absolute w-full h-[1px] bg-bg" style={{ top: "calc(50% - 0.5px)", rotate: "48deg" }}></div>
                    <div className="z-[2] absolute w-full h-[1px] bg-bg" style={{ top: "calc(50% - 0.5px)", rotate: "54deg" }}></div>
                    <div className="z-[2] absolute w-full h-[1px] bg-bg" style={{ top: "calc(50% - 0.5px)", rotate: "66deg" }}></div>
                    <div className="z-[2] absolute w-full h-[1px] bg-bg" style={{ top: "calc(50% - 0.5px)", rotate: "72deg" }}></div>
                    <div className="z-[2] absolute w-full h-[1px] bg-bg" style={{ top: "calc(50% - 0.5px)", rotate: "78deg" }}></div>
                    <div className="z-[2] absolute w-full h-[1px] bg-bg" style={{ top: "calc(50% - 0.5px)", rotate: "84deg" }}></div>
                    <div className="z-[2] absolute w-full h-[1px] bg-bg" style={{ top: "calc(50% - 0.5px)", rotate: "96deg" }}></div>
                    <div className="z-[2] absolute w-full h-[1px] bg-bg" style={{ top: "calc(50% - 0.5px)", rotate: "102deg" }}></div>
                    <div className="z-[2] absolute w-full h-[1px] bg-bg" style={{ top: "calc(50% - 0.5px)", rotate: "108deg" }}></div>
                    <div className="z-[2] absolute w-full h-[1px] bg-bg" style={{ top: "calc(50% - 0.5px)", rotate: "114deg" }}></div>
                    <div className="z-[2] absolute w-full h-[1px] bg-bg" style={{ top: "calc(50% - 0.5px)", rotate: "126deg" }}></div>
                    <div className="z-[2] absolute w-full h-[1px] bg-bg" style={{ top: "calc(50% - 0.5px)", rotate: "132deg" }}></div>
                    <div className="z-[2] absolute w-full h-[1px] bg-bg" style={{ top: "calc(50% - 0.5px)", rotate: "138deg" }}></div>
                    <div className="z-[2] absolute w-full h-[1px] bg-bg" style={{ top: "calc(50% - 0.5px)", rotate: "144deg" }}></div>
                    <div className="z-[2] absolute w-full h-[1px] bg-bg" style={{ top: "calc(50% - 0.5px)", rotate: "156deg" }}></div>
                    <div className="z-[2] absolute w-full h-[1px] bg-bg" style={{ top: "calc(50% - 0.5px)", rotate: "162deg" }}></div>
                    <div className="z-[2] absolute w-full h-[1px] bg-bg" style={{ top: "calc(50% - 0.5px)", rotate: "168deg" }}></div>
                    <div className="z-[2] absolute w-full h-[1px] bg-bg" style={{ top: "calc(50% - 0.5px)", rotate: "174deg" }}></div>

                    <div className="absolute z-[2] w-[96%] left-[2%] top-[2%] aspect-square bg-white rounded-full"></div>
                    <div className="absolute z-[3] w-[94%] left-[3%] top-[3%] aspect-square bg-white rounded-full"></div>
                    <div className="absolute z-[4] w-[92%] left-[4%] top-[4%] aspect-square bg-white rounded-full">
                        <span className="text-black absolute " style={{left: "calc(50% - 1ch)", top: "calc(0% - 0.4ch)"}}>12</span>
                        <span className="text-black absolute " style={{left: "calc(50% - 0.5ch)", top: "calc(100% - 2.5ch)"}}>6</span>
                        <span className="text-black absolute " style={{right: "calc(0% + 0.5ch)", top: "calc(50% - 1.5ch)"}}>3</span>
                        <span className="text-black absolute " style={{ left: "calc(0% + 0.5ch)", top: "calc(50% - 1.5ch)" }}>9</span>

                        <span className="text-black absolute " style={{ right: "calc(23.5% + 0.5ch)", top: "calc(8% - 1.5ch)" }}>1</span>
                        <span className="text-black absolute " style={{ right: "calc(11% - 1ch)", top: "calc(22% - 0.4ch)" }}>2</span>
                        <span className="text-black absolute " style={{ right: "calc(23.5% + 0.2ch)", bottom: "calc(8% - 0.9ch)" }}>4</span>
                        <span className="text-black absolute " style={{ right: "calc(6% + 0.2ch)", bottom: "calc(26.5% - 1.5ch)" }}>5</span>

                        <span className="text-black absolute " style={{ left: "calc(23.5% + 0.5ch)", top: "calc(8% - 1.5ch)" }}>11</span>
                        <span className="text-black absolute " style={{ left: "calc(11% - 1ch)", top: "calc(22% - 0.4ch)" }}>10</span>
                        <span className="text-black absolute " style={{ left: "calc(23.5% + 0.2ch)", bottom: "calc(8% - 0.9ch)" }}>7</span>
                        <span className="text-black absolute " style={{ left: "calc(6% + 0.2ch)", bottom: "calc(26.5% - 1.5ch)" }}>8</span>
                        
                        <div className="center w-[12px] aspect-square bg-black rounded-full absolute" style={{left:"calc(50% - 6px)", top:"calc(50% - 6px)"}}></div>
                        <div className="hour w-1 h-[35%] absolute rounded-full bg-gradient-to-b to-[#fff0] from-[#000d]" style={{left: "calc(50% - 2px)", top: "15%", transformOrigin: "50% 100%", rotate: `${hr}deg`}}></div>
                        <div className="minute w-1 h-[45%] rounded-full absolute bg-gradient-to-b to-[#0000] from-[#000d]" style={{ left: "calc(50% - 2px)", top: "5%", rotate: `${mn}deg`, transformOrigin: "50% 100%"}}></div>
                        <div className="hour w-0.5 h-[50%] rounded-full absolute bg-gradient-to-b to-[#fff0] from-[#f00]" style={{ left: "calc(50% - 1px)", top: "0%", transformOrigin: "50% 100%", rotate: `${sd}deg` }}></div>
                    </div>

                </div>
            </div>
        </section>
    )
}