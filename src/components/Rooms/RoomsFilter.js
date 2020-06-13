import React from 'react';
import { useContext } from 'react';
import styles from './RoomsFilter.module.css';
import { RoomContext } from '../../Context';
import Title from './Title';
const getUnique = (items, value) => {
  return [...new Set(items.map((item) => item[value]))];
};
export default function RoomsFilter({ rooms }) {
  const context = useContext(RoomContext);
  const {
    handleChange,
    type,
    capacity,
    price,
    minPrice,
    maxPrice,
    minSize,
    maxSize,
    breakfast,
    pets,
  } = context;
  //get unique types
  let types = getUnique(rooms, 'type');
  //add all
  types = ['all', ...types];

  types = types.map((item, index) => (
    <option value={item} key={index}>
      {item}
    </option>
  ));

  let people = getUnique(rooms, 'capacity');
  people = people.map((item, index) => {
    return (
      <option value={item} key={index}>
        {item}
      </option>
    );
  });
  return (
    <section className={styles.FilterContainer}>
      <div className={styles.TitleText}>
        <Title title="Search Rooms" />
      </div>
      <form className={styles.FilterForm}>
        {/* select type */}
        <div className={styles.FormGroup}>
          <label htmlFor="type">room type</label>
          <select
            name="type"
            id="type"
            value={type}
            className={styles.FormControl}
            onChange={handleChange}
          >
            {types}
          </select>
        </div>
        {/* end of selct type */}
        {/* guests \ */}
        <div className={styles.FormGroup}>
          <label htmlFor="capacity">guests</label>
          <select
            name="capacity"
            id="capacity"
            value={capacity}
            className={styles.FormControl}
            onChange={handleChange}
          >
            {people}
          </select>
        </div>
        {/* end of guests */}
        {/* room price */}
        <div className={styles.FormGroup}>
          <label htmlFor="price">room price</label>
          <input
            type="range"
            name="price"
            min={minPrice}
            max={maxPrice}
            id="price"
            value={price}
            onChange={handleChange}
            className={styles.FormControl}
          />
        </div>
        {/* end of room price */}
        {/* size  */}
        <div className={styles.FormGroup}>
          <label htmlFor="size">room size</label>
          <div className={styles.SizeInputs}>
            <input
              type="number"
              name="minSize"
              id="size"
              value={minSize}
              onChange={handleChange}
              className={styles.SizeInput}
            />
            <input
              type="number"
              name="maxSize"
              id="size"
              value={maxSize}
              onChange={handleChange}
              className={styles.SizeInput}
            />
          </div>
        </div>
        {/* end of size */}
        {/* extras */}
        <div className={styles.FormGroup}>
          <div className={styles.SingleExtra}>
            <input
              type="checkbox"
              name="breakfast"
              id="breakfast"
              checked={breakfast}
              onChange={handleChange}
            />
            <label htmlFor="breakfast">breakfast</label>
          </div>
          <div className={styles.SingleExtra}>
            <input
              type="checkbox"
              name="pets"
              id="pets"
              checked={pets}
              onChange={handleChange}
            />
            <label htmlFor="pets">pets</label>
          </div>
        </div>
        {/* end of extras */}
      </form>
    </section>
  );
}
