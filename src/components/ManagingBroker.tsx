import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardHeader from "@mui/material/CardHeader";

import EntityInfo from "@/components/EntityInfo";
import SearchInputWithSuggestions from "@/components/SearchInputWithSuggestions";
import { Entity } from "@/components/EntityInfo";

interface ManagingBrokerProps {
  entity: Entity | null;
  suggestions: Entity[];
  onClear: () => void;
}

const ManagingBroker = (props: ManagingBrokerProps) => {
  return (
    <Card sx={{ width: "75%" }} component="article">
      <CardHeader
        component="header"
        subheader="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
        subheaderTypographyProps={{ variant: "body2" }}
        title="Managing Broker"
        titleTypographyProps={{ variant: "h5", component: "h5" }}
      ></CardHeader>

      <CardContent
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: "20px",
          position: "relative",
        }}
      >
        {props.entity ? (
          <EntityInfo entity={props.entity} onClear={props.onClear} />
        ) : (
          <SearchInputWithSuggestions suggestions={props.suggestions} />
        )}
      </CardContent>
    </Card>
  );
};

export default ManagingBroker;
