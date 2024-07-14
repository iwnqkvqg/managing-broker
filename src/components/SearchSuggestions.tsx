import MenuItem from "@mui/material/MenuItem";
import MenuList from "@mui/material/MenuList";
import Paper from "@mui/material/Paper";

import {
  selectSearchSuggestions,
  setCurrentEntity,
} from "@/store/managingBrokerSlice";
import { useDispatch, useSelector } from "@/store";

interface SearchSuggestionsProps {
  menuWidth: number;
}

const SearchSuggestions = ({ menuWidth }: SearchSuggestionsProps) => {
  const dispatch = useDispatch();
  const searchSuggestions = useSelector(selectSearchSuggestions);

  return (
    <Paper elevation={8} sx={{ position: "absolute", width: menuWidth }}>
      <MenuList autoFocus={false}>
        {searchSuggestions.map((entity) => (
          <MenuItem
            key={entity.name}
            onClick={() => dispatch(setCurrentEntity(entity))}
          >
            {entity.name} - {entity.address}, {entity.city} - {entity.country}
          </MenuItem>
        ))}
      </MenuList>
    </Paper>
  );
};

export default SearchSuggestions;
