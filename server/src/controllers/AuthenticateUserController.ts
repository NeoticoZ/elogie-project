import { Request, Response } from "express";
import { AuthenticateUserService } from "../services/AuthenticateUserService";
import { FindUserDataService } from "../services/FindUserDataService";

class AuthenticateUserController {
  async handle(request: Request, response: Response) {
    const { email, password } = request.body;

    const authenticateUserService = new AuthenticateUserService();
    const findUserDataService = new FindUserDataService();

    const token = await authenticateUserService.execute({
      email,
      password,
    });

    const user = await findUserDataService.execute(token);

    return response.json({ token, user });
  }
}

export { AuthenticateUserController };
