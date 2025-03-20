import { atom } from "jotai";

type Point = [number, number];

export const dotsAtom = atom<Point[]>([]);

export const drawingAtom = atom(false);

export const handleMouseDownAtom = atom(null, (_get, set) => {
  set(drawingAtom, true);
});

export const handleMouseUpAtom = atom(null, (_get, set) => {
  set(drawingAtom, false);
});

export const handleMouseMoveAtom = atom(null, (get, set, update: Point) => {
  if (get(drawingAtom)) {
    set(dotsAtom, (prev) => [...prev, update]);
  }
});
