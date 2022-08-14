import { Injectable } from "@nestjs/common";
import {status} from '../../data/data.json';

@Injectable()

export class StatusService {
    getAllStatus():string{
        return JSON.stringify(status)
    }
 
}