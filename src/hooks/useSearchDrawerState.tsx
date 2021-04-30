import { useRecoilValue, useSetRecoilState } from "recoil";
import { searchDrawerIsOpen, toggleSearchDrawer } from "../state";

export const useSearchDrawerState = () => ({
  searchDrawerIsOpen: useRecoilValue(searchDrawerIsOpen),
  toggleSearchDrawer: useSetRecoilState(toggleSearchDrawer),
});
