import { atom } from "jotai";

export const countAtom = atom(0);

export const countryAtom = atom("Japan");

export const citiesAtom = atom(["Tokyo", "Osaka", "Kyoto"]);

export const animeAtom = atom([
  {
    title: "Ghost in the Shell",
    year: 1995,
    watched: true,
  },
  {
    title: "Neon Genesis Evangelion",
    year: 1995,
    watched: false,
  },
]);

export const progressAtom = atom((get) => {
  const anime = get(animeAtom);

  return anime.filter((anime) => anime.watched).length / anime.length;
});
