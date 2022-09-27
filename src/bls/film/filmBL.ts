import { Film } from './../../entities/film/film';
import { BaseMongoDL } from './../../dls/baseMongoDL';
import { Injectable } from "@nestjs/common";
import { FilmDL } from 'src/dls/film.dl';

@Injectable()
export class FilmBL {
  private _baseMongoDL: BaseMongoDL;
  private _filmDL: FilmDL;
  constructor(
    baseMongoDL: BaseMongoDL,
    filmDL: FilmDL,
  ) {
    this._baseMongoDL = baseMongoDL
    this._filmDL = filmDL
  }

  async getPagingAsync(): Promise<Array<Film>> {
    return await this._filmDL.getFilmPagingAsync();
  }
}