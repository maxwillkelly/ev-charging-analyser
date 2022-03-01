import { MetaDto } from "./Meta.dto";

export type ChargeState = "CHARGING" | "FULLY_CHARGED" | "NOT_CHARGING";

export type Car = {
  id: string;
  make: string;
  model: string;
  year: number;
  name: string;
  percentRemaining: number;
  range: number;
  isPluggedIn: boolean;
  state: ChargeState;
  meta: MetaDto;
};
