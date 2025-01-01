"use client"
import Link from "next/link";
import { useState } from "react";
import Navbar from "@/components/ui/global/navbar";

export default function ContactPage() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // alert("Form submitted!");
    };

    return (
        <>
        <Navbar />
        <div className="h-[76px]"></div>
        <main className="bg-gray-900 text-white min-h-screen flex flex-col items-center justify-center py-10">
            <section className="w-full max-w-4xl px-6 text-center">
                <h1 className="text-5xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-blue-500 mb-8">
                    Contact Me
                </h1>

                <p className="text-xl text-gray-300 mb-6">
                    Have a question or want to collaborate on a project? Feel free to reach out! I&apos;d love to hear from you.
                </p>

                <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="flex flex-col md:flex-row gap-4">
                        <div className="flex flex-col w-full">
                            <label htmlFor="name" className="text-lg text-gray-200">Your Name</label>
                            <input
                                type="text"
                                name="name"
                                id="name"
                                value={formData.name}
                                onChange={handleChange}
                                placeholder="John Doe"
                                className="bg-gray-800 text-white py-3 px-4 rounded-lg shadow-md border-2 border-transparent focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent"
                            />
                        </div>

                        <div className="flex flex-col w-full">
                            <label htmlFor="email" className="text-lg text-gray-200">Your Email</label>
                            <input
                                type="email"
                                name="email"
                                id="email"
                                value={formData.email}
                                onChange={handleChange}
                                placeholder="youremail@example.com"
                                className="bg-gray-800 text-white py-3 px-4 rounded-lg shadow-md border-2 border-transparent focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent"
                            />
                        </div>
                    </div>

                    <div className="flex flex-col">
                        <label htmlFor="message" className="text-lg text-gray-200">Your Message</label>
                        <textarea
                            name="message"
                            id="message"
                            value={formData.message}
                            onChange={handleChange}
                            rows={6}
                            placeholder="Write your message here..."
                            className="bg-gray-800 text-white py-3 px-4 rounded-lg shadow-md border-2 border-transparent focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent"
                        />
                    </div>

                    <div className="flex justify-center">
                        <button
                            type="submit"
                            className="bg-gradient-to-r from-pink-500 to-blue-500 px-8 py-3 rounded-full text-lg font-semibold text-white hover:bg-gradient-to-l transition-all duration-300"
                        >
                            Send Message
                        </button>
                    </div>
                </form>

                <div className="mt-10">
                    <p className="text-xl text-gray-300 mb-4">
                        Alternatively, you can reach out to me directly on:
                    </p>
                    <div className="flex justify-center gap-6">
                        <Link href="https://twitter.com/Orogamyyy">
                            <span className="text-pink-500 hover:text-pink-400 cursor-pointer text-xl">
                                Twitter
                            </span>
                        </Link>
                        <Link href="mailto:contact@orogamy.com">
                            <span className="text-blue-500 hover:text-blue-400 cursor-pointer text-xl">
                                Email
                            </span>
                        </Link>
                    </div>
                </div>
            </section>
        </main>
        </>
    );
}
