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
        src={`https://www.youtube.com/embed/iicfmXFALM8?si=2IrfXyLTQWZOjaVg&autoplay=${player ? "1" : "0"}&loop=1&playlist=iicfmXFALM8`}
      />
    </LofiContainer>
  );
};

export default LofiVideo;
