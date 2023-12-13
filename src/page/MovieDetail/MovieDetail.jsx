import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import {
  MDBAccordion,
  MDBAccordionItem,
  MDBRow,
  MDBCol,
} from "mdb-react-ui-kit";

const MovieDetail = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    fetch(`https://api.tvmaze.com/shows/${id}?embed[]=episodes&embed[]=cast`)
      .then((response) => response.json())
      .then((data) => {
        setMovie(data);
      })
      .catch((error) => console.error("Error:", error));
  }, [id]);

  if (!movie) {
    return <div>Cargando...</div>;
  }

  return (
    <div className="container">
      <div className="row mt-5">
        <div className="col-md-4">
          <img
            src={movie.image ? movie.image.medium : "URL_de_imagen_por_defecto"}
            alt={movie.name}
            className="rounded-4 shadow-4"
            style={{ width: "100%" }}
          />
        </div>
        <div className="col-md-8">
          <h2 >Pelicula: {movie.name}</h2>
          {movie.summary && (
            <div
              dangerouslySetInnerHTML={{ __html: movie.summary }}
            />
          )}
          <MDBAccordion flush style={{ backgroundColor: '#3d7b80' }}>
            {movie._embedded && movie._embedded.episodes ? (
              Object.entries(
                movie._embedded.episodes.reduce((episodesBySeason, episode) => {
                  const season = episode.season || "Sin temporada";
                  if (!episodesBySeason[season]) {
                    episodesBySeason[season] = [];
                  }
                  episodesBySeason[season].push(episode);
                  return episodesBySeason;
                }, {})
              ).map(([season, episodes]) => (
                <MDBAccordionItem
                  key={season}
                  collapseId={season}         
                  headerTitle={`Temporada ${season}`}
                >
                  <ul>
                    {episodes.map((episode) => (
                      <li
                      
                        key={episode.id}
                        style={{ color: "white" }}
                      >
                        {episode.name}
                      </li>
                    ))}
                  </ul>
                </MDBAccordionItem>
              ))
            ) : (
              <MDBAccordionItem
                collapseId="no-episodes"
                headerTitle="No hay episodios disponibles"
              >
                <p>No se encontraron episodios.</p>
              </MDBAccordionItem>
            )}
          </MDBAccordion>
          <h3>Actores:</h3>
          {movie._embedded && movie._embedded.cast ? (
            <MDBRow>
              {movie._embedded.cast.map((actor) => (
                <MDBCol key={actor.person.id} size="6" className="mb-3">
                  <div className="text-center">
                    <img
                      src={
                        actor.person.image
                          ? actor.person.image.medium
                          : "URL_de_imagen_por_defecto"
                      }
                      alt={actor.person.name}
                      className="rounded-circle"
                      style={{ width: "100px", height: "100px" }}
                    />
                    <p>{actor.person.name}</p>
                  </div>
                </MDBCol>
              ))}
            </MDBRow>
          ) : (
            <p className="color-link">No se encontraron actores.</p>
          )}
        </div>
      </div>
      <div>
        <Link  to="/">
          Volver
        </Link>
      </div>
    </div>
  );
};

export default MovieDetail;
