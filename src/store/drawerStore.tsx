import { create } from "zustand";

type DrawerState = {
  isOpen: boolean;
  toggleDrawer: (open: boolean) => void;
};

const useDrawerStore = create<DrawerState>((set) => ({
  isOpen: false,
  toggleDrawer: (open: boolean) => set({ isOpen: open }),
}));

export default useDrawerStore;
