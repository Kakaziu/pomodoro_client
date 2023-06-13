import { useState } from "react";
import Header from "../../components/Header";
import SideBarr from "../../components/SideBarr";
import HomeInfos from "../../components/HomeInfos";
import Modal from "../../components/Modal";
import ModalForm from "../../components/ModalForm";

const Home = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <section id="home">
      <Header setShowModal={setShowModal} />
      <SideBarr />
      <HomeInfos setShowModal={setShowModal} />
      <Modal showModal={showModal} setShowModal={setShowModal}>
        <ModalForm showModal={showModal} setShowModal={setShowModal} />
      </Modal>
    </section>
  );
};

export default Home;
