import { Field, Form, Formik } from 'formik';

const SearchBar = ({ onChangeQuery }) => {
  const initialValues = {
    query: '',
  };
  const handleSubmit = value => {
    console.log(value);
    onChangeQuery(value.query);
  };
  return (
    <header>
      <Formik initialValues={initialValues} onSubmit={handleSubmit}>
        <Form>
          <Field name="query" placeholder="Search images and photos" />
          <button type="submit">Search</button>
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
