import { Req, Res, Next } from "@reflet/express"

async function TestMiddleware(
    req: Req, res: Res, next: Next
) {
    try {
        console.log('our middleware ran')
        next()
    } catch (err) {
        console.log('err')
        res.status(500).send({
            message: "Internal Server Error"
        })
    }
}

export { TestMiddleware }