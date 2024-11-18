"use client";
import path from "path";

export default function myImageLoader({ src, width }) {
  return `${path.join(process.env.NEXT_PUBLIC_BASEPATH, src)}?width=${width}`;
}
