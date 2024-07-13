import CloseIcon from "@mui/icons-material/Close";
import IconButton from "@mui/material/IconButton";
import InputAdornment from "@mui/material/InputAdornment";

interface InputAdornmentClearProps {
  onClick: () => void;
}

const InputAdornmentClear = ({ onClick }: InputAdornmentClearProps) => {
  return (
    <InputAdornment position="end">
      <IconButton
        aria-label="Remove selected entity"
        edge="end"
        onClick={onClick}
        onMouseDown={onClick}
      >
        <CloseIcon />
      </IconButton>
    </InputAdornment>
  );
};

export default InputAdornmentClear;
