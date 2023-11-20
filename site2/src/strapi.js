const fetch = require("node-fetch");

const apiUrl = "http://127.0.0.1:1337"; // Replace with your Strapi instance URL
const collectionName = "article-pages"; // Replace with the name of your collection
const apiKey =
  "fd424fbeb43f5f2f25ba380bbafabd7b50bd66bf607e776e587d71f7749ae53b3b7f1e09519641cc89b9076627a08acb349abe2a9aa1c352875f9fc007de54435261ac59754a1dc5cb50d600b3e11675af90731e6c7d8c53c338ab4077f88141ebf9c73d71b8270c096b20c5c110acd838394f8b2fdad57acaf41aac0234604d"; // Replace with your Strapi API key

async function getAccessToken() {
  try {
    const response = await fetch(`${apiUrl}/oauth/authorize`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${apiKey}`,
      },
    });

    if (!response.ok) {
      throw new Error(
        `Failed to obtain access token. Status: ${response.status}`
      );
    }

    const data = await response.json();
    return data.jwt;
  } catch (error) {
    console.error("Error obtaining access token:", error.message);
    throw error;
  }
}

async function fetchData() {
  try {
    const response = await fetch(`${apiUrl}/api/${collectionName}`, {
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
    });

    if (!response.ok) {
      throw new Error(`Failed to fetch data. Status: ${response.status}`);
    }

    const data = await response.json();

    // Process the fetched data
    return data;
  } catch (error) {
    console.log(error);
    return {};
  }
}

module.exports = {
  fetchData,
};

