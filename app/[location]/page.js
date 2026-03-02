import { getResolvedLatLong } from "@/lib/location-info";
import LocationInfo from "../components/LocationInfo";
import NoLocationInfo from "../components/NoLocationInfo";

const page = async ({
  params: { location },
  searchParams: { latitude, longitude },
}) => {
  const resolved = await getResolvedLatLong(location, latitude, longitude);
  if (resolved?.lat && resolved.lon) {
    return <LocationInfo lat={resolved.lat} lon={resolved.lon} />;
  } else {
    return <NoLocationInfo location={location} />;
  }
};

export default page;
