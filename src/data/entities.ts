import { Country } from "@/data/country";
import { Entity } from "@/components/EntityInfo";

const entities: Entity[] = [
  {
    name: "Microsoft",
    address: "47 Quai d'Issy-les-Moulineaux",
    city: "Paris",
    country: Country.France,
  },
  {
    name: "RobCo Industries",
    address: "1785 Railway St. Kenora, ON P9N 0B5",
    city: "Kenora",
    country: Country.Canada,
  },
  {
    name: "RATP",
    address: "1 rue de la Légion d'Honneur",
    city: "Paris",
    country: Country.France,
  },
  {
    name: "Renault",
    address: "1 rue de la Légion d'Honneur",
    city: "Paris",
    country: Country.France,
  },
];

export { entities };
