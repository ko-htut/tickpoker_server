import { Entity, PrimaryGeneratedColumn, Column, BaseEntity } from "typeorm";
import "reflect-metadata";

// ユーザーオプション
@Entity("user_options")
export class UserOption extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  // ユーザーID
  @Column()
  user_id: number;

  // プレイヤーID
  @Column()
  player_id: string = "";

  // アイコンURL
  @Column()
  icon_url: string;

  // 自己紹介
  @Column()
  self_intro: string = "";

  @Column()
  created_at: string = new Date().toISOString();

  @Column()
  updated_at: string = new Date().toISOString();
}
