import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";

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

interface Props {
  selectedSortOrder: SortOrder | null;
  onSelectSortOrder: (sortOrder: SortOrder) => void;
}

const SortSelector = ({ selectedSortOrder, onSelectSortOrder }: Props) => {
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
            onClick={() => onSelectSortOrder(sortOrder)}
          >
            {sortOrder.label}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default SortSelector;
