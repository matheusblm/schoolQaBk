import { createParamDecorator, ExecutionContext } from '@nestjs/common';
import { UserDto } from 'src/modules/user/dto/user.dto';
import { AuthRequest } from '../models/AuthRequest';

export const CurrentUser = createParamDecorator(
  (data: unknown, context: ExecutionContext): UserDto => {
    const request = context.switchToHttp().getRequest<AuthRequest>();

    return request.user;
  },
);
