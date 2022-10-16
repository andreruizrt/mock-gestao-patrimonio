import { NextFunction, Request, Response } from "express";

import { getUsers } from "./user.dao";

import { User } from "./user.type";

export async function getUserController(request: Request, response: Response, next: NextFunction): Promise<User | void> {

    const { id } = request.params;

    try {
        const users = await getUsers();
        if (users) {
            response.send(users[parseInt(id)])
        } else {
            response.sendStatus(204)
        }

    } catch (error) {
        next(error)
    }
}


export async function getUsersController(request: Request, response: Response, next: NextFunction): Promise<User[] | void> {

    try {
        const users = await getUsers();

        if (users) {
            response.send(users)
        } else {
            response.sendStatus(204)
        }

    } catch (error) {
        next(error)
    }

}

export async function putUserController(request: Request, response: Response): Promise<void> {

    const { id } = request.params;

    response.send({
        message: `Usuário do ${id} alterado com sucesso`
    })

}