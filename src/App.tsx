import { useState } from "react";

import { AnimeApp } from "./components/AnimeApp";
import { SvgRoot } from "./components/SvgRoot";

import "./App.css";

type Page = "anime" | "svg";

function App() {
  const [page, setPage] = useState<Page>("anime");

  return (
    <>
      {page === "anime" && <AnimeApp />}
      {page === "svg" && <SvgRoot />}

      <button onClick={() => setPage("anime")}>Anime</button>
      <button onClick={() => setPage("svg")}>SVG</button>
    </>
  );
}

export default App;
