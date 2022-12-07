import React from "react";
import { useAppSelector } from "../hooks/redux";
export function FavoritePage () {
  const {favourites} = useAppSelector(state => state.github)
  if (favourites.length === 0) {
    return <p className="text-center">No items.</p>
  }
  return (
    <div className="flex justify-center pt-10 mx-auto h-screen w-screen ">
    <div>Favorite</div>
    <ul className="list-none">
{favourites.map(f => (
  <li key={f}>
    <a target="blank" href={f}>{f}</a>
    
  </li>
))}
    </ul>
    </div>
    

  )
}