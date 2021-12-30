import React, { useState, useEffect } from "react";
import UsersList from "../components/UsersList";
import { Guid } from "js-guid";
import unsplash from "../../api/unsplash";

const Users = () => {
  const [images, setImages] = useState([]);
  let USERS = [{}];

  useEffect(() => {
    const fetchData = async () => {
      const response = await unsplash.get("/search/photos", {
        params: { query: "person" },
      });

      setImages(response.data.results);
      //images[0].user.profile_image.small
    };

    fetchData();
  }, []);
  
  if(images.length === 0){
    return <div className="center">Loading...</div>;
  }else{
    USERS = [
      {
        id: Guid.newGuid().toString(),
        image: images[0].user.profile_image.medium,
        name: "Salbih",
        places: 3,
      },
      {
        id: Guid.newGuid().toString(),
        image: images[1].user.profile_image.medium,
        name: "Aziza",
        places: 5,
      },
      {
        id: Guid.newGuid().toString(),
        image: images[2].user.profile_image.medium,
        name: "Yasin",
        places: 1,
      },
      {
        id: Guid.newGuid().toString(),
        image: images[3].user.profile_image.medium,
        name: "Muna",
        places: 10,
      },
      {
        id: Guid.newGuid().toString(),
        image: images[4].user.profile_image.medium,
        name: "Tamba",
        places: 2,
      },
    ];
  }

  return <UsersList items={USERS} />;
};

export default Users;
