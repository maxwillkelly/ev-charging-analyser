export type UnitSystem = "metric" | "imperial";

export type Meta = {
  dataAge: Date;
  requestId: string;
  unitSystem: UnitSystem;
};
