import Item from "./Item.js";
import styles from "./BeAware.module.scss";
import image from "../../Images/MonitorImage.png"

const BeAware = () => {
  return (
    <div>
      <div className={`${styles.services} container`}>
        <div className="row">
          <div className="col-lg-5">
            <img className={styles.image} src={image} alt="MonitorPic"></img>
          </div>
          <div className={`${styles.item} col-lg-7 col-12`}>
            <Item />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BeAware;
