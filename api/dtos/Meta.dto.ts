export type UnitSystem = "metric" | "imperial";

export type MetaDto = {
  dataAge: Date;
  requestId: string;
  unitSystem: UnitSystem;
};
