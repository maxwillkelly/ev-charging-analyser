export type BatteryWidgetProps = {
  percentRemaining: number;
};

export const getPercentageString = (percentRemaining: number) =>
  `${Math.round(percentRemaining * 100)}%`;
