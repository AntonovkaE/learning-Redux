import React from "react";
import { useSearchUsersQuery } from "../store/github.api";
export function HomePage () {
  const {isLoading, isError, data} = useSearchUsersQuery('ella');
  return (
    <div>Home</div>
  )
}