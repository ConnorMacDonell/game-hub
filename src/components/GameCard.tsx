import { Card, CardBody, HStack, Heading, Image } from "@chakra-ui/react";
import getCroppedImageUrl from "../services/image-url";
import CriticScore from "./CriticScore";
import PlatformIconList from "./PlatformIconList";
import { Game } from "../services/gameService";
import { Link } from "react-router-dom";

interface Props {
  game: Game;
}

const GameCard = ({ game }: Props) => {
  return (
    <>
      <Link to="/games/${game.id}">
        <Card>
          <Image src={getCroppedImageUrl(game.background_image)} />
          <CardBody>
            <HStack justifyContent={"space-between"} marginBottom={3}>
              <PlatformIconList
                platforms={game.parent_platforms.map((p) => p.platform)}
              ></PlatformIconList>
              <CriticScore score={game.metacritic}></CriticScore>
            </HStack>
            <Heading fontSize="2xl">{game.name}</Heading>
          </CardBody>
        </Card>
      </Link>
    </>
  );
};

export default GameCard;
