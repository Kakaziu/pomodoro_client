import { FunctionComponent } from "react";
import { TitlePag } from "../../components/HomeInfos/styled";
import SideBarr from "../../components/SideBarr";

const Historic: FunctionComponent = () => {
  return (
    <section id="historic">
      <SideBarr />
      <TitlePag>
        <h1>Historic</h1>
        <p>Check you pomodoro history</p>
      </TitlePag>
    </section>
  );
};

export default Historic;
