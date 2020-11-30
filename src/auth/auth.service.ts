import {
  forwardRef,
  Inject,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { InjectQueryService, QueryService } from '@nestjs-query/core';
import { ReadResolver } from '@nestjs-query/query-graphql';
import { UserEntity } from '../user/entities/user.entity';
import { LoginResponseDto } from './dto/login-response.dto';
import { AuthenticatedUser, JwtPayload } from './auth.interfaces';
import { UserDTO } from '../user/user.dto';
import { UserService } from 'src/user/user.service';

@Injectable()
export class AuthService {
  constructor(
    @Inject(forwardRef(() => UserService))
    private usersService: UserService,
    private jwtService: JwtService,
  ) {}

  async validateUser(
    username: string,
    pass: string,
  ): Promise<AuthenticatedUser | null> {
    const user = await this.usersService.findOneByUsername(username);
    // dont use plain text passwords in production!
    if (user && user.password === pass) {
      const { password, ...result } = user;
      return result;
    }
    return null;
  }

  async currentUser(authUser: AuthenticatedUser): Promise<UserDTO> {
    try {
      const user = await this.usersService.findOne({ id: authUser.id });
      return user;
    } catch (e) {
      throw new UnauthorizedException();
    }
  }

  login(user: AuthenticatedUser): Promise<LoginResponseDto> {
    const payload: JwtPayload = { username: user.username, sub: user.id };
    return Promise.resolve({
      // eslint-disable-next-line @typescript-eslint/naming-convention
      accessToken: this.jwtService.sign(payload),
    });
  }
}
