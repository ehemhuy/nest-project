import { Film } from './../entities/film/film';
import { FilmBL } from './../bls/film/filmBL';
import { Controller, Get, Req } from '@nestjs/common';
import { Request } from 'express';

@Controller('films')
export class FilmsController {
  private _filmBL: FilmBL;
  constructor(filmBL: FilmBL) {
    this._filmBL = filmBL
  }
  @Get()
  async findAll(@Req() request: Request): Promise<Array<Film>> {
    try {
      return await this._filmBL.getPagingAsync();
    } catch (error) {

    }
  }
}