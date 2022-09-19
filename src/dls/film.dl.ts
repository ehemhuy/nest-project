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
    async insertFilmAsync(f: Film = null): Promise<void> {
        await this.filmsRepository.insert(f);
    }

    async isExistFilmAsync(filmId: string): Promise<boolean> {
        const count = await this.filmsRepository.countBy({ filmId });
        const res = count > 0
        return res;
    }
}
