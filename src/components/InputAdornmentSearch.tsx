import InputAdornment from '@mui/material/InputAdornment';
import SearchIcon from '@mui/icons-material/Search';

const InputAdornmentSearch = () => {
  return (<InputAdornment disablePointerEvents position="end">
      <SearchIcon />
    </InputAdornment>
  );
};

export default InputAdornmentSearch;