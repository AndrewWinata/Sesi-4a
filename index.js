/*
    1. buat endpoint untuk update dan delete user
    2. Buat table dengan nama tasks dan buat field / column sebagai berikut: 
        - task_id
        - user_id
        - title
        - is_done
        - created_at
        - updated_at
    3. Buat endpoint untuk CRUD table tasks di atas.
*/

import express from 'express';
import * as UserService from './services/userService.js'
import * as SongService from './services/songService.js'

const app = express();
const port = 8080;
const host = "localhost";

app.use(express.json());
app.get("/users",UserService.getUser);
app.get("/users/:id", UserService.getUerById);

app.post("/users", UserService.createUser);
app.put("/users/:id", UserService.updateById);
app.delete("/users/:id", UserService.delById);

/////////////////////////////////////////////////////////////////////////////////////////////////////////////

app.get("/songs",SongService.getSong);
//app.get("/songs/:id", SongService.getSongById);
app.get("/songs.g/:genre", SongService.getSongByGenre);
app.get("/songs.f/:fav", SongService.getSongByFav);

app.post("/songs", SongService.createSong);
app.put("/songs/:id", SongService.upSongById);
app.delete("/songs/:id", SongService.delSongById);

/////////////////////////////////////////////////////////////////////////////////////////////////////////////

app.listen(port, host, ()=> {
    console.log(`Server berjalan di http://${host}:${port}`)
})