import { useAtom } from "jotai";

import {
  dotsAtom,
  handleMouseDownAtom,
  handleMouseUpAtom,
  handleMouseMoveAtom,
} from "./atoms";

const SvgDots = () => {
  const [dots] = useAtom(dotsAtom);

  return (
    <g>
      {dots.map(([x, y], index) => (
        <circle cx={x} cy={y} r="2" fill="#aaa" key={index} />
      ))}
    </g>
  );
};

export const SvgRoot = () => {
  const [, handleMouseUp] = useAtom(handleMouseUpAtom);
  const [, handleMouseDown] = useAtom(handleMouseDownAtom);
  const [, handleMouseMove] = useAtom(handleMouseMoveAtom);

  console.log("coming!");

  return (
    <svg
      width="100vw"
      height="100vh"
      viewBox="0 0 100vw 100vh"
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
      onMouseMove={(e) => {
        handleMouseMove([e.clientX, e.clientY]);
      }}
    >
      <rect width="100vw" height="100vh" fill="#eee" />
      <SvgDots />
    </svg>
  );
};
