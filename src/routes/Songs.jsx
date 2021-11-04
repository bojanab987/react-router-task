import { Outlet, useSearchParams } from "react-router-dom";
import { getSongs } from "./../data";
import QueryNavLink from "./../components/QueryNavLink";

export default function Songs() {
    const songs=getSongs();
    const [searchParams, setSearchParams] = useSearchParams();
    return (
        <div style={{ display: "flex" }}>
        <nav
          style={{
            borderRight: "solid 1px",
            padding: "1rem"
          }}
        >
          <input
            placeholder="Search songs..."
            value={searchParams.get("filter") || ""}
            onChange={event => {
              let filter = event.target.value;
              if (filter) {
                setSearchParams({ filter });
              } else {
                setSearchParams({});
              }
            }}
          />
          {songs
            .filter(song =>{
              let filter = searchParams.get("filter");
              if(!filter) return true;
              let title = song.title.toLowerCase();
              return title.startsWith(filter.toLocaleLowerCase());
            })
            .map(song => (
            <QueryNavLink className={({isActive})=> isActive ? "green" : ""}
              style={{ display: "block", margin: "1rem 0", textAlign:"left"}}
              to={`/songs/${song.songId}`}
              key={song.songId}
            >
              {song.title}
            </QueryNavLink>
          ))}
        </nav>
        <Outlet />
      </div>
    )
}