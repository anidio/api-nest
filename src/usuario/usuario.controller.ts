import { ResultadoDto } from './../dto/resultado.dto';
import { UsuarioCadastrarDto } from './dto/usuario.cadastrar.dto';
import { Usuario } from './usuario.entity';
import { UsuarioService } from './usuario.service';
import { Body, Controller, Get, Post } from "@nestjs/common";

@Controller('usuario')
export class UsuarioController{
    constructor(private readonly usuarioservice: UsuarioService){}

    @Get('listar')
    async listar(): Promise<Usuario[]>{
        return this.usuarioservice.listar()
    }

    @Post('cadastrar')
    async cadastrar(@Body() data: UsuarioCadastrarDto): Promise<ResultadoDto>{
       
        return this.usuarioservice.cadastrar(data)

        
    }
}