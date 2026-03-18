import styles from "./CountryItem.module.css";

function CountryItem({ country }) {
  return (
    <li className={styles.countryItem}>
      <img src={country.flag} className={styles.flag} />
      <span>{country.country}</span>
    </li>
  );
}

export default CountryItem;
