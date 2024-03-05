// store.ts
import { create } from 'zustand';

export type FileTab = {
    id: string;
    name: string;

};

type TabsState = {
    tabs: Set<FileTab[]>;
    addTab: (file: FileTab) => void;
    closeTab: (id: string) => void;
    currentFileId: string | null;
    setcurrentFileId: (id: string) => void;
};

export const useTabsStore = create<TabsState>((set) => ({
    tabs: new Set(), // ? initial state is an empty array of tabs
    currentFileId: null,
    addTab: (file: any) =>
        set((state) => {
            const newTabs = new Set(state.tabs);
            newTabs.add(file);
            return { tabs: newTabs };
        }),
    closeTab: (id) => set((state) => ({
        ...state,
        tabs: new Set(Array.from(state.tabs).filter((tab: any) => tab.id !== id)),
        currentFileId: state.currentFileId === id ? null : state.currentFileId,
    })),
    setcurrentFileId: (id) => set(() => ({ currentFileId: id }))

}));
