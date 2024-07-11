import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

export interface Entity {
  address: string;
  city: string;
  country: string; //TODO enum
  name: string;
}

interface EntityInfoProps {
  entity: Entity;
}

const EntityInfo = ({entity}: EntityInfoProps) => {
  return (
    <>
      <Box>
        <Typography color="secondary" sx={{ fontFamily: "Montserrat", fontSize: "12px", lineHight: "14px" }}>
          Address
        </Typography>
        <Typography variant="body2" sx={{ fontFamily: "Montserrat", color: "black" }}>
          { entity.address }
        </Typography>
      </Box>
      <Box>
        <Typography color="secondary" variant="body2" sx={{ fontFamily: "Montserrat", fontSize: "12px", lineHight: "14px" }}>
          Country
        </Typography>
        <Typography variant="body2" sx={{ fontFamily: "Montserrat", color: "black" }}>
          { entity.country }
        </Typography>
      </Box>
    </> 
  );
};

export default EntityInfo;