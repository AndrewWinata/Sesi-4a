import * as SongRepo from '../repositories/song.js';
import { successResp, errorResp } from '../utils/response.js';



export const getSong = async (request, response, next) => {
    try {
        const [result] = await SongRepo.getDataS(100);
        if (result != '') {
            successResp(response, "Success!", result)
        } else {
            errorResp(response, "Data Kosong!", 401)
        }
    } catch (error) {
        next(error)
    }
}

export const getSongById = async (request, response, next) => {
    try {
        let id = request.params.id;
        const [result] = await SongRepo.getDataSById(id);
        if (result != '') {
            successResp(response, "Success ID!", result[0])
        } else {
            errorResp(response, "Data ID Tidak Ditemukan!", 401)
        }
    } catch(error) {
        next(error)
    }
}

export const getSongByGenre = async (request, response, next) => {
    try{
        let genre = request.params.genre;
        const [result] = await SongRepo.getDataSByGenre(genre);
        if (result != '') {
            successResp(response, "Success GENRE!", result)
        } else {
            errorResp(response, "Data GENRE Tidak Ditemukan!", 401)
        }
    } catch(error){
        next(error)
    }
};

export const getSongByFav = async (request, response, next) => {
    try{
        let fav = request.params.fav;
        if (fav < 2){
            const [result] = await SongRepo.getDataSByFav(fav);

            successResp(response, "Success FAVORITE!", result)
        } else {
            errorResp(response, "Data Berupa Boolean! Contoh:(0/1)", 401)
        }
    } catch(error){
        next(error)
    }
}



export const createSong = async (request, response, next) => {
    try {
        let artis = request.body.artis; 
        let judul = request.body.judul;
        let bol_ = request.body.bol_;
        let genre = request.body.genre;

        //let bol = JSON.parse(bol_);
        const [result] = await SongRepo.createDataS(artis, judul, bol_, genre);

        successResp(response, "Success menambahkan data!", {song_id: result.insertId, artis: artis, judul: judul, fav: bol_, genre: genre}, 201);

    } catch (error) {
        next(error)
    }
    
}

export const upSongById = async (request, response, next) => {
    try{
        let id = request.params.id;
        let artis = request.body.artis; 
        let judul = request.body.judul;
        let bol_ = request.body.bol_;
        let genre = request.body.genre;

        const [result] = await SongRepo.upDataS(id, artis, judul, bol_, genre);

        successResp(response, "Success mengubah data!", {song_id: id, artis: artis, judul: judul, fav: bol_, genre: genre}, 201);

    } catch(error){
        next(error)
    }
}

export const delSongById = async (request, response, next) => {
    try{
        let id = request.params.id;

        const [result] = await SongRepo.delDataS(id);

        successResp(response, "Data berhasil dihapus!", 201)

    } catch(error){
        next(error)
    }
}