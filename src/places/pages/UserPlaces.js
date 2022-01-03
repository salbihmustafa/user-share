import React, { useState, useEffect } from "react";
import PlaceList from "../components/PlaceList";
import { Guid } from "js-guid";
import unsplash from "../../api/unsplash";

const UserPlaces = () => {
  const [images, setImages] = useState([]);
  let PLACES = [{}];

  useEffect(() => {
    const fetchData = async () => {
      const response = await unsplash.get("/search/photos", {
        params: { query: "places" },
      });

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
        imageUrl: images[0].user.profile_image.medium,
        title: "My places",
        description: "This is my description",
        address: "123 Main Street",
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
