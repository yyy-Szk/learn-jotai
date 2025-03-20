import { AddAnime } from "./AddAnime";
import { AnimeList } from "./AnimeList";
import { ProgressTracker } from "./ProgressTracker";
export const AnimeApp = () => {
  return (
    <>
      <AnimeList />
      <AddAnime />
      <ProgressTracker />
    </>
  );
};
