import { FunctionComponent } from "react";
import { IVideo } from "./protocol";
import { LofiContainer } from "./styled";

const LofiVideo: FunctionComponent<IVideo> = ({ player }) => {
  return (
    <LofiContainer>
      <iframe
        width="400px"
        height="250px"
        allow="autoplay"
        src={`https://www.youtube.com/watch?v=n61ULEU7CO0&list=RDn61ULEU7CO0&start_radio=1&autoplay=1&mute=${player ? 0 : 1}`}
      />
    </LofiContainer>
  );
};

export default LofiVideo;
