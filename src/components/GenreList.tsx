import React from "react";
import useGenres from "../hooks/UseGenres";
import { VStack } from "@chakra-ui/react";
import GenreCard from "./GenreCard";

const GenreList = () => {
  const { genres, error, isLoading } = useGenres();

  return (
    <VStack>
      {genres.map((genre) => (
        <li key={genre.id}>{genre.name}</li>
      ))}
    </VStack>
  );
};

export default GenreList;
