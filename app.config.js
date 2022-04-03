// const API_TEST_URL = "http://localhost:5000";
const API_TEST_URL = "https://ev-charging-analyser-api-stag.herokuapp.com";

export default ({ config }) => {
  return {
    ...config,
    extra: {
      apiUrl: process.env.API_URL ?? API_TEST_URL,
    },
  };
};
