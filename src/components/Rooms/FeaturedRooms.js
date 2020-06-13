import React, { Component } from "react";
import { RoomContext } from "../../Context";
import Loading from "../UI/Loading";
import styles from "./FeaturedRooms.module.css";
import Room from "./Room";
import Title from "./Title";

export default class FeaturedRooms extends Component {
  static contextType = RoomContext;
  render() {
    let { featuredRooms: rooms, loading } = this.context;
    rooms = rooms.map(room => {
      return <Room key={room.id} room={room} />;
    });
    return (
      <section className={styles.FeaturedRooms}>
        <Title title="featured Rooms" />
        <div className={styles.FeaturedRoomsCenter}>
          {loading ? <Loading /> : rooms}
        </div>
      </section>
    );
  }
}
