const data = [
  {
    id: 1,
    name: "Singapore",
    country: "Singapore",
    latitude: 1.3521,
    longitude: 103.8198,
  },
  {
    id: 2,
    name: "Dhaka",
    country: "Bangladesh",
    latitude: 23.8103,
    longitude: 90.4125,
  },
  {
    id: 3,
    name: "Beijing",
    country: "China",
    latitude: 39.9042,
    longitude: 116.4074,
  },
  {
    id: 4,
    name: "New York",
    country: "USA",
    latitude: 40.7128,
    longitude: -74.006,
  },
  {
    id: 5,
    name: "London",
    country: "UK",
    latitude: 51.5074,
    longitude: -0.1278,
  },
  {
    id: 6,
    name: "Tokyo",
    country: "Japan",
    latitude: 35.6762,
    longitude: 139.6503,
  },
  {
    id: 7,
    name: "Sydney",
    country: "Australia",
    latitude: -33.8688,
    longitude: 151.2093,
  },
  {
    id: 8,
    name: "Toronto",
    country: "Canada",
    latitude: 43.651,
    longitude: -79.347,
  },
  {
    id: 9,
    name: "Berlin",
    country: "Germany",
    latitude: 52.52,
    longitude: 13.405,
  },
  {
    id: 10,
    name: "Dubai",
    country: "UAE",
    latitude: 25.2048,
    longitude: 55.2708,
  },
];

function getLocations() {
  return data;
}

function getLocationByName(name) {
  if (!name) return null;
  const found = data.find(
    (item) => item.name.toLowerCase() === name.toLowerCase(),
  );

  return found || {};
}

export { getLocationByName, getLocations };
