import NoLocationInfo from "@/app/components/NoLocationInfo";
import WindComponent from "@/app/components/WindComponent";
import { getResolvedLatLong } from "@/lib/location-info";

const WindPage = async ({
  params: { location },
  searchParams: { latitude, longitude },
}) => {
  const resolved = await getResolvedLatLong(location, latitude, longitude);
  if (resolved?.lat && resolved.lon) {
    return <WindComponent lat={resolved.lat} lon={resolved.lon} />;
  }
  return <NoLocationInfo location={location} />;
};

export default WindPage;
