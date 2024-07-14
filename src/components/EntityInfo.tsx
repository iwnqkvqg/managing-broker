import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

import { Country } from "@/data/country";
import {
  selectCurrentEntity,
  unsetCurrentEntity,
} from "@/store/managingBrokerSlice";
import { useDispatch, useSelector } from "@/store";

export interface Entity {
  name: string;
  address: string;
  city: string;
  country: Country;
}

const EntityInfo = () => {
  const dispatch = useDispatch();
  const currentEntity = useSelector(selectCurrentEntity);

  return (
    <Box
      data-testid="entity-info"
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: "20px",
      }}
    >
      <Box>
        <Typography
          color="secondary"
          sx={{ fontFamily: "Montserrat", fontSize: "12px", lineHight: "14px" }}
        >
          Name
        </Typography>
        <Typography
          sx={{ color: "black", fontFamily: "Montserrat" }}
          variant="body2"
        >
          {currentEntity?.name}
        </Typography>
      </Box>
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
      <Box>
        <Button
          color="secondary"
          onClick={() => dispatch(unsetCurrentEntity())}
          variant="outlined"
        >
          Delete
        </Button>
      </Box>
    </Box>
  );
};

export default EntityInfo;
