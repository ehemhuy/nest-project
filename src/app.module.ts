import { BaseMongoDL } from './dls/baseMongoDL';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { FilmBL } from './bls/film/filmBL';
import { FilmsController } from './controllers/films.controller';
import { ScheduleModule } from '@nestjs/schedule';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Film } from './entities/film/film';
import { FilmDL } from './dls/film.dl';
import { ConfigModule } from '@nestjs/config';
import { FilmJob } from './jobs/films.job';

@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRoot({
      type: 'mongodb',
      url: process.env.MONGODB_URL,
      database: process.env.DATABASE_NAME,
      entities: [Film]
    }),
    TypeOrmModule.forFeature([Film]),
    ScheduleModule.forRoot()],
  controllers: [
    AppController,
    FilmsController],
  providers: [
    AppService,
    FilmBL,
    BaseMongoDL,
    FilmDL,
    FilmJob],
})
export class AppModule { }
