import { Request, Response } from "express";
import { UsersService } from "../service/UsersService";


class UsersController {
    async create(req: Request, res: Response): Promise<Response>{
        const { email } = req.body;

        try {
            const userRepository = await new UsersService();

            const user = await userRepository.create(email);

            return res.json(user);

        } catch(error) {
            return res.status(400).json({
                message: error.message
            })
        }
    }
}

export {UsersController}