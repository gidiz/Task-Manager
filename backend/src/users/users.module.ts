import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';
import { User } from './user.entity';
import { AuthController } from './auth.controller';
import { JwtModule } from '@nestjs/jwt';
import { LoginController } from './login.controller';

@Module({
  imports: [
    TypeOrmModule.forFeature([User]),
    JwtModule.register({
      secret: 'secret-key', // החלף ב־process.env.JWT_SECRET בפרודקשן
      signOptions: { expiresIn: '1h' },
    }),
  ], // ✅ זה החלק הקריטי
  controllers: [UsersController, AuthController, LoginController],
  providers: [UsersService],
})
export class UsersModule {}
