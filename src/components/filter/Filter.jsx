import PropTypes from 'prop-types';
import s from './Filter.module.css';

function Filter({ filter, filterForm }) {
  return (
    <form className={s.form}>
      <label className={s.lable}>
        <span className={s.findTitle}>Find contect by name</span>
        <input
          className={s.input}
          type="text"
          name="name"
          value={filter}
          onChange={filterForm}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
      </label>
    </form>
  );
}

Filter.propTypes = {
  filterForm: PropTypes.func.isRequired,
  filter: PropTypes.string,
};

export default Filter;
