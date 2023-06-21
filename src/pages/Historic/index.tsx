import { FunctionComponent } from "react";
import SideBarr from "../../components/SideBarr";
import HistoricInfos from "../../components/HistoricInfos";

const Historic: FunctionComponent = () => {
  return (
    <section id="historic">
      <SideBarr />
      <HistoricInfos />
    </section>
  );
};

export default Historic;
