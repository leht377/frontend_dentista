import Button from '../Button';
const FormSearch = ({ search, setSearch, handleSearch }) => {
  const handleForm = (event) => {
    event.preventDefault();
    handleSearch(search);
  };

  return (
    <form onSubmit={handleForm} className="d-flex">
      <input
        className="form-control me-2"
        type="search"
        placeholder="Buscar por cedula"
        aria-label="Search"
        value={search}
        required
        onChange={({ target }) => setSearch(target.value)}
      />
      <Button text={'Buscar'} type="submit" width={'100px'} />
    </form>
  );
};

export default FormSearch;
