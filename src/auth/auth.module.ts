import { TokenService } from 'src/token/token.service';
import { JwtStrategy } from './jwt.strategy';
import { jwtConstants } from './constants';
import { LocalStrategy } from './local.strategy';
import { UsuarioModule } from './../usuario/usuario.module';
import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';

@Module({
  imports: [UsuarioModule, PassportModule,
    JwtModule.register({
      secret: jwtConstants.secret,
      signOptions: { expiresIn: '60s' },
    }),
  ],
  providers: [AuthService, LocalStrategy, JwtStrategy],
  exports: [JwtModule, AuthService,TokenService]
})
export class AuthModule {}
