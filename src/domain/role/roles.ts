import { Demon, Etranger, Sbire, Villageois, Voyageur } from "./role";

const data = require("../../../static/api/roles.json");

export const Roles = {
  VILLAGEOIS: { ...data.VILLAGEOIS },
  ETRANGER: { ...data.ETRANGER },
  SBIRE: { ...data.SBIRE },
  DEMON: { ...data.DEMON },
  VOYAGEUR: { ...data.VOYAGEUR },
};

Object.keys(Roles.VILLAGEOIS).map(
  (key) => (Roles.VILLAGEOIS[key] = Villageois.new(Roles.VILLAGEOIS[key]))
);
Object.keys(Roles.ETRANGER).map(
  (key) => (Roles.ETRANGER[key] = Etranger.new(Roles.ETRANGER[key]))
);
Object.keys(Roles.SBIRE).map(
  (key) => (Roles.SBIRE[key] = Sbire.new(Roles.SBIRE[key]))
);
Object.keys(Roles.DEMON).map(
  (key) => (Roles.DEMON[key] = Demon.new(Roles.DEMON[key]))
);
Object.keys(Roles.VOYAGEUR).map(
  (key) => (Roles.VOYAGEUR[key] = Voyageur.new(Roles.VOYAGEUR[key]))
);
