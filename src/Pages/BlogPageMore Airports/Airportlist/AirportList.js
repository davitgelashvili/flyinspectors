import Item from "./Item.js";
import styles from "./AirportList.module.scss";

const AirportList = () => {
  return (
    <div className={styles.services}>
      <div className={`container`}>
        <h3 className={styles.services__header}>Airports that you may never want to leave
        </h3>
        <div className="row">
          <Item />
        </div>
      </div>
    </div>
  );
};

export default AirportList;