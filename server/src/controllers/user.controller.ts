import { Request, Response } from 'express';
import log from '../utils/logger.utils';
import { deleteUser, getAllUsers, getUserById, updateUser } from '../service/user.service';

export const getUserHandler = async (req: Request, res: Response) => {
  const id = req.params.id;
  try {
    const user = await getUserById(id);
    res.status(200).json(user);
  } catch (err: any) {
    log.error(err);
    const message = err instanceof Error ? err.message : 'Unknown error ocurred';
    res.status(500).json({ message, error: err });
  }
};

export const getAllUsersHandler = async (req: Request, res: Response) => {
  try {
    const users = await getAllUsers();
    res.status(200).json(users);
  } catch (err: any) {
    log.error(err);
    const message = err instanceof Error ? err.message : 'Unknown error ocurred';
    res.status(500).json({ message, error: err });
  }
};

export const updateUserHandler = async (req: Request, res: Response) => {
  const id = req.params.id;
  try {
    const user = await updateUser(id, req.body);

    if (!user) {
      return res.status(404).json({ message: 'No user with such ID' });
    }

    res.status(200).json(user);
  } catch (err: any) {
    log.error(err);
    const message = err instanceof Error ? err.message : 'Unknown error ocurred';
    res.status(500).json({ message, error: err });
  }
};

export const deleteUserHandler = async (req: Request, res: Response) => {
  const id = req.params.id;
  try {
    const user = await deleteUser(id);

    if (!user) {
      return res.status(404).json({ message: 'No user with such ID' });
    }

    res.sendStatus(204);
  } catch (err: any) {
    log.error(err);
    const message = err instanceof Error ? err.message : 'Unknown error ocurred';
    res.status(500).json({ message, error: err });
  }
};
