import Link from "@mui/material/Link";
import MenuItem from "@mui/material/MenuItem";
import MenuList from "@mui/material/MenuList";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";

import {
  openAddEntityDialog,
  selectSearchSuggestions,
  setCurrentEntity,
} from "@/store/managingBrokerSlice";
import { useDispatch, useSelector } from "@/store/store";

interface SearchSuggestionsProps {
  menuWidth: number;
}

const SearchSuggestions = ({ menuWidth }: SearchSuggestionsProps) => {
  const dispatch = useDispatch();
  const searchSuggestions = useSelector(selectSearchSuggestions);

  return (
    <Paper elevation={8} sx={{ position: "absolute", width: menuWidth }}>
      <MenuList autoFocus={false}>
        {searchSuggestions.map((entity, i) => (
          <MenuItem
            divider={i === searchSuggestions.length - 1}
            key={entity.name}
            onClick={() => dispatch(setCurrentEntity(entity))}
          >
            {entity.name} - {entity.address}, {entity.city} - {entity.country}
          </MenuItem>
        ))}
        <Typography sx={{ padding: "6px 16px" }} variant="body2">
          or
          <Link
            color="secondary"
            component="button"
            onClick={() => dispatch(openAddEntityDialog())}
            sx={{
              color: "rgba(0, 0, 0, 0.87)",
              marginLeft: "0.25rem",
            }}
          >
            Add manually
          </Link>
        </Typography>
      </MenuList>
    </Paper>
  );
};

export default SearchSuggestions;
