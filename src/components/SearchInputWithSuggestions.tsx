import { useRef } from "react";

import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";
import Box from "@mui/material/Box";
import Menu from "@mui/material/Menu";
import Link from "@mui/material/Link";

import InputAdornmentSearch from "@/components/InputAdornmentSearch";
import { Entity } from "@/components/EntityInfo";

interface SearchInputProps {
  suggestions: Entity[];
  value?: string;
}

const SearchInputWithSuggestions = ({
  suggestions,
  value,
}: SearchInputProps) => {
  const ref = useRef<HTMLElement | null>(null);

  return (
    <Box>
      <TextField
        InputLabelProps={{ shrink: true }}
        InputProps={{ endAdornment: <InputAdornmentSearch /> }}
        fullWidth
        label="Name"
        value={value}
      />
      <Box ref={ref} sx={{ marginTop: "4px" }} />

      <Menu anchorEl={ref?.current} autoFocus={false} open={true}>
        {suggestions.map((entity, i) => (
          <MenuItem key={entity.name} divider={i === suggestions.length - 1}>
            {entity.name} - {entity.address}, {entity.city} - {entity.country}
          </MenuItem>
        ))}
        <MenuItem>
          or
          <Link
            component="button"
            color="secondary"
            sx={{
              color: "rgba(0, 0, 0, 0.87)",
              marginLeft: "0.25rem",
            }}
          >
            Add manually
          </Link>
        </MenuItem>
      </Menu>
    </Box>
  );
};

export default SearchInputWithSuggestions;
