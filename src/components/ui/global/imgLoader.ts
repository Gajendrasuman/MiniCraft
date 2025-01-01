"use client"
import { ImageLoaderProps } from "next/image";

export default function imgLoader({src, width, quality}: ImageLoaderProps): string {
    return `${src}?width=${width}&quality=${quality}`;
}