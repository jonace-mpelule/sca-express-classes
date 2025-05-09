import { Next, Req, Res } from "@reflet/express"
import { plainToClass } from "class-transformer"
import { validate, ValidationError } from "class-validator"

export function ValidationGuard(dtoClass: any) {
    return (req: Req, res: Res, next: Next) => {
        const dtoObject = plainToClass(dtoClass, req.body)
        validate(dtoObject).then((errors: ValidationError[]) => {
            if (errors.length > 0) {
                const messages = errors.map((error) => Object.values(error.constraints || {})).join(', ')
                return res.status(400).send({ message: messages })
            } else {
                next()
            }
        })
    }
}