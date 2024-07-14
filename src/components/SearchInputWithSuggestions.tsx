import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";

import TextField from "@mui/material/TextField";
import { useEffect, useRef, useState } from "react";

import InputAdornmentSearch from "@/components/InputAdornmentSearch";
import SearchSuggestions from "@/components/SearchSuggestions";
import useDebounce from "@/hooks/useDebounce";
import useSuggestions from "@/hooks/useSuggestions";
import {
  selectSearchSuggestions,
  openAddEntityDialog,
} from "@/store/managingBrokerSlice";
import { useDispatch, useSelector } from "@/store";

const SearchInputWithSuggestions = () => {
  const menuAnchorRef = useRef<HTMLElement | null>(null);
  const [menuWidth, setMenuWidth] = useState(0);
  const [value, setValue] = useState("");
  const debouncedValue = useDebounce(value);
  useSuggestions(debouncedValue);
  const dispatch = useDispatch();
  const suggestions = useSelector(selectSearchSuggestions);

  // Set search suggestions options width
  useEffect(() => {
    if (menuAnchorRef.current) {
      const { width } = menuAnchorRef.current.getBoundingClientRect();
      setMenuWidth(width);
    }
  }, [menuAnchorRef]);

  return (
    <Box data-testid="search-input-with-suggestions" sx={{ display: "flex" }}>
      <Box sx={{ flexGrow: 1 }}>
        <TextField
          InputLabelProps={{ shrink: true }}
          InputProps={{ endAdornment: <InputAdornmentSearch /> }}
          fullWidth
          label="Name"
          onChange={(e) => setValue(e.target.value)}
          value={value}
        />
        <Box ref={menuAnchorRef} sx={{ marginTop: "4px" }}>
          {suggestions.length > 0 && (
            <SearchSuggestions menuWidth={menuWidth} />
          )}
        </Box>
      </Box>
      <IconButton
        aria-label="Add new legal entity"
        title="Add new legal entity"
        onClick={() => dispatch(openAddEntityDialog())}
        onMouseDown={() => dispatch(openAddEntityDialog())}
        edge="end"
        size="large"
        sx={{ width: "56px", height: "56px" }}
      >
        <AddCircleOutlineIcon />
      </IconButton>
    </Box>
  );
};

export default SearchInputWithSuggestions;
