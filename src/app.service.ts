import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
    getHello(): string {
        return 'Hello! from Todo rest API! Go to <a href="https://simple-todo-two-coral.vercel.app/swagger">My Swagger UI<a>';
    }
}