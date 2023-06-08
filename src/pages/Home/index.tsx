import Header from "../../components/Header";
import SideBarr from "../../components/SideBarr";
import HomeInfos from "../../components/HomeInfos";
import Modal from "../../components/Modal";
import ModalForm from "../../components/ModalForm";

const Home = () => {
  return (
    <section id="home">
      <Header />
      <SideBarr />
      <HomeInfos />
      <Modal>
        <ModalForm />
      </Modal>
    </section>
  );
};

export default Home;
