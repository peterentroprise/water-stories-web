import { atom, selector } from "recoil";

export const mobileMenuState = atom({
  key: "mobileMenuState",
  default: false,
});

export const toggleMobileMenu = selector({
  key: "toggleMobileMenu",
  set: ({ set }) => set(mobileMenuState, (currentState) => !currentState),
});

export const closeMobileMenu = selector({
  key: "closeMobileMenu",
  set: ({ set }) => set(mobileMenuState, (currentState) => false),
});

export const openMobileMenu = selector({
  key: "openMobileMenu",
  set: ({ set }) => set(mobileMenuState, (currentState) => true),
});

export const searchDrawerIsOpen = atom({
  key: "searchDrawerIsOpen",
  default: false,
});

export const toggleSearchDrawer = selector({
  key: "toggleSearchDrawer",
  set: ({ set }) => set(searchDrawerIsOpen, (currentState) => !currentState),
});
