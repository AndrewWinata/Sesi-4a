import * as UserRepo from '../repositories/user.js';
import { successResp } from '../utils/response.js';

export const createUser = async (request, response, next) => {
    try {
        let name = request.body.name; 
        let email = request.body.email;
        let password = request.body.password;

        const [result] = await UserRepo.createData(name, email, password);

        successResp(response, "success menambahkan data", {user_id: result.insertId}, 201);

    } catch (error) {
        next(error)
    }
    
}



export const upUser = async (id, nm, eml, pswd) => {
    //let up_at = new Date();
    const sqlUp = `UPDATE users SET name_ = "${nm}", email_ = "${eml}", pwd_ = "${pswd}" WHERE user_id = "${id}"`;
    //const values = [nm,eml,pswd]
    return dbPool.query(sqlUp);
}

export const delUser = async (id) => {
    const sql = `DELETE FROM users where user_id = ${id}`

    return dbPool.query(sql);
}



export const getUser = async (request, response, next) => {
    try {
        const [result] = await UserRepo.getData(100);
        successResp(response, "success", result)
    } catch (error) {
        next(error);
    }
}

export const getUerById = async (request, response, next) => {
    try {
        let id = request.params.id;
        const [result] = await UserRepo.getDataById(id);

        successResp(response, "success", result[0])
    } catch(error) {
        next(error)
    }
}

export const updateById = async (request, response, next) => {
    try{
        let name = request.body.name; 
        let email = request.body.email;
        let password = request.body.password;
        let id = request.params.id;

        const [result] = await UserRepo.updateData(name, email, password, id);

        successResp(response, "success mengubah data", {user_id: result.insertId}, 201);

    } catch(error){
        next(error)
    }
}

export const delById = async (request, response, next) => {
    try{
        let id = request.params.id;

        const [result] = await UserRepo.deleteData(id);

        successResp(response, "Data berhasil dihapus", 201)

    } catch(error){
        next(error)
    }
}