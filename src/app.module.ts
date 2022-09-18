import { BaseMongoDL } from './dls/baseMongoDL';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { FilmBL } from './bls/film/filmBL';
import { FilmsController } from './controllers/films.controller';

@Module({
  imports: [],
  controllers: [AppController, FilmsController],
  providers: [AppService, FilmBL, BaseMongoDL],
})
export class AppModule { }
