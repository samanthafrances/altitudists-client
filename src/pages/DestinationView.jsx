import { useState, useEffect } from "react";
import axios from "axios";
import DestinationCard from "../components/DestinationCard";

const DestinationView = () => {
  const [destinations, setDestinations] = useState([]);

  const fetchDestinations = async () => {
    let response = await axios.get(
      "https://altitudists-backend-bd7306004527.herokuapp.com/"
    );
    setDestinations(response.data);
  };

  useEffect(() => {
    fetchDestinations();
  }, []);

  return (
    <div className="max-container">
      <h1>Destinations</h1>
      <div className="flex-col destinations-container">
        {destinations.map((destination) => (
          <DestinationCard
            title={destination.name}
            address={destination.address}
            website={destination.website}
            key={destination._id}
          />
        ))}
      </div>
    </div>
  );
};

export default DestinationView;