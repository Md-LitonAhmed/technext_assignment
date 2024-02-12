import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Cart from './Cart';

export default function ProfileView() {
    const[person,setPerson]=useState();
    const {profileId}=useParams()
  useEffect(() => {
    fetch(`https://dummyjson.com/users/${profileId}`)
      .then((res) => res.json())
      .then((data) => {
        setPerson(data);
       
      })
      .catch((error) => console.log(error));
      
  }, [profileId]);
  
  return (
    <>
    <div>Profile View</div>
     <Cart person={person} key={person.id}/>
    </>
    
  )
}
