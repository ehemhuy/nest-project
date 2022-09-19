import { Film } from 'src/entities/film/film';
import { Injectable } from '@nestjs/common';
import { Interval } from '@nestjs/schedule';
import * as cheerio from 'cheerio';
import { FilmDL } from 'src/dls/film.dl';
import axios from 'axios';

@Injectable()
export class FilmJob {
    private _filmDL: FilmDL;
    constructor(filmDL: FilmDL) {
        this._filmDL = filmDL
    }

    // @Cron('45 * * * * *')
    @Interval(1000 * 60 * 60 * 1)
    // @Interval(5000)
    handleCron() {
        const URL = process.env.URL_CRAWL;
        axios.get(URL).then(r => r.data).then(body => {
            const $ = cheerio.load(body);
            const currentTime = new Date(new Date().toUTCString());
            $('article').each((_, el: cheerio.Element) => {
                const filmId = $(el).attr('id');
                this._filmDL.isExistFilmAsync(filmId).then(isExist => {
                    if (!isExist) {
                        const itemToInsert: Film = {
                            title: $(el).find('h2.entry-title a').text(),
                            imgUrl: $(el).find('div.entry-media img').attr('data-src'),
                            createdDate: currentTime,
                            filmId
                        }
                        this._filmDL.insertFilmAsync(itemToInsert)
                    }
                })
            })
        })
    }
}