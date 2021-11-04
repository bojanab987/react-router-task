import { useParams } from "react-router-dom";
import { getSong } from "./../data";

export default function Book(){
    const params=useParams();
    const song = getSong(parseInt(params.songId, 10));
    return(
        <main style={{ padding: "1rem", textAlign:"left" }}>            
            <h3>Title:  {song.title}</h3>
            <p>Performed by:  {song.performer}</p>
            <p>Release year:  {song.year}</p>            
    </main>
    )
}