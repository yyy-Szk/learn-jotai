import { useAtomValue } from "jotai";

import { animeAtom } from "./atoms";

export const AnimeList = () => {
  const anime = useAtomValue(animeAtom);

  return (
    <ul>
      {anime.map((item) => (
        <li key={item.title}>{item.title}</li>
      ))}
    </ul>
  );
};
