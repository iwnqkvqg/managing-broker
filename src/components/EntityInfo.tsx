import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";

import InputAdornemntClear from "@/components/InputAdornmentClear";
import { RootState, useDispatch, useSelector } from "@/store/store";
import { unsetSelectedEntity } from "@/store/managingBrokerSlice";

const EntityInfo = () => {
  const dispatch = useDispatch();
  const selectedEntity = useSelector(
    (state: RootState) => state.managingBroker.selectedEntity,
  );

  return (
    <>
      <TextField
        InputLabelProps={{ shrink: true }}
        InputProps={{
          endAdornment: (
            <InputAdornemntClear
              onClick={() => dispatch(unsetSelectedEntity())}
            />
          ),
        }}
        fullWidth
        label="Name"
        value={selectedEntity?.name}
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
          {selectedEntity?.address}, {selectedEntity?.city}
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
          {selectedEntity?.country}
        </Typography>
      </Box>
    </>
  );
};

export default EntityInfo;
