import { Link, Outlet } from "react-router-dom";
import { getSongs } from "./../data";

export default function Songs() {
    const songs=getSongs();
    return (
        <div style={{ display: "flex" }}>
        <nav
          style={{
            borderRight: "solid 1px",
            padding: "1rem"
          }}
        >
          {songs.map(song => (
            <Link
              style={{ display: "block", margin: "1rem 0", textAlign:"left"}}
              to={`/songs/${song.songId}`}
              key={song.songId}
            >
              {song.title}
            </Link>
          ))}
        </nav>
        <Outlet />
      </div>
    )
}