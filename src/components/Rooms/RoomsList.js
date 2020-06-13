import React from "react";
import Room from "./Room";
import styles from "./RoomsList.module.css";

export default function RoomsList({ rooms }) {
  if (rooms.length === 0) {
    return (
      <div className="empty-search">
        <h3>unfortunalety no rooms matched your search parameters</h3>
      </div>
    );
  }
  return (
    <section className={styles.RoomsList}>
      <div className={styles.RoomsListCenter}>
        {rooms.map(item => (
          <Room key={item.id} room={item} />
        ))}
      </div>
    </section>
  );
}
