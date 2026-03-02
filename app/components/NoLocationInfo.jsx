import Link from "next/link";
import Card from "./Card";

const NoLocationInfo = ({ location }) => {
  const { name } = location || {};
  return (
    <Card>
      <h2>No location info available for {name || location}</h2>
      <Link href="/" className="text-orange-600">
        Go back to home
      </Link>
    </Card>
  );
};

export default NoLocationInfo;
