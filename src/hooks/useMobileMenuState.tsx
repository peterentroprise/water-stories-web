import { useRecoilValue, useSetRecoilState } from "recoil";
import {
  mobileMenuState,
  toggleMobileMenu,
  closeMobileMenu,
  openMobileMenu,
} from "../state";

export const useMobileMenuState = () => ({
  mobileMenuIsOpen: useRecoilValue(mobileMenuState),
  toggleMobileMenu: useSetRecoilState(toggleMobileMenu),
  closeMobileMenu: useSetRecoilState(closeMobileMenu),
  openMobileMenu: useSetRecoilState(openMobileMenu),
});
