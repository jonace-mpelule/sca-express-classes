import { Express } from "express";
import { register } from "@reflet/express"
import { UsersController } from "./users/users.controller";

export function registerRoutes(app: Express) {
    register(app, [UsersController])
}