import { user } from "../../data/users";

export class UsersService {

    handleGetUsers() {
        return user
    }

    handleGetUserByEmail(email: string) {
        var users = user.filter((e) => e.email == email)
        return users
    }

    handleAddUser(name: string, email: string, password: string) {
        user.push({
            name,
            email,
            password,
        })
        return user
    }
}