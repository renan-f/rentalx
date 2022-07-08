import { Request, Response } from "express";
import { container } from "tsyringe";
import { CreateUserUseCase } from "./CreateUserUseCase";

class CreateUserController {
    async handle(request: Request, respose: Response): Promise<Response> {
        const { name, email, password, driver_license } = request.body;
        const createUserUseCase = container.resolve(CreateUserUseCase);

        await createUserUseCase.execute({ name, email, password, driver_license });

        return respose.status(201).send();
    }
}

export { CreateUserController };