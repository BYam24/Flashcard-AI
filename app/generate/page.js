"use client";

import { useRouter } from "next/router";
import { useState, useUser } from "react";

export default function Generate() {
  const { isLoaded, isSignedIn, user } = useUser();
  const [flashCards, setFlashcards] = useState([]);
  const [flipped, setFlipped] = useState([]);
  const [text, setText] = useState("");
  const [name, setName] = useState("");
  const [open, setOpen] = useState("");
  const router = useRouter();

  const handleSubmit = async () => {
    fetch("api/generate", {
      //api/generate is our openai backend
      method: "POST",
      body: text,
    })
      .then((res) => res.json())
      .then(data > setFlashcards(data));
  };

  const handleCardClick = (id) => {
    setFlipped((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
}
