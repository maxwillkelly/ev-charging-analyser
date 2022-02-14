export type CarActionDto = {
  smartCarAccessToken: string;
};

export type UnitSystem = "metric" | "imperial";

export type Meta = {
  dataAge: Date;
  requestId: string;
  unitSystem: UnitSystem;
};

export type CarActionResponse = {
  status: string;
  meta: Meta;
};
