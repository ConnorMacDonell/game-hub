import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";

const data = [
  "Relevance",
  "Date added",
  "Name",
  "Release date",
  "Popularity",
  "Average rating",
];

const SortSelector = () => {
  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />}>
        Sort By
      </MenuButton>
      <MenuList>
        {data.map((criterion) => (
          <MenuItem
            key={criterion}
            //onClick={() => onSelectPlatform(platform)}
          >
            {criterion}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default SortSelector;
