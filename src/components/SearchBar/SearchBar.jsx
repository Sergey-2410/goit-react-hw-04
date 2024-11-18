import { Field, Form, Formik } from 'formik';
import s from './SearchBar.module.css';
const SearchBar = ({ onChangeQuery }) => {
  const initialValues = {
    query: '',
  };
  const handleSubmit = value => {
    console.log(value);
    onChangeQuery(value.query);
  };
  return (
    <header className={s.header}>
      <Formik initialValues={initialValues} onSubmit={handleSubmit}>
        <Form className={s.form}>
          <Field
            className={s.input}
            name="query"
            placeholder="Search images and photos"
          />
          <button className={s.btnSubmit} type="submit">
            Search
          </button>
        </Form>
      </Formik>
    </header>
  );
};
export default SearchBar;
/* <form>
        <input
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
        />
        <button type="submit">Search</button>
      </form>*/
