import * as Location from "expo-location";
import * as TaskManager from "expo-task-manager";
import { recordLocationAsync } from "../api/locationApi";
import { RecordLocationDto, UserLocations } from "../api/dtos/Location.dto";
import { useLocationStore } from "../stores/useLocationStore";

const WATCH_LOCATION_TASK = "watch-location-task";

export const getLocationPermissions = async (): Promise<boolean> => {
  const { status: foregroundStatus } =
    await Location.requestForegroundPermissionsAsync();
  const { status: backgroundStatus } =
    await Location.requestBackgroundPermissionsAsync();
  if (foregroundStatus === "granted" && backgroundStatus === "granted")
    return true;
  return false;
};

export const subscribeToLocationUpdatesAsync = async (): Promise<boolean> => {
  const permitted = await getLocationPermissions();
  if (!permitted) return false;

  const opts: Location.LocationTaskOptions = {
    accuracy: Location.Accuracy.Balanced,
    timeInterval: 10000,
    foregroundService: {
      notificationTitle: "Getting location updates...",
      notificationBody:
        "Regularly requests current location while app is running.",
    },
    pausesUpdatesAutomatically: false,
    distanceInterval: 1,
  };

  await Location.startLocationUpdatesAsync(WATCH_LOCATION_TASK, opts);
  return true;
};

export const registerLocationTask = (userId?: string) => {
  if (!userId) return;
  TaskManager.defineTask(WATCH_LOCATION_TASK, async ({ data, error }) => {
    if (error) {
      console.error(`Error in ${WATCH_LOCATION_TASK}`, error);
      return;
    }
    if (data) {
      const locationData = data as UserLocations;
      const location = locationData.locations[0];
      useLocationStore.setState({ lastLocation: location });
      const dto: RecordLocationDto = { userId, ...location };
      await recordLocationAsync(dto);
    }
  });
};

export const unregisterLocationTaskAsync = async () =>
  await TaskManager.unregisterTaskAsync(WATCH_LOCATION_TASK);
