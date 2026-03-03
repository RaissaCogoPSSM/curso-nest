import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreatePostDTO } from './dto/create-post.dto';
import { UpdatePostDTO } from './dto/update-post.dto';
import { CreateUserDTO } from '../user/dto/create-user.dto';

@Injectable()
export class PostService {
  constructor(private readonly prisma: PrismaService) {}

  async create(data: CreatePostDTO) {
    return await this.prisma.post.create({ data });
  }

  async findAll(authorId: number) {
    return await this.prisma.post.findMany({ where: { authorId } });
  }

  async findById(id: number) {
    return this.prisma.post.findUnique({ where: { id } });
  }

  async update(id: number, dto: UpdatePostDTO) {
    return await this.prisma.post.update({ where: { id }, data: dto });
  }

  async delete(id: number) {
    return await this.prisma.post.delete({ where: { id } });
  }
}
