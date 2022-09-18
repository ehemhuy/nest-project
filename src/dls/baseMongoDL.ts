import { Injectable } from "@nestjs/common";

@Injectable()
export class BaseMongoDL {
    async getPagingAsync(): Promise<string> {
        return 'aa';
    }
}