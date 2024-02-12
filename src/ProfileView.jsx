import React from 'react'
import Cart from './Cart'

export default function ProfileView({person}) {
  return (
    <div>
        <Cart person={person} key={person.id}/>
    </div>
  )
}
