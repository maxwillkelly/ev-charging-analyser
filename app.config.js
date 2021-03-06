import "dotenv/config";

export default ({ config }) => {
  return {
    ...config,
    android: {
      ...config.android,
      config: {
        googleMaps: {
          apiKey: process.env.GOOGLE_MAPS_API_KEY,
        },
      },
    },
    extra: {
      apiUrl: process.env.API_URL,
    },
  };
};
