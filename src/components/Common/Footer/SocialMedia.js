import styles from "./Footer.module.scss";
import React from "react";
import Facebook from "../../Images/Facebook.png";
import Instagram from "../../Images/Instagram.png";
import Whatsapp from "../../Images/Whatsapp.png";
import Gmail from "../../Images/Gmail.png";
import Tiktok from "../../Images/Tiktok.png";

const SocialMedia = () => {

  
  return (
    <div className={styles.socmedia}>
      <div className={styles.socmedia__title}>Social Media</div>
      <ul className={`${styles.socmedia__list} d-flex align-items-center`}>
        <li className={styles["socmedia__list--item"]} >
          <a href="https://www.facebook.com/FlyinspectorsEng" className={styles["socmedia__list--link"]}>
            <img src={Facebook} alt="Facebook" />
          </a>
        </li>
        <li className="nav-item ">
          <a href="https://www.instagram.com/flyinspectors/" className="nav-link p-0 text-body-secondary">
            <img src={Instagram} alt="Instagram" />
          </a>
        </li>
        <li className="nav-item ">
          <a href="https://Wa.me/+995593000394?text=I'm%20interested" className="nav-link p-0 text-body-secondary">
            <img src={Whatsapp} alt="Whatsapp" />
          </a>
        </li>
        <li className="nav-item ">
          <a href="mailto:team@flyinspectors.com" className="nav-link p-0 text-body-secondary">
            <img src={Gmail} alt="Gmail" />
          </a>
        </li>
        <li className="nav-item ">
          <a href="https://www.tiktok.com/@flyinspectors" className="nav-link p-0 text-body-secondary">
            <img src={Tiktok} alt="Tiktok" />
          </a>
        </li>
      </ul>
    </div>
  );
};

export default SocialMedia;
