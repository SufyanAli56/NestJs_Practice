import { Injectable } from '@nestjs/common';

@Injectable()
export class CategroiesService {
    getCategrios(){
        return ['Mobile','Me','And Laptop']
    }
}
