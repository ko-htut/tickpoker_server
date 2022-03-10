import { Entity, PrimaryGeneratedColumn, Column, BaseEntity } from "typeorm";
import "reflect-metadata";

// ユーザー
@Entity("users")
export class User extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  // ユーザーID
  @Column()
  mail: string;

  // 表示名
  @Column()
  nickname: string;

  // チップ枚数
  @Column()
  chip: number = 0;

  // シンボル配列文字列
  @Column()
  symbols: string = "";

  @Column()
  created_at: string = new Date().toISOString();

  @Column()
  updated_at: string = new Date().toISOString();
}
