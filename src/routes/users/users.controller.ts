import { Get, Post, Req, Res, Router, Use } from "@reflet/express";
import { UsersService } from "./users.service";
import { TestMiddleware } from "../../middlewares/test.middleware";
import { AuthGuard } from "../../middlewares/auth-guard.middleware";

@Router('/users')
export class UsersController {
    private usersService: UsersService

    constructor() {
        this.usersService = new UsersService()
    }



    @Get('/get-users')
    @Use(TestMiddleware)
    async getUsers(req: Req, res: Res) {
        try {
            const result = this.usersService.handleGetUsers()
            return res.status(200).send(result)
        } catch (err) {

            return res.status(500).send({
                message: "Internal Server Error"
            })

        }
    }

    @Get('/get-user/:email')
    getUserbyEmail(req: Req, res: Res) {
        try {
            const email = String(req.params.email)
            const result = this.usersService.handleGetUserByEmail(email)

            return res.status(200).send({
                data: result
            })
        } catch (err) {
            return res.status(500).send({
                message: "Internal Server Error"
            })
        }
    }

    @Post('/add-user')
    @Use(AuthGuard)
    addUser(req: Req, res: Res) {
        try {

            const body = req.body
            const result = this.usersService.handleAddUser(body.name, body.email, body.password)

            return res.status(201).send({
                data: result
            })
        } catch (err) {
            console.log(err)
            return res.status(500).send({
                message: "Internal Server Error"
            })
        }
    }






}