"use client";

import { useState } from "react";

import Container from "@mui/material/Container";
import { ThemeProvider } from "@mui/material";

import AddEntityDialog from "@/components/AddEntityDialog";
import ManagingBroker from "@/components/ManagingBroker";
import theme from "@/app/Theme";
import { Country } from "@/data/country";
import { Entity } from "@/components/EntityInfo";

const dummie: Entity = {
  name: "Microsoft",
  address: "13 rue Jean de la Fontaine",
  city: "Paris",
  country: Country.France,
};

export default function Home() {
  const [ entity, setEntity ] = useState<Entity | null>(dummie);
  const [ suggestions, setSuggestions ] = useState<Entity[]>([dummie]);
  const [ isDialogVisible, setIsDialogVisible ] = useState(false);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const formJson = Object.fromEntries((formData as any).entries());
    const email = formJson.email;
    console.log(email);
    setIsDialogVisible(false);
  };

  return (
    <ThemeProvider theme={theme}>
      <Container component="main">
        <ManagingBroker entity={entity} suggestions={suggestions} onClear={() => setEntity(null)} />
        <AddEntityDialog
          isDialogVisible={isDialogVisible}
          onClose={() => setIsDialogVisible(false)}
          onSubmit={handleSubmit}
        />
      </Container>
    </ThemeProvider>
  );
}
