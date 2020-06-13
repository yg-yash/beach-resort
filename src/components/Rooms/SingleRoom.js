import React, { Component } from "react";
import defaultBcg from "../../images/room-1.jpeg";
import Banner from "../Banner/Banner";
import { Link } from "react-router-dom";
import { RoomContext } from "../../Context";
import styles from "./SingleRoom.module.css";
import StyledHero from "../StyledComponents/StyledHero";

class SingleRoom extends Component {
  constructor(props) {
    super(props);
    this.state = {
      slug: this.props.match.params.slug,
      defaultBcg
    };
  }
  static contextType = RoomContext;
  // componentDidMount(){}
  render() {
    const { getRoom } = this.context;

    const room = getRoom(this.state.slug);
    if (!room) {
      return (
        <div className="error">
          <h3>no such room could be found...</h3>
          <Link to="/rooms" className="btn-primary">
            Back to rooms
          </Link>
        </div>
      );
    }
    const {
      name,
      description,
      capacity,
      size,
      price,
      extras,
      breakfast,
      pets,
      images
    } = room;
    const [mainImg, ...defaultImg] = images;
    return (
      <>
        <StyledHero img={mainImg || this.state.defaultBcg}>
          <Banner title={`${name} room`}>
            <Link to="/rooms" className="btn-primary">
              back to rooms
            </Link>
          </Banner>
        </StyledHero>
        <section className={styles.SingleRoom}>
          <div className={styles.SingleRoomImages}>
            {defaultImg.map((item, index) => {
              return <img src={item} key={index} alt={name} />;
            })}
          </div>
          <div className={styles.SingleRoomInfo}>
            <article className={styles.Desc}>
              <h3>Details</h3>
              <p>{description}</p>
            </article>
            <article className={styles.Info}>
              <h3>info</h3>
              <h6>price: ${price}</h6>
              <h6>size: ${size} SQFT</h6>
              <h6>
                Max capacity :
                {capacity > 1 ? `${capacity} people` : `${capacity} person`}
              </h6>
              <h6>{pets ? "pets allowed" : "no pets allowed"}</h6>
              <h6>{breakfast && "free breakfast included"}</h6>
            </article>
          </div>
        </section>
        <section className={styles.RoomExtras}>
          <h6>Extras</h6>
          <ul className={styles.Extras}>
            {extras.map((item, index) => {
              return <li key={index}>- {item}</li>;
            })}
          </ul>
        </section>
      </>
    );
  }
}

export default SingleRoom;
