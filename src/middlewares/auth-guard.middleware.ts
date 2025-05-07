import { Req, Res, Next } from "@reflet/express"
import { ACCESS_TOKEN_KEY } from "../data/keys"
import jwt from "jsonwebtoken"

async function AuthGuard(
    req: Req, res: Res, next: Next
) {
    try {
        const authHeader = req.headers['authorization'] ?? ""
        if (!authHeader && !authHeader.startsWith('Bearer')) {
            return res.status(401).send({
                message: "Access Denied, No Token Provided"
            })
        }

        const accessToken = authHeader.split(' ')[1] ?? null

        jwt.verify(accessToken, ACCESS_TOKEN_KEY, (err, data) => {
            if (err) {
                return res.status(401).send({
                    message: "Invalid or Expired Token"
                })
            }

            next()
        })
    } catch (err) {
        console.log(err)
        res.status(500).send({
            message: "Internal Server Error"
        })
    }
}

export { AuthGuard }