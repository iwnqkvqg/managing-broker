import Box from "@mui/material/Box";
import Link from "@mui/material/Link";
import MenuItem from "@mui/material/MenuItem";
import MenuList from "@mui/material/MenuList";
import Paper from "@mui/material/Paper";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import { useEffect, useRef, useState } from "react";

import InputAdornmentSearch from "@/components/InputAdornmentSearch";
import { useDispatch, useSelector } from "@/store/store";

import {
  openAddEntityDialog,
  selectSearchSuggestions,
  setCurrentEntity,
} from "@/store/managingBrokerSlice";

const SearchInputWithSuggestions = () => {
  const menuAnchorRef = useRef<HTMLElement | null>(null);
  const [menuWidth, setMenuWidth] = useState(0);
  const dispatch = useDispatch();
  const [value, setValue] = useState("");

  useEffect(() => {
    if (menuAnchorRef.current) {
      const { width } = menuAnchorRef.current.getBoundingClientRect();
      setMenuWidth(width);
    }
  }, [menuAnchorRef]);

  const searchSuggestions = useSelector(selectSearchSuggestions);

  return (
    <Box>
      <TextField
        InputLabelProps={{ shrink: true }}
        InputProps={{ endAdornment: <InputAdornmentSearch /> }}
        fullWidth
        label="Name"
        onChange={(e) => setValue(e.target.value)}
        value={value}
      />
      <Box ref={menuAnchorRef} sx={{ marginTop: "4px" }}>
        {value && (
          <Paper elevation={8} sx={{ position: "absolute", width: menuWidth }}>
            <MenuList autoFocus={false}>
              {searchSuggestions.map((entity, i) => (
                <MenuItem
                  divider={i === searchSuggestions.length - 1}
                  key={entity.name}
                  onClick={() => dispatch(setCurrentEntity(entity))}
                >
                  {entity.name} - {entity.address}, {entity.city} -{" "}
                  {entity.country}
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
        )}
      </Box>
    </Box>
  );
};

export default SearchInputWithSuggestions;
