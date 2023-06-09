import Header from "../../components/Header";
import SideBarr from "../../components/SideBarr";
import HomeInfos from "../../components/HomeInfos";
import Modal from "../../components/Modal";
import ModalForm from "../../components/ModalForm";
import { useState } from "react";

const Home = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <section id="home">
      <Header setShowModal={setShowModal} />
      <SideBarr />
      <HomeInfos />
      <Modal showModal={showModal} setShowModal={setShowModal}>
        <ModalForm showModal={showModal} />
      </Modal>
    </section>
  );
};

export default Home;
