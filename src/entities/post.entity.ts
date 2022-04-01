import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { User } from './user.entity';

@Entity()
export class Post {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 50, nullable: false })
  title: string;

  @Column({ length: 50, nullable: true })
  metaTitle: string;

  @Column({ length: 50, nullable: false })
  slug: string;

  @Column()
  summary: string;

  @Column({ default: 0 })
  published: number;

  @Column()
  createAt: Date;

  @Column()
  updateAt: Date;

  @Column({ nullable: true })
  publishedAt: Date;

  @ManyToOne(() => User, (user) => user.posts)
  user: User;
}