import { create } from "zustand";

interface GuessListState {
  guessList: Abnormality[];
  addGuess: (guess: Abnormality) => void;
}

export const useGuessList = create<GuessListState>((set) => ({
  guessList: [],
  addGuess: (guess) =>
    set((state) => ({ guessList: [...state.guessList, guess] })),
  resetGuessList: () => set({ guessList: [] }),
}));
