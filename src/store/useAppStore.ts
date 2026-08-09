'use client';

import { create } from 'zustand';

interface AppState {
  sidebarOpen: boolean;
  setSidebarOpen: (open: boolean) => void;
  toggleSidebar: () => void;
  currentView: 'dashboard' | 'goals' | 'projects' | 'tasks' | 'calendar' | 'reviews';
  setCurrentView: (view: AppState['currentView']) => void;
}

export const useAppStore = create<AppState>((set) => ({
  sidebarOpen: true,
  setSidebarOpen: (open) => set({ sidebarOpen: open }),
  toggleSidebar: () => set((state) => ({ sidebarOpen: !state.sidebarOpen })),
  currentView: 'dashboard',
  setCurrentView: (view) => set({ currentView: view }),
}));
