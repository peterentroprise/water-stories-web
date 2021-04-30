import { atom, selector } from "recoil";

export const mobileMenuState = atom({
  key: "isOpen",
  default: false,
});

export const toggleMobileMenu = selector({
  key: "toggle",
  set: ({ set }) => set(mobileMenuState, (currentState) => !currentState),
});

export const searchDrawerIsOpen = atom({
  key: "searchDrawerIsOpen",
  default: false,
});

export const toggleSearchDrawer = selector({
  key: "toggleSearchDrawer",
  set: ({ set }) => set(searchDrawerIsOpen, (currentState) => !currentState),
});
