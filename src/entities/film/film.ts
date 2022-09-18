import { ObjectID } from 'mongodb';
import { Column, Entity, ObjectIdColumn } from 'typeorm';

@Entity()
export class Film {
    @ObjectIdColumn()
    _id?: ObjectID = new ObjectID();

    @Column()
    name: string;
}