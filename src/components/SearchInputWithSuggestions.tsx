import Box from "@mui/material/Box";
import Link from "@mui/material/Link";
import MenuItem from "@mui/material/MenuItem";
import MenuList from "@mui/material/MenuList";
import Paper from "@mui/material/Paper";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import { useEffect, useRef, useState } from "react";

import InputAdornmentSearch from "@/components/InputAdornmentSearch";
import { RootState, useDispatch, useSelector } from "@/store/store";

import {
  openAddEntityDialog,
  setSelectedEntity,
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

  const searchSuggestions = useSelector(
    (state: RootState) => state.managingBroker.searchSuggestions,
  );

  return (
    <Box>
      <TextField
        InputLabelProps={{ shrink: true }}
        InputProps={{ endAdornment: <InputAdornmentSearch /> }}
        fullWidth
        label="Name"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <Box ref={menuAnchorRef} sx={{ marginTop: "4px" }}>
        {value && (
          <Paper elevation={8} sx={{ position: "absolute", width: menuWidth }}>
            <MenuList autoFocus={false}>
              {searchSuggestions.map((entity, i) => (
                <MenuItem
                  key={entity.name}
                  divider={i === searchSuggestions.length - 1}
                  onClick={() => dispatch(setSelectedEntity(entity))}
                >
                  {entity.name} - {entity.address}, {entity.city} -{" "}
                  {entity.country}
                </MenuItem>
              ))}
              <Typography variant="body2" sx={{ padding: "6px 16px" }}>
                or
                <Link
                  component="button"
                  color="secondary"
                  sx={{
                    color: "rgba(0, 0, 0, 0.87)",
                    marginLeft: "0.25rem",
                  }}
                  onClick={() => dispatch(openAddEntityDialog())}
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
