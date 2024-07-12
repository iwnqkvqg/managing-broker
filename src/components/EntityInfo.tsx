import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";

import InputAdornemntClear from "@/components/InputAdornmentClear";
import { Country } from "@/data/country";

export interface Entity {
  address: string;
  city: string;
  country: Country;
  name: string;
}

interface EntityInfoProps {
  entity: Entity;
  onClear: () => void;
}

const EntityInfo = (props: EntityInfoProps) => {
  return (
    <>
      <TextField
        InputLabelProps={{ shrink: true }}
        InputProps={{
          endAdornment: <InputAdornemntClear onClick={props.onClear} />,
        }}
        fullWidth
        label="Name"
      />
      <Box>
        <Typography
          color="secondary"
          sx={{ fontFamily: "Montserrat", fontSize: "12px", lineHight: "14px" }}
        >
          Address
        </Typography>
        <Typography
          variant="body2"
          sx={{ fontFamily: "Montserrat", color: "black" }}
        >
          {props.entity.address}
        </Typography>
      </Box>
      <Box>
        <Typography
          color="secondary"
          variant="body2"
          sx={{ fontFamily: "Montserrat", fontSize: "12px", lineHight: "14px" }}
        >
          Country
        </Typography>
        <Typography
          variant="body2"
          sx={{ fontFamily: "Montserrat", color: "black" }}
        >
          {props.entity.country}
        </Typography>
      </Box>
    </>
  );
};

export default EntityInfo;
