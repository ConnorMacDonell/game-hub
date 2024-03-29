import { create } from "zustand";
import { SortOrder } from "../components/SortSelector";
import { Genre } from "../entities/Genre";
import { Platform } from "../entities/Platform";

export interface GameQuery {
  genreId?: number;
  platformId?: number;
  sortOrder?: SortOrder;
  searchText?: string;
}

interface GameQueryStore {
  gameQuery: GameQuery;
  setSearchText: (searchText: string) => void;
  setGenreId: (genreId: number) => void;
  setPlatformId: (platformId: number) => void;
  setSortOrder: (sortOrder: SortOrder) => void;
}

const useGameQueryStore = create<GameQueryStore>(set => ({
  gameQuery: {},
  setSearchText: (searchText) => set(() => ({gameQuery: {searchText}})),
  setGenreId: (genreId) => set((store) => ({gameQuery: {...store.gameQuery, genreId}})),
  setPlatformId: (platformId) => set((store) => ({gameQuery: {...store.gameQuery, platformId}})),
  setSortOrder: (sortOrder) => set((store) => ({gameQuery: {...store.gameQuery, sortOrder}}))
}))

export default useGameQueryStore;