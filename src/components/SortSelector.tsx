import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";
import useGameQueryStore from "../stores/gameQueryStore";

export interface SortOrder {
  value: string;
  label: string;
}

const data = [
  { value: "", label: "Relevance" },
  { value: "name", label: "Name" },
  { value: "-metacritic", label: "Metacritic Rating" },
  { value: "-rating", label: "Player rating" },
  { value: "-added", label: "Date added" },
  { value: "-released", label: "Release Date" },
];

const SortSelector = () => {
  const selectedSortOrder = useGameQueryStore((s) => s.gameQuery.sortOrder);
  const selectSortOrder = useGameQueryStore((s) => s.setSortOrder);
  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />}>
        {selectedSortOrder?.label || "Sort by"}
      </MenuButton>
      <MenuList>
        {data.map((sortOrder) => (
          <MenuItem
            key={sortOrder.value}
            value={sortOrder.value}
            onClick={() => selectSortOrder(sortOrder)}
          >
            {sortOrder.label}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default SortSelector;
