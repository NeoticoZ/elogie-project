import { Request, Response } from "express";
import { CreateUserService } from "../services/CreateUserService";
import { FindUserDataService } from "../services/FindUserDataService";

class CreateUserController {
  async handle(request: Request, response: Response) {
    const { name, email, password, admin } = request.body;

    const createUserService = new CreateUserService();
    const findUserDataService = new FindUserDataService();

    const token = await createUserService.execute({
      name,
      email,
      password,
      admin,
    });

    const user = await findUserDataService.execute(token);

    return response.json({ token, user });
  }
}

export { CreateUserController };
