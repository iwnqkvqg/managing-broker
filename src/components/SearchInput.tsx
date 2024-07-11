import TextField from "@mui/material/TextField";

import InputAdornmentSearch from "@/components/InputAdornmentSearch";
import SearchSuggestions from "@/components/SearchSuggestions";
import { Entity } from "@/components/EntityInfo";


interface SearchInputProps {
  suggestions: Entity[];
}

const SearchInput = ({suggestions}: SearchInputProps) => {
  return (
    <>
      <TextField
        InputLabelProps={{ shrink: true }}
        InputProps={{ endAdornment: <InputAdornmentSearch /> }}
        fullWidth
        label="Name"
      />

      {
        suggestions?.length > 0 && <SearchSuggestions suggestions={suggestions} />
      }
    </>
  );
};

export default SearchInput;