import { Button } from "@chakra-ui/react";
import { useSearchDrawerState } from "../../hooks/useSearchDrawerState";

type SearchButtonProps = {};

export const SearchButton: React.FC<SearchButtonProps> = () => {
  const { toggleSearchDrawer } = useSearchDrawerState();
  return (
    <Button m="1rem" onClick={toggleSearchDrawer}>
      Search
    </Button>
  );
};
