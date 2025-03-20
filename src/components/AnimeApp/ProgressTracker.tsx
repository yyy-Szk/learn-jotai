import { useAtomValue } from "jotai";

import { progressAtom } from "./atoms";

export const ProgressTracker = () => {
  const progress = useAtomValue(progressAtom);

  return <div>{Math.trunc(progress * 100)}% watched</div>;
};
