import { getCustomRepository } from "typeorm";
import { UsersRepositories } from "../repositories/UsersRepositories";

import { decode } from "jsonwebtoken";

class FindUserDataService {
  async execute(token: string) {
    const usersRepositories = getCustomRepository(UsersRepositories);

    const tokenDecoded = decode(token, { json: true });

    const user = await usersRepositories.findOne({
      email: tokenDecoded.email,
    });

    if (!user) {
      throw new Error("The user does not exist");
    }

    return user;
  }
}

export { FindUserDataService };
