import { CreateUserDTO } from 'src/modules/user/dto/create-user.dto';

export class CreatePostDTO {
  title: string;
  content?: string;
  published: boolean;
  authorId: number;
}
