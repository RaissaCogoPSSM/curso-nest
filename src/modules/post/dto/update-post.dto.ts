export class UpdatePostDTO {
  title: string;
  content?: string | null;
  published?: boolean | null;
  authorId?: number | null;
}
