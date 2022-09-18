import { Injectable } from "@nestjs/common";
import { Film } from "src/entities/film/film";
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from "typeorm";

@Injectable()
export class FilmDL {
    constructor(
        @InjectRepository(Film)
        private filmsRepository: Repository<Film>,
    ) { }
    async insertFilmAsync(): Promise<string> {
        const f: Film = {
            id: 1,
            name: 'huy'
        }
        const res = await this.filmsRepository.insert(f);
        console.log(res);

        return 'aa';
    }
}
