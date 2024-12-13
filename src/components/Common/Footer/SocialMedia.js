import styles from "./Footer.module.scss";
import React from "react";
import Facebook from "../../Images/Facebook.png";
import Instagram from "../../Images/Instagram.png";
import Whatsapp from "../../Images/Whatsapp.png";
import Gmail from "../../Images/Gmail.png";
// import Tiktok from "../../Images/Tiktok.png";
import Viber from "../../Images/Viber.png"
import { Link } from "react-router-dom";

const SocialMedia = () => {

  
  return (
    <div className={styles.socmedia}>
      <div className={styles.socmedia__title}>Social Media</div>
      <ul className={`${styles.socmedia__list} d-flex align-items-center`}>
        <li className={styles["socmedia__list--item"]} >
          <Link target="_blank" href="https://www.facebook.com/FlyinspectorsEng" className={styles["socmedia__list--link"]}>
            <img src={Facebook} alt="Facebook" />
          </Link>
        </li>
        <li className="nav-item ">
          <Link className="nav-link p-0 text-body-secondary">
            <img className={styles.viber} src={Viber} alt="Viber" />
          </Link>
        </li>
        <li className="nav-item ">
          <Link target="_blank" href="https://Wa.me/+995593000394?text=I'm%20interested" className="nav-link p-0 text-body-secondary">
            <img src={Whatsapp} alt="Whatsapp" />
          </Link>
        </li>
        <li className="nav-item ">
          <Link target="_blank" href="mailto:team@flyinspectors.com" className="nav-link p-0 text-body-secondary">
            <img src={Gmail} alt="Gmail" />
          </Link>
        </li>
        {/* <li className="nav-item ">
          <a href="https://www.tiktok.com/@flyinspectors" className="nav-link p-0 text-body-secondary">
            <img src={Tiktok} alt="Tiktok" />
          </a>
        </li> */}
      </ul>
    </div>
  );
};

export default SocialMedia;
