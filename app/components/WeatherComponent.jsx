import { getWeatherData, iconUrl } from "@/lib/weather_info";
import Image from "next/image";
import Card from "./Card";

const WeatherComponent = async ({ lat, lon }) => {
  const { main, description, icon } = await getWeatherData(lat, lon);
  const iconUrlValue = iconUrl(icon);
  return (
    <Card>
      <h6 class="feature-name">Current Weather</h6>
      <div class="feature-main">
        <Image
          class="max-w-20"
          src={iconUrlValue}
          alt="weather icon"
          width={200}
          height={200}
        />
        <h3 class="feature-title">{main} </h3>
        <span class="feature-name">{description}</span>
      </div>
    </Card>
  );
};

export default WeatherComponent;
