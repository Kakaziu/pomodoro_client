import { useEffect, useState } from "react";
import Header from "../../components/Header";
import SideBarr from "../../components/SideBarr";
import HomeInfos from "../../components/HomeInfos";
import Modal from "../../components/Modal";
import ModalForm from "../../components/ModalForm";
import api from "../../services/api";

const Home = () => {
  const [showModal, setShowModal] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (token) {
      api.defaults.headers.common["authorization"] = token;
      setLoading(false);
    }
  }, []);

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
