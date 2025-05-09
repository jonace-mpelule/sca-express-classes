import { Get, Post, Req, Res, Router, Use } from "@reflet/express"
import { AuthService } from "./auth.service"
import { ValidationGuard } from "../../middlewares/validation-guard.middleware";
import { LoginDTO } from "../../types/dto/auth.dto";

@Router('/auth')
export class AuthController {
    private authService: AuthService

    constructor() {
        this.authService = new AuthService()
    }

    @Post('/login')
    @Use(ValidationGuard(LoginDTO))
    async login(req: Req, res: Res) {
        try {
            const email = req.body.email;
            const password = req.body.password

            const result = await this.authService.handleLogin(email, password);
            return res.status(200).send({
                message: "Login Successful",
                data: result
            })

        } catch (err) {

            if (err == "bad-request") {
                return res.status(400).send({
                    code: err,
                    message: "Insufficient Request Body"
                })
            }

            if (err == "credential-mismatch") {
                return res.status(403).send({
                    code: err,
                    message: "Email and Password do not match any user"
                })
            }


            return res.status(500).send({
                error: err,
                message: "Internal Server Error"
            })

        }
    }


    @Post('/refresh')
    async refreshToken(req: Req, res: Res) {
        try {
            const refreshToken = String(req.headers['x-refresh-token'])
            const result = await this.authService.handleRefreshToken(refreshToken);

            return res.status(201).send({
                message: "Token Refreshed Successfully"
            })
        } catch (err) {

            if (err == "invalid-token") {
                return res.status(401).send({
                    message: "Invalid Token Provided",
                    code: err
                })
            }

            return res.status(500).send({
                error: err,
                message: "Internal Server Error"
            })
        }
    }




}