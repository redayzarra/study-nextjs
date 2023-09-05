import React from "react";
import { Metadata } from "next";

export const dynamic = "force-static";

export const metadata: Metadata = {
    title: "About Us",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium perferendis autem placeat ipsam minus, quia impedit minima ullam vitae exercitationem!",
}

export default async function About() {
  return (
    <main>
      <h1>About</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde, magnam?
      </p>
    </main>
  );
}
