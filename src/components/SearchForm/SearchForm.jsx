import { FiSearch } from 'react-icons/fi';
import { useState } from 'react';
import styles from './SearchForm.module.css';

const regions = [
  { id: 'africa', value: 'africa', name: 'Africa' },
  { id: 'america', value: 'america', name: 'America' },
  { id: 'asia', value: 'asia', name: 'Asia' },
  { id: 'europe', value: 'europe', name: 'Europe' },
  { id: 'oceania', value: 'oceania', name: 'Oceania' },
];

const SearchForm = ({ onSubmit }) => {
  const [query, setQuery] = useState('');

  const handleChange = e => {
    setQuery(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    onSubmit(query);
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <button className={styles.button} type="submit">
        <FiSearch size="16px" />
      </button>
      <select
        name="region"
        aria-label="select"
        required
        className={styles.select}
        defaultValue="default"
        onChange={handleChange}
      >
        <option value="default" disabled>
          Select a region
        </option>
        {regions.map(({ id, value, name }) => (
          <option value={value} key={id}>
            {name}
          </option>
        ))}
      </select>
    </form>
  );
};

export default SearchForm;
