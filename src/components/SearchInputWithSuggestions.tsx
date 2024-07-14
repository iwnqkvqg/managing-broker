import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { useEffect, useRef, useState } from "react";

import InputAdornmentSearch from "@/components/InputAdornmentSearch";
import SearchSuggestions from "@/components/SearchSuggestions";
import useDebounce from "@/hooks/useDebounce";
import useSuggestions from "@/hooks/useSuggestions";

const SearchInputWithSuggestions = () => {
  const menuAnchorRef = useRef<HTMLElement | null>(null);
  const [menuWidth, setMenuWidth] = useState(0);
  const [value, setValue] = useState("");
  const debouncedValue = useDebounce(value);
  useSuggestions(debouncedValue);

  // Set search suggestions options width
  useEffect(() => {
    if (menuAnchorRef.current) {
      const { width } = menuAnchorRef.current.getBoundingClientRect();
      setMenuWidth(width);
    }
  }, [menuAnchorRef]);

  return (
    <Box data-testid="search-input-with-suggestions">
      <TextField
        InputLabelProps={{ shrink: true }}
        InputProps={{ endAdornment: <InputAdornmentSearch /> }}
        fullWidth
        label="Name"
        onChange={(e) => setValue(e.target.value)}
        value={value}
      />
      <Box ref={menuAnchorRef} sx={{ marginTop: "4px" }}>
        {debouncedValue.trim() && <SearchSuggestions menuWidth={menuWidth} />}
      </Box>
    </Box>
  );
};

export default SearchInputWithSuggestions;
