import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Cart from "./Cart";
import Header from "./Header";

export default function ProfileView() {
  const [person, setPerson] = useState();
  const { profileId } = useParams();
  useEffect(() => {
    fetch(`https://dummyjson.com/users/${profileId}`)
      .then((res) => res.json())
      .then((data) => {
        setPerson(data);
      })
      .catch((error) => console.log(error));
  }, [profileId]);
  console.log(person);
  console.log(profileId);


  return (
    <>
    <Header />
      <div className="flex justify-center items-center mt-10"><h2>Profile View</h2></div>
      { person && <Cart person={person} />}
    </>
  );
}
