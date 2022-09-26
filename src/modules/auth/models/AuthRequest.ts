import { Request } from 'express';
import { UserDto } from 'src/modules/user/dto/user.dto';

export interface AuthRequest extends Request {
  user: UserDto;
}
