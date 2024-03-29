import React from "react";
import useTrailers from "../hooks/useTrailers";

interface Props {
  gameId: number;
}

const GameTrailer = ({ gameId }: Props) => {
  const { data, isLoading, error } = useTrailers(gameId);

  if (isLoading) return null;

  if (error) throw error;

  const firstResult = data?.results[0];

  if (!firstResult) return null;

  return (
    <video
      src={firstResult.data[480]}
      poster={firstResult.preview}
      controls
    ></video>
  );
};

export default GameTrailer;
