export type Subject = 'Math' | 'Reading';

interface UserState {
  subject: Subject;
  level: string;
  step: number;
  accuracy: number;
  problemsSolved: number;
  correctAnswers: number;
  streak: number;
  lastSessions: string[];
  
  setSubject: (subject: Subject) => void;
  incrementProblems: (isCorrect: boolean) => void;
  advanceLevel: () => void;
  resetProgress: () => void;
}

import { create } from 'zustand';

export const useLearningStore = create<UserState>((set) => ({
  subject: 'Math',
  level: 'A',
  step: 1,
  accuracy: 0,
  problemsSolved: 0,
  correctAnswers: 0,
  streak: 0,
  lastSessions: [],

  setSubject: (subject) => set({ 
    subject, 
    level: 'A', 
    step: 1, 
    accuracy: 0, 
    problemsSolved: 0, 
    correctAnswers: 0, 
    streak: 0 
  }),

  incrementProblems: (isCorrect) => set((state) => {
    const total = state.problemsSolved + 1;
    const correct = isCorrect ? state.correctAnswers + 1 : state.correctAnswers;
    const newStreak = isCorrect ? state.streak + 1 : 0;
    const newAccuracy = (correct / total) * 100;
    
    return {
      problemsSolved: total,
      correctAnswers: correct,
      accuracy: newAccuracy,
      streak: newStreak
    };
  }),

  advanceLevel: () => set((state) => {
    if (state.step < 10) {
      return { step: state.step + 1 };
    } else {
      const nextLevelMap: Record<string, string> = {
        'A': 'B', 'B': 'C', 'C': 'D', 'D': 'E', 'E': 'F', 'F': 'Finish'
      };
      return { level: nextLevelMap[state.level] || state.level, step: 1 };
    }
  }),

  resetProgress: () => set({
    level: 'A',
    step: 1,
    accuracy: 0,
    problemsSolved: 0,
    correctAnswers: 0,
    streak: 0
  })
}));
