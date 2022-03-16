import { ChargeState } from "../../api/dtos/Car.dto";
import colours from "../../styles/colours";

export type BatteryWidgetProps = {
  percentRemaining: number;
  state: ChargeState;
};

export const getPercentageString = (percentRemaining: number): string =>
  `${Math.round(percentRemaining * 100)}%`;

export const getBatteryColour = (percentRemaining: number): string => {
  if (percentRemaining > 0.3) return colours.green;
  if (percentRemaining > 0.1) return colours.warning;
  return colours.error;
};
