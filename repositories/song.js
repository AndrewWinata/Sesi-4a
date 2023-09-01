import dbPool from "../utils/db.js";

export const getDataS = (limit) => {
    const sql = "SELECT * FROM songs LIMIT ?";
    const values = [limit];

    return dbPool.query(sql, values)
}

export const getDataSById = (id) => {
    const sql = "SELECT * FROM songs WHERE song_id = ?";
    const values = [id];

    return dbPool.query(sql, values)
}

export const getDataSByGenre = (genre) => {
    const sql = `SELECT * FROM songs WHERE genre = "${genre}"`;
    //const values = [genre];

    return dbPool.query(sql)
}

export const getDataSByFav = (bool_) => {
    const sql = "SELECT * FROM songs WHERE is_favorite = ?";
    const values = [bool_];

    return dbPool.query(sql, values)
}



export const createDataS = (artis_, judul_, bool_, genre_) => {
    const sql = "INSERT INTO songs (artis, judul, is_favorite, genre) VALUE(?, ?, ?, ?)";
    const values = [artis_, judul_, bool_, genre_];
    const result = dbPool.query(sql, values);

    return result;
}

export const upDataS = (id, artis_, judul_, bool_, genre_) => {
    const sqlUp = `UPDATE songs SET artis = "${artis_}", judul = "${judul_}", is_favorite = ${bool_}, genre = "${genre_}" WHERE song_id = ${id}`;
    //const values = [artis_, judul_, bool_, genre_, id];
    return dbPool.query(sqlUp)
}

export const delDataS = (id) => {
    const sql = `DELETE FROM songs where song_id = "${id}"`

    return dbPool.query(sql);
}