import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";

import InputAdornemntClear from "@/components/InputAdornmentClear";
import { useDispatch, useSelector } from "@/store/store";
import {
  selectCurrentEntity,
  unsetCurrentEntity,
} from "@/store/managingBrokerSlice";

const EntityInfo = () => {
  const dispatch = useDispatch();
  const currentEntity = useSelector(selectCurrentEntity);

  return (
    <>
      <TextField
        InputLabelProps={{ shrink: true }}
        InputProps={{
          endAdornment: (
            <InputAdornemntClear
              onClick={() => dispatch(unsetCurrentEntity())}
            />
          ),
        }}
        fullWidth
        label="Name"
        value={currentEntity?.name}
      />
      <Box>
        <Typography
          color="secondary"
          sx={{ fontFamily: "Montserrat", fontSize: "12px", lineHight: "14px" }}
        >
          Address
        </Typography>
        <Typography
          sx={{ color: "black", fontFamily: "Montserrat" }}
          variant="body2"
        >
          {currentEntity?.address}, {currentEntity?.city}
        </Typography>
      </Box>
      <Box>
        <Typography
          color="secondary"
          sx={{ fontFamily: "Montserrat", fontSize: "12px", lineHight: "14px" }}
          variant="body2"
        >
          Country
        </Typography>
        <Typography
          sx={{ color: "black", fontFamily: "Montserrat" }}
          variant="body2"
        >
          {currentEntity?.country}
        </Typography>
      </Box>
    </>
  );
};

export default EntityInfo;
