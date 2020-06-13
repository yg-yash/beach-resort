import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import styles from "./Room.module.css";

export default function Room({ room }) {
  const { name, slug, images, price } = room;

  return (
    <article className={styles.Room}>
      <div className={styles.ImgContainer}>
        <img src={images[0]} alt="single room" />
        <div className={styles.PriceTop}>
          <h6>${price}</h6>
          <p>per night</p>
        </div>
        <Link
          to={`/rooms/${slug}`}
          className={`btn-primary ${styles.RoomLink}`}
        >
          Features
        </Link>
      </div>
      <p className={styles.RoomInfo}>{name}</p>
    </article>
  );
}

Room.propTypes = {
  room: PropTypes.shape({
    name: PropTypes.string.isRequired,
    slug: PropTypes.string.isRequired,
    images: PropTypes.arrayOf(PropTypes.string).isRequired,
    price: PropTypes.number.isRequired
  })
};
