import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import MenuItem from '@mui/material/MenuItem';
import Link from "@mui/material/Link";

import { Entity } from "@/components/EntityInfo";

interface SearchSuggestionsProps {
  suggestions: Entity[];
}

const SearchSuggestions = (props: SearchSuggestionsProps) => {
  return (
    <Box sx={{ position: "relative" }}>
      <Paper elevation={8} sx={{ position: "absolute", top: "-14px", width: "100%" }} component="ul">
        {
          props.suggestions.map((suggestion, i) => (
            <MenuItem
              key={suggestion.name}
              component="li"
              divider={i === props.suggestions.length - 1}
            >
              {suggestion.name}
            </MenuItem>
          ))
        }
        <MenuItem component="li">
          or <Link component="button" sx={{ color: "rgba(0, 0, 0, 0.87)", textDecorationColor: "rgba(0, 0, 0, 0.87)", marginLeft: "1ch"}}>Add manually</Link>
        </MenuItem>
      </Paper>
    </Box>
  );
};

export default SearchSuggestions;