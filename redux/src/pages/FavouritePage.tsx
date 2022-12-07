import React from "react";
import { useAppSelector } from "../hooks/redux";
export function FavoritePage () {
  const {favourites} = useAppSelector(state => state.github)
  if (favourites.length === 0) {
    return <p className="text-center">No items.</p>
  }
  return (
    <div className="flex flex-col justify-start pt-10 mx-auto h-screen w-screen ">
    <h2 className="w-10 mx-5 text-4xl font-bold tracking-tight sm:text-center sm:text-6xl">Favorite</h2>
    <ul className="list-none list-inside my-5 pl-2">
{favourites.map(f => (
  <li className="my-5 pl-2" key={f}>
    <a className="hover:opacity-50" target="blank" href={f}>{f}</a>
    
  </li>
))}
    </ul>
    </div>
    

  )
}