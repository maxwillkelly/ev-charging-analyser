export type BatteryCharge = {
  carId: string;
  recordedAt: string;
  range?: number;
  percentRemaining?: string;
  isPluggedIn?: string;
  state?: string;
};
