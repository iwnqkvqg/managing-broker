import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardHeader from "@mui/material/CardHeader";

import EntityInfo from "@/components/EntityInfo";
import SearchInputWithSuggestions from "@/components/SearchInputWithSuggestions";
import { selectCurrentEntity } from "@/store/managingBrokerSlice";
import { useSelector } from "@/store/store";

const ManagingBroker = () => {
  const currentEntity = useSelector(selectCurrentEntity);

  return (
    <Card sx={{ width: "75%" }} component="article">
      <CardHeader
        component="header"
        subheader="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
        subheaderTypographyProps={{ variant: "body2" }}
        title="Managing Broker"
        titleTypographyProps={{ component: "h5", variant: "h5" }}
      ></CardHeader>

      <CardContent
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: "20px",
        }}
      >
        {currentEntity ? <EntityInfo /> : <SearchInputWithSuggestions />}
      </CardContent>
    </Card>
  );
};

export default ManagingBroker;
