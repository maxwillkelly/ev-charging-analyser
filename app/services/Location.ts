import * as Location from "expo-location";
import * as TaskManager from "expo-task-manager";

const WATCH_LOCATION_TASK = "watch-location-task";

export const getLocationPermissions = async (): Promise<boolean> => {
  let { status } = await Location.requestBackgroundPermissionsAsync();
  if (status === "granted") return true;
  return false;
};

export const subscribeToLocationUpdates = async (): Promise<void> => {
  const permitted = await getLocationPermissions();
  if (!permitted) {
    console.log("Permission to get current location was denied");
    return;
  }

  const opts: Location.LocationTaskOptions = {
    accuracy: Location.Accuracy.Balanced,
    timeInterval: 5000,
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

TaskManager.defineTask(WATCH_LOCATION_TASK, ({ data, error }) => {
  if (error) {
    console.log(`Error in ${WATCH_LOCATION_TASK}`, error.message);
    return;
  }
  if (data) {
    console.log(data);
  }
});