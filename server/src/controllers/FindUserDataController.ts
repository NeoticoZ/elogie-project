import { Request, Response } from "express";
import { FindUserDataService } from "../services/FindUserDataService";

class FindUserDataController {
  async handle(request: Request, response: Response) {
    const { authorization } = request.headers;

    const findUserDataService = new FindUserDataService();

    const [, token] = authorization.split(" ");

    const user = await findUserDataService.execute(token);

    return response.json(user);
  }
}

export { FindUserDataController };
