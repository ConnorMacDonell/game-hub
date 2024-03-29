import { Heading, Spinner, Text } from "@chakra-ui/react";
import useGame from "../hooks/UseGame";
import { Navigate, useParams } from "react-router-dom";
import ErrorPage from "./ErrorPage";

const GameDetailsPage = () => {
  const { slug } = useParams();
  const { data: game, isLoading, error } = useGame(slug!);

  if (isLoading) return <Spinner />;

  if (error || !game) throw error;
  return (
    <>
      <Heading>{game.name}</Heading>
      <Text>{game.description_raw}</Text>
    </>
  );
};

export default GameDetailsPage;
