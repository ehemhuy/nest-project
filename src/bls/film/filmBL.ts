import { BaseMongoDL } from './../../dls/baseMongoDL';
import { Injectable } from "@nestjs/common";

@Injectable()
export class FilmBL {
  private _baseMongoDL: BaseMongoDL;
  constructor(
    baseMongoDL: BaseMongoDL
  ) {
    this._baseMongoDL = baseMongoDL
  }

  async getPagingAsync(): Promise<string> {
    return await this._baseMongoDL.getPagingAsync();
  }
}