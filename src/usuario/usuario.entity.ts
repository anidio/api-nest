import { Servico } from './../servico/servico.entity';
import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';

@Entity()
export class Usuario {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 100 })
  nome: string;

  @Column()
  email: string;

  @Column()
  password: string;

  @Column()
  created: Date;

  @Column()
  modified: Date;

  @Column()
  last_login: Date;
  
  @OneToMany(() => Servico, servico => servico.usuario)
  servicos: Servico[];
}