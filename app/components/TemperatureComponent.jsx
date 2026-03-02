import { getTemperatureData } from "@/lib/weather_info";
import Image from "next/image";
import Card from "./Card";

const TemperatureComponent = async ({ lat, lon }) => {
  const { temp, feels_like } = await getTemperatureData(lat, lon);
  return (
    <Card>
      <h6 className="feature-name">Current Temperature</h6>
      <div className="feature-main">
        <Image
          className="max-w-20"
          src="/icon_tempareture.png"
          alt="rain icon"
          width={18}
          height={18}
        />
        <h3 className="feature-title">{temp.toFixed(0)}°C</h3>

        <span className="feature-name">
          Feels Like {feels_like.toFixed(0)}°C
        </span>
      </div>
    </Card>
  );
};

export default TemperatureComponent;
