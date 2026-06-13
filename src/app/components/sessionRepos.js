"use client";

import { useEffect, useState } from "react";

export default function SessionRepos({ children }) {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    async function fetchRepos() {
      try {
        const cache = sessionStorage.getItem("githubRepos");
        if (!cache) {
          const response = await fetch("/api/github-repos");

          if (!response.ok) {
            console.log("Erro ao buscar JSON");
            return;
          }

          const data = await response.json();
          sessionStorage.setItem("githubRepos", JSON.stringify(data));
        }
      } catch (error) {
        console.log("Erro interno com o servidor");
      } finally {
        setReady(true); // marca que terminou (com cache ou sem)
      }
    }

    fetchRepos();
  }, []);

  if (!ready) {
    return null;
  }

  return children;
}
