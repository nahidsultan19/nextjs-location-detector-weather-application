import { getWeatherData } from "@/lib/weather_info";
import Image from "next/image";
import Card from "./Card";

const WeatherComponent = async ({ lat, lon }) => {
  const { main, description } = await getWeatherData(lat, lon);
  return (
    <Card>
      <h6 class="feature-name">Current Weather</h6>
      <div class="feature-main">
        <Image
          class="max-w-20"
          src="/icon_rain.png"
          alt="rain icon"
          width={200}
          height={200}
        />
        <h3 class="feature-title">{main}</h3>
        <span class="feature-name">{description}</span>
      </div>
    </Card>
  );
};

export default WeatherComponent;
