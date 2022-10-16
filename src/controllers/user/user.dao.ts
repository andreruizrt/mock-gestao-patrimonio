import { v4 as uuid } from "uuid";
import { User, UserId } from "./user.type";

export async function getUser(id: UserId): Promise<User | undefined> {
    return {
        id,
        name: 'Andre Ruiz',
        username: 'ruxx',
        token: uuid(),
    }
}

export async function getUsers(): Promise<User[]> {
    return [
        {
            id: '1',
            name: 'Andre Ruiz',
            username: 'ruxx',
            token: uuid(),
        }, {
            id: '2',
            name: 'Marlon Professor',
            username: 'marlonprofessor',
            token: uuid(),
        }, {
            id: '3',
            name: 'Matheus Neves',
            username: 'serninguem',
            token: uuid(),
        }, {
            id: '4',
            name: 'Kamila Antunes',
            username: 'tabocas',
            token: uuid(),
        }

    ]

}

export async function createUser(user: User): Promise<User> {
    return user;
}

export async function updateUser(id: UserId, user: User): Promise<User> {
    return user;
}

export async function deleteUser(id: UserId): Promise<object | void> {
    return {
        message: `Usuário com ${id} deletado com sucesso`
    }
}