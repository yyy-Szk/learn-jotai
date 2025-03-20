import { useCallback } from "react";
import { useAtom } from "jotai";

import {
  dotsAtom,
  handleMouseDownAtom,
  handleMouseUpAtom,
  handleMouseMoveAtom,
  drawingAtom,
  Point,
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
  // ===  Write only を使わなかったケース ===
  //
  // このように記述すると、 drawing の値が変化するたびに SvgRoot コンポーネントが再描画されてしまい、パフォーマンスが悪化する
  //
  // const [drawing] = useAtom(drawingAtom);
  // const [, setDots] = useAtom(dotsAtom);
  //
  // const handleMouseMove = useCallback(
  //   (update: Point) => {
  //     if (drawing) {
  //       setDots((prev) => [...prev, update]);
  //     }
  //   },
  //   [drawing, setDots]
  // );
  // ======

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
