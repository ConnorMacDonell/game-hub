import { Heading, Spinner, Text } from "@chakra-ui/react";
import useGame from "../hooks/UseGame";
import { Navigate, useParams } from "react-router-dom";
import ErrorPage from "./ErrorPage";
import ExpandableText from "../components/ExpandableText";

const GameDetailsPage = () => {
  const { slug } = useParams();
  const { data: game, isLoading, error } = useGame(slug!);

  if (isLoading) return <Spinner />;

  if (error || !game) throw error;
  return (
    <>
      <Heading>{game.name}</Heading>
      <ExpandableText>{game.description_raw}</ExpandableText>
    </>
  );
};

export default GameDetailsPage;
