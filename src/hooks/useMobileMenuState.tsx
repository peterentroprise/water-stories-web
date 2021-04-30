import { useRecoilValue, useSetRecoilState } from "recoil";
import { mobileMenuState, toggleMobileMenu } from "../state";

export const useMobileMenuState = () => ({
  mobileMenuIsOpen: useRecoilValue(mobileMenuState),
  toggleMobileMenu: useSetRecoilState(toggleMobileMenu),
});
