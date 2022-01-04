import React, { useState, useEffect } from "react";
import PlaceList from "../components/PlaceList";
import { Guid } from "js-guid";
import unsplash from "../../api/unsplash";

const UserPlaces = () => {
  const [images, setImages] = useState([]);
  let PLACES = [];

  useEffect(() => {
    const fetchData = async () => {
      const response = await unsplash.get("/search/photos", {
        params: { query: "places" },
      });
      console.log(response.data.results);
      setImages(response.data.results);
      //images[0].user.profile_image.small
    };

    fetchData();
  }, []);

  if(images.length === 0){
    return <div className="center">Loading...</div>;
  }else{
    PLACES = [
      {
        id: Guid.newGuid().toString(),
        imageUrl: images[0].urls.regular,
        title: "Empire State Building",
        description: "One of the most famous sky scrapers in the world!",
        address: "20 W 34th St, New York, NY 1001",
        creatorId: "u1",
        coordinates: {
            lat: 40.7484405,
            lng: -73.9878531
        }
      },
      {
        id: Guid.newGuid().toString(),
        imageUrl: images[1].urls.regular,
        title: "Empire State Building",
        description: "One of the most famous sky scrapers in the world!",
        address: "20 W 34th St, New York, NY 1001",
        creatorId: "u2",
        coordinates: {
            lat: 40.7484405,
            lng: -73.9878531
        }
      }
    ];
  }

  return <PlaceList items={PLACES} />;
};

export default UserPlaces;
