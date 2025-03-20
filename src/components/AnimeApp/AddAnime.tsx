import { ComponentProps } from "react";
import { useSetAtom } from "jotai";

import { animeAtom } from "./atoms";

export const AddAnime = () => {
  const setAnime = useSetAtom(animeAtom);

  const handleClick: ComponentProps<"button">["onClick"] = () => {
    setAnime((anime) => [
      ...anime,
      {
        title: "Cowboy Bebop",
        year: 1998,
        watched: false,
      },
    ]);
  };

  return <button onClick={handleClick}>Add Cowboy Bebup</button>;
};
