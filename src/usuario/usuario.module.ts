import { AuthModule } from './../auth/auth.module';
import { UsuarioController } from './usuario.controller';
import { forwardRef, Module } from '@nestjs/common';
import { DatabaseModule } from '../database/database.module';
import { usuarioProviders } from './usuario.providers';
import { UsuarioService } from './usuario.service';

@Module({
  imports: [ DatabaseModule , forwardRef(() => AuthModule)],
  controllers: [UsuarioController],
  providers: [
    ...usuarioProviders,
    UsuarioService,
  ],
  exports: [UsuarioService]
})
export class UsuarioModule {}