import { FunctionComponent } from "react";
import { LofiContainer } from "./styled";
import { IVideo } from "./protocol";

const LofiVideo: FunctionComponent<IVideo> = ({ player }) => {
  return (
    <LofiContainer>
      <iframe
        width="400px"
        height="250px"
        allow="autoplay"
        src={`https://www.youtube.com/embed/U-q_-1Hg_rg?autoplay=${player}`}
      />
    </LofiContainer>
  );
};

export default LofiVideo;
