import Item from "./Item.js";
import styles from "./AboutUsSection.module.scss";
import image from "../../../components/Images/PicOfSupport.png";

const AboutUsSection = () => {
  return (
    <div>
      <div className={`${styles.services} container`}>
        <div className="row">
          <div className="col-lg-6 col-12">
            <img
              className={styles.services__image}
              src={image}
              alt="PicOfSupport"
            ></img>
          </div>
          <div className={`${styles.services__item} col-lg-6 col-12`}>
            <Item />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUsSection;
