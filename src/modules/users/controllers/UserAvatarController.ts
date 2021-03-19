import { classToClass } from "class-transformer";
import { Request, response, Response } from "express";
import UpdateUserAvatarService from "../services/UpdateUserAvatarService";

export default class UsersAvatarController {

  public async update(req: Request, res: Response): Promise<Response> {

    const updateAvatar = new UpdateUserAvatarService();

    const user = await updateAvatar.execute({
      user_id: req.user.id,
      avatarFileName: req.file.filename
    })

    return res.json(classToClass(user));

  }
}
