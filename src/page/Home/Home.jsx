import { useEffect, useState } from "react";
import { MDBBtn } from "mdb-react-ui-kit";
import { Link } from "react-router-dom";

const Home = () => {
  const [movies, setMovies] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    fetch(`https://api.tvmaze.com/search/shows?q=${search}`)
      .then((response) => response.json())
      .then((data) => setMovies(data));
  }, [search]);

  const handleSearch = (e) => {
    setSearch(e.target.value);
  };

  const filteredMov = movies.filter((movie) =>
    movie.show.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <>
      <div className="container">
        <h1 className="text-center color-link">¡Welcome!</h1>
        <form className="d-flex input-group w-auto">
          <input
            type="search"
            name="busqueda"
            className="form-control"
            placeholder="Search movie..."
            aria-label="Search"
            value={search}
            onChange={handleSearch}
          />
        </form>

        <div className="row">
          {filteredMov.map((item) => (
            <div className="col-sm-4 mb-4 mt-5" key={item.show.id}>
              <div className="card">
                <img
                  className="card-img-top"
                  src={
                    item.show.image
                      ? item.show.image.medium
                      : "URL_de_imagen_por_defecto"
                  }
                  alt={item.show.name}
                />
                <div className="card-body color-card">
                  <h4 className="card-title">{item.show.name}</h4>
                  <p className="card-text">
                    Géneros: {item.show.genres.join(", ")}
                  </p>
                  <p className="card-text">Idioma: {item.show.language}</p>
                  <p className="card-text">Estrenada: {item.show.premiered}</p>
                  <Link to={`/movie/${item.show.id}`}>
                    <MDBBtn>Detalles</MDBBtn>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Home;
