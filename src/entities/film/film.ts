import { ObjectID } from 'mongodb';
import { Column, Entity, ObjectIdColumn } from 'typeorm';

@Entity()
export class Film {
    @ObjectIdColumn()
    _id?: ObjectID = new ObjectID();

    @Column()
    filmId: string;

    @Column()
    title: string;

    @Column()
    imgUrl: string;

    @Column()
    createdDate: Date;
}