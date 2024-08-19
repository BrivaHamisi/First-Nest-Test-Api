import { Body, Controller, Get, Post,Query, Param, Put, Delete } from '@nestjs/common';
import { CreateCatDto } from './dto/create-cat.dto';
import { UpdateCatDto } from './dto/update-cat.dto';
import { ListAllEntities } from './dto/list-all-entities.dto';
import { Cat } from './interfaces/cat.interface'
import { CatsService } from './cats.service'

@Controller('cats')
export class CatsController {
    
    constructor(private catsService: CatsService){}
    @Post()
    async create(@Body() createCatDto:CreateCatDto) {
        this.catsService.create(createCatDto)
    }
    @Get()
    async findall():Promise<Cat[]>{
        return this.catsService.findAll();
    }
    @Get(':id')
    findOne(@Param('id') id:string):string{
        return `This action returns a #${id} cat`;
    }
    @Delete(':id')
    remove(@Param('id') id:string){
        return `This action removes a #${id} cat`
    }
}
