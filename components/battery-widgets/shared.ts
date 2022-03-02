import { ChargeState } from "../../api/dtos/Car.dto";


export type BatteryWidgetProps = {
  percentRemaining: number;
  state: ChargeState;
};

export const getPercentageString = (percentRemaining: number) =>
  `${Math.round(percentRemaining * 100)}%`;
