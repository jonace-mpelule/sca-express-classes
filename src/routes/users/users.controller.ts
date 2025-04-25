import { Router, Get, Req, Res } from "@reflet/express";
import { UsersService } from "./user.service";

@Router('/users')
export class UsersController {
    private usersService: UsersService
    constructor() {
        this.usersService = new UsersService()
    }

    @Get('/get-users')
    getUsers = (req: Req, res: Res) => {
        var users = this.usersService.handleGetUser()
        return res.send(users)
    }
}