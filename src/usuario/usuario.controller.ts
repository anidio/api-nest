import { JwtAuthGuard } from './../auth/jwt-auth.guard';
import { AuthService } from './../auth/auth.service';
import { ResultadoDto } from './../dto/resultado.dto';
import { UsuarioCadastrarDto } from './dto/usuario.cadastrar.dto';
import { Usuario } from './usuario.entity';
import { UsuarioService } from './usuario.service';
import { Body, Controller, Get, Post, UseGuards, Request } from "@nestjs/common";
import { AuthGuard } from '@nestjs/passport';

@Controller('usuario')
export class UsuarioController{
    constructor(private readonly usuarioservice: UsuarioService,
        private authService: AuthService
        ){}
    @UseGuards(JwtAuthGuard)
    @Get('listar')
    async listar(): Promise<Usuario[]>{
        return this.usuarioservice.listar()
    }

    @Post('cadastrar')
    async cadastrar(@Body() data: UsuarioCadastrarDto): Promise<ResultadoDto>{
       
        return this.usuarioservice.cadastrar(data)
    }

    @UseGuards(AuthGuard('local'))
    @Post('login')
    async login(@Request() req) {
        return this.authService.login(req.user);
      
    }
}