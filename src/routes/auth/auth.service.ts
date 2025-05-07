import jwt from "jsonwebtoken"
import { user } from "../../data/users"
import { ACCESS_TOKEN_KEY, REFRESH_TOKEN_KEY } from "../../data/keys"
export class AuthService {


    async handleLogin(email: string, password: string) {
        try {
            var ourUser = user.filter((e) => e.email == email && e.password == password)[0]
            if (!ourUser) {
                throw "credential-mismatch"
            }

            const accessToken = jwt.sign(
                { id: ourUser.id },
                ACCESS_TOKEN_KEY,
                { expiresIn: '15m' }
            )

            const refreshToken = jwt.sign(
                { id: ourUser.id },
                REFRESH_TOKEN_KEY,
                { expiresIn: '30d' }
            )


            return {
                user: ourUser,
                tokens: {
                    accessToken,
                    refreshToken
                }
            }

        } catch (err) {
            console.log(err)
            throw err
        }
    }

    async handleRefreshToken(refreshToken: string) {
        try {
            const { err, data }: any = jwt.verify(refreshToken, REFRESH_TOKEN_KEY)

            if (err) {
                throw "invalid-token"
            }

            var ourUser = user.filter((e) => data.id)[0]

            const accessToken = jwt.sign({
                id: ourUser.id
            }, ACCESS_TOKEN_KEY, {
                expiresIn: '15m'
            })

            const newRefreshToken = jwt.sign({
                id: ourUser.id
            }, REFRESH_TOKEN_KEY, {
                expiresIn: '15m'
            })

            return {
                tokens: {
                    accessToken,
                    refreshToken
                }
            }
        } catch (err) {
            throw err
        }
    }

} 