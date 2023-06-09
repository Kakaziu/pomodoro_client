import { StateCamps } from "../components/AccountForms/protocol";

export default function validEmptyCamps(
  setFunc: React.Dispatch<React.SetStateAction<StateCamps>>,
  camp: StateCamps
) {
  if (!camp) return setFunc({ value: "", error: `* Campo vazio.` });
}
