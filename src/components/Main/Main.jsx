import videoBG from "../../images/clouds.mp4";
import { ReactComponent as Logo } from "../../images/logo.svg";
import videoMessage from "../../images/IMG_8332.MP4";
import { FaPlay } from "react-icons/fa";
import { TfiClose } from "react-icons/tfi";
import { useState } from "react";
import { Modal } from "../Modal/Modal";
import { Oval } from "react-loader-spinner";
import "./main.css";

export const Main = () => {
  const [isModal, setIsModal] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  const toggleModal = () => {
    setIsModal(!isModal);
  };

  return (
    <div className="main">
      <video src={videoBG} autoPlay loop muted className="video-back" />
      <div className="main-content">
        <Logo className="logo" />

        <div className="main-content-text">
          <button type="button" className="icon-button" onClick={toggleModal}>
            <FaPlay size={20} />
          </button>
          <span className="text-first">online курс</span>
          <span className="text-second">«ВОЗРОЖДЕНИЕ ГОЛОСА»</span>
        </div>
      </div>
      {isModal && (
        <Modal>
          <div className="modal">
              
            <video
              src={videoMessage}
              autoPlay
              className="video-message"
              onLoadedData={() => setIsLoaded(true)}
              onEnded={toggleModal}
            />
            <Oval
                height={80}
                width={80}
                color="#C478FF"
                wrapperStyle={{}}
                wrapperClass="loaderwrapper"
                visible={!isLoaded}
                ariaLabel="oval-loading"
                secondaryColor="#EFDBFE"
                strokeWidth={1}
                strokeWidthSecondary={1}
              />
            <button type="button" className="close-btn" onClick={toggleModal}>
              <TfiClose size={20} />
            </button>
          </div>
        </Modal>
      )}
    </div>
  );
};
