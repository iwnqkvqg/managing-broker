import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardHeader from '@mui/material/CardHeader';
import TextField from "@mui/material/TextField";

import EntityInfo from "@/components/EntityInfo";
import InputAdornemntClear from "@/components/InputAdornmentClear";
import InputAdornmentSearch from "@/components/InputAdornmentSearch";
import SearchSuggestions from "@/components/SearchSuggestions";

import { Entity } from "@/components/EntityInfo";

interface ManagingBrokerProps {
  entity: Entity | null;
  suggestions: Entity[];
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
        
      <CardContent sx={{ display: "flex", flexDirection: "column", gap: "20px", position: "relative" }}>
        <TextField
          InputLabelProps={{ shrink: true }}
          InputProps={{ endAdornment: <InputAdornmentSearch /> }}
          fullWidth
          label="Name"
        />

        {
          props.suggestions?.length > 0 &&
            <SearchSuggestions suggestions={props.suggestions} />
        }

        {
          props.entity && <EntityInfo entity={props.entity} />
        }
      </CardContent>
    </Card>
  );
};

export default ManagingBroker;