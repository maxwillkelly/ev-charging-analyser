import * as Location from "expo-location";
import * as TaskManager from "expo-task-manager";
import { recordLocationAsync } from "../api/locationApi";

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

export const subscribeToLocationUpdates = async (): Promise<void> => {
  const permitted = await getLocationPermissions();
  if (!permitted) {
    console.log("Permission to get current location was denied");
    return;
  }

  console.log("Location access permitted");

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
};

export const registerLocationTask = (userId?: string) => {
  if (!userId) return;
  TaskManager.defineTask(WATCH_LOCATION_TASK, ({ data, error }) => {
    if (error) {
      console.log(`Error in ${WATCH_LOCATION_TASK}`, error.message);
      return;
    }
    if (data) {
      console.log(JSON.stringify(data, null, 2));
      // recordLocationAsync({ userId, ...data, recordedAt:  });
    }
  });
};

export const unregisterLocationTask = async () =>
  await TaskManager.unregisterTaskAsync(WATCH_LOCATION_TASK);
