"use client"

import {  SyntheticEvent, useEffect, useState } from "react";

interface Notes{
    id: number;
    title: string;
    content: string;
    left: number;
    top: number;
    pin: string;
    note: string;
}

const colors = {
    pin: [
        "#FF5733", "#FFC300", "#DAF7A6", "#FF33FF", "#33FFF5",
        "#FF5733", "#900C3F", "#581845", "#3498DB", "#2ECC71"
    ],
    note: [
        "#FEF5E7", "#D6EAF8", "#F5EEF8", "#E8F8F5", "#FDEBD0",
        "#F9EBEA", "#FDFEFE", "#EBDEF0", "#FADBD8", "#D5F5E3"
    ]
};


export default function StickyNotes(): React.ReactNode{
    const [notes, setNotes] = useState<Storage[]>();
    const [allNotes, setAllNotes] = useState<Notes[]>([]);
    const [noteLength, setNoteLength] = useState<number>(0)
    const [winSize, setWinSize] = useState<number>(1024)

    const getRandomColor = (c:string) => {
        const colorArray = colors[c as "pin" | "note"];
        return colorArray[Math.floor(Math.random() * colorArray.length)];
    };
    
    useEffect(() => {
        let nt: Notes = {
            id: 0,
            title: "",
            content: "",
            left: 50,
            top: 50,
            pin: "",
            note: ""
        }
        const z = [];
        for (let i = 0; i < noteLength; i++){
            const item = JSON.parse(localStorage.getItem("MiniCraft.Note." + i) || "{}")
            nt.id = parseInt(item.id);
            nt.content = item.content;
            nt.title = item.title;
            nt.top = parseInt(item.top);
            nt.left = parseInt(item.left);
            nt.pin = item.pin;
            nt.note = item.note
            z.push(nt)
            nt = {
                id: 0,
                title: "",
                content: "",
                left: 50,
                top: 50,
                pin: "",
                note: ""
            }
        }
        setAllNotes([...z]);
    }, [notes])

    const handleClick = (e: SyntheticEvent<HTMLDivElement>) => {        
        const pinColor = getRandomColor("pin");
        const noteColor = getRandomColor("note");

        let size = 1;
        if (!localStorage.getItem("MiniCraft.Note.length")) {
            localStorage.setItem("MiniCraft.Note.length", size.toString())
        }
        else {
            size = parseInt(localStorage.getItem("MiniCraft.Note.length") || "0") + 1
            localStorage.setItem("MiniCraft.Note.length", size.toString())
        }
        const id = size - 1;

        localStorage.setItem("MiniCraft.Note." + id.toString(), JSON.stringify({
            id,
            title: "Title",
            content: "Add Your Note Here...",
            left: Math.floor(Math.random() * 101),
            top: Math.floor(Math.random() * 101),
            pin: pinColor,
            note: noteColor
        }));
        setNoteLength(size);
        setNotes([localStorage])
    }

    const handleKeyPress = (e: globalThis.KeyboardEvent) => {
        if (e.ctrlKey && e.key === "m") {
            e.preventDefault();
            const pinColor = getRandomColor("pin");
            const noteColor = getRandomColor("note");
            
            let size = 1;
            if (!localStorage.getItem("MiniCraft.Note.length")) {
                localStorage.setItem("MiniCraft.Note.length", size.toString())
            }
            else {
                size = parseInt(localStorage.getItem("MiniCraft.Note.length") || "0") + 1
                localStorage.setItem("MiniCraft.Note.length", size.toString())
            }
            const id = size - 1;

            localStorage.setItem("MiniCraft.Note." + id.toString(), JSON.stringify({
                id,
                title: "Title",
                content: "Add Your Note Here...",
                left: Math.floor(Math.random() * 101),
                top: Math.floor(Math.random() * 101),
                pin: pinColor,
                note: noteColor
            }));
            setNoteLength(size);
            setNotes([localStorage])
        }
    };

    useEffect(() => {
        window.addEventListener("keydown", handleKeyPress)
        setWinSize(window.innerWidth)
        window.addEventListener("resize", () => {
            setWinSize(window.innerWidth)
        })
        setNotes([localStorage]);
        const len = parseInt(localStorage.getItem("MiniCraft.Note.length") || "0");
        setNoteLength(len)
    }, []);

    const handleContent = (e: React.SyntheticEvent<HTMLParagraphElement | HTMLHeadingElement>) => {
        const element = e.currentTarget;
        const id = parseInt(element.closest(".note")?.getAttribute("data-id") || "0");
        const noteType = element.getAttribute("data-type") || "";
        const newValue = element.textContent || "";
        const selection = window.getSelection();
        const range = selection?.getRangeAt(0);
        const cursorOffset = range?.startOffset;

        const updatedNotes = [...allNotes];
        if (noteType === "title") {
            updatedNotes[id].title = newValue;
        }
        else if (noteType === "content") {
            updatedNotes[id].content = newValue;
        }

        localStorage.setItem(`MiniCraft.Note.${id}`, JSON.stringify(updatedNotes[id]));
        setAllNotes(updatedNotes);

        setTimeout(() => {
            const restoredElement = document.querySelector(`[data-id="${id}"] [data-type="${noteType}"]`);
            if (restoredElement && restoredElement.firstChild && cursorOffset != null) {
                const textNode = restoredElement.firstChild;
                const newRange = document.createRange();
                newRange.setStart(textNode, Math.min(cursorOffset, textNode.textContent?.length || 0));
                newRange.collapse(true);
                selection?.removeAllRanges();
                selection?.addRange(newRange);
            }
        }, 0);
    };

    const handleRemoveNote = (id: number) => {
        const updatedNotes = allNotes.filter(note => note.id !== id);

        localStorage.removeItem(`MiniCraft.Note.${id}`);

        updatedNotes.forEach((note, index) => {
            const updatedNote = {
                ...note,
                id: index
            };

            localStorage.setItem(`MiniCraft.Note.${index}`, JSON.stringify(updatedNote));
        });

        localStorage.setItem("MiniCraft.Note.length", updatedNotes.length.toString());

        setAllNotes(updatedNotes);
    };

    const handleDragStart = (e: React.MouseEvent<HTMLDivElement>) => {
        const el = e.currentTarget as HTMLDivElement;
        const id = parseInt(el.getAttribute("data-id") || "0");
        const movingNote = JSON.parse(localStorage.getItem("MiniCraft.Note." + id) || "{}");

        const nt: Notes = {
            id,
            title: movingNote.title,
            content: movingNote.content,
            left: movingNote.left,
            top: movingNote.top,
            pin: movingNote.pin,
            note: movingNote.note
        };

        let defaultX = e.clientX;
        let defaultY = e.clientY;

        const onMouseMove = (moveEvent: MouseEvent) => {
            const initialX = moveEvent.clientX - defaultX;
            const initialY = moveEvent.clientY - defaultY;

            nt.left += initialX;
            nt.top += initialY;

            defaultX = moveEvent.clientX;
            defaultY = moveEvent.clientY;

            el.style.left = `${nt.left}px`;
            el.style.top = `${nt.top}px`;
        };

        const onMouseUp = () => {
            localStorage.setItem(`MiniCraft.Note.${id}`, JSON.stringify(nt));
            window.removeEventListener("mousemove", onMouseMove);
            window.removeEventListener("mouseup", onMouseUp);
        };

        window.addEventListener("mousemove", onMouseMove);
        window.addEventListener("mouseup", onMouseUp);
    };

    return (
        <main className="bg-bg w-screen text-bg" style={{ height: "calc(100vh - 76px)" }}>
            <div className="container h-full min-w-screen overflow-scroll scrollbar-none relative">
                {winSize > 1024 ||
                    <div className="text-text fixed z-[900] left-2 top-24 bg-zinc-600 px-2 py-1 rounded-md font-semibold cursor-pointer" onClick={(e: SyntheticEvent<HTMLDivElement>) => handleClick(e)}>Add Note</div>}
                {allNotes.length > 0 ?
                    allNotes.map(({ id, content, title, top, left, pin, note }, index) => (
                    <div key={index} className={`note w-fit h-fit`} style={{ top: top + "px", left: left + "px", position: "absolute" }} data-id={id}
                        onMouseDown={handleDragStart}
                    >
                        <div className="rounded size-64 relative flex px-1 items-center flex-col" style={{backgroundColor: note}}>
                            <div className="pin h-12 w-9 relative cursor-pointer" onClick={() => handleRemoveNote(id)}>
                                <div style={{backgroundColor: pin}} className={`lower overflow-hidden size-9 absolute rounded-full`}></div>
                                <div style={{backgroundColor: pin}} className={`pin-stick w-6 left-[6px]  -top-1 h-7 absolute`}></div>
                                <div style={{backgroundColor: pin}} className={`pin-head size-6 rounded-full absolute -top-3 left-1.5`}></div>
                            </div>
                            <div className="title">
                                <p
                                    className="max-w-full min-w-6 h-[3ch] overflow-scroll scrollbar-none px-1 text-2xl py-2 font-serif text-wrap break-all text-indigo-500 focus:outline-none cursor-pointer"
                                    contentEditable
                                    onInput={handleContent}
                                    data-type={"title"}
                                    data-id={id}
                                    suppressContentEditableWarning={true}

                                >
                                    {title}
                                </p>
                            </div>
                            <div className="content mt-2">
                                <p
                                    className="max-w-full text-ellipsis min-w-6 h-36 overflow-scroll scrollbar-none px-1 text-sm py-2 font-serif text-wrap break-all text-zinc-500 focus:outline-none cursor-pointer"
                                    contentEditable
                                    onInput={handleContent}
                                    data-type={"content"}
                                    data-id={id}
                                    suppressContentEditableWarning={true}
                                >
                                    {content}
                                </p>
                            </div>
                        </div>
                    </div>
                    
                ))
                    :
                    winSize > 1024 &&
                        <h1 className="text-text text-3xl top-1/2 absolute -translate-x-1/2 -translate-y-1/2 left-1/2 flex gap-1 text-zinc-700">Press <span className="italic rounded-full bg-zinc-800 px-2 block">Ctrl + m</span> to Make a Note</h1>
                        
            }

            </div>
        </main>
    )
}