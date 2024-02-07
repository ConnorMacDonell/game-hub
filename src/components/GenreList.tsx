import useGenres from "../hooks/UseGenres";
import { VStack } from "@chakra-ui/react";

const GenreList = () => {
  const { data, error, isLoading } = useGenres();

  return (
    <VStack>
      {data.map((genre) => (
        <li key={genre.id}>{genre.name}</li>
      ))}
    </VStack>
  );
};

export default GenreList;
