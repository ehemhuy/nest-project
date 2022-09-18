import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Film {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;
}