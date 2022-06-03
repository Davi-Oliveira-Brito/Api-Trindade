// Functions
import { login } from "../repository/funcionariorepository.js";

// Router
import { Router } from "express";
const server = Router();

server.post('/funcionario/login', async (req, resp) => {
    const user = req.body;
    console.log(user)
    try{
        const loggedUser = await login(user);
        resp.status(200).send({
            "id": loggedUser.id,
            "email":loggedUser.email,
            "nome":loggedUser.nome
        });
    }catch(err) {
        resp.status(404).send({
            error: err.message
        });
    }

});

export default server;