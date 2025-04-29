import { register, Registration } from "@reflet/express"
import { Express } from "express"
import { UsersController } from "./users/users.controller"
import { AuthController } from "./auth/auth.controller"

export function registerRoutes(app: Express) {
    const routes: Registration[] = [UsersController]

    register(app, routes)
}