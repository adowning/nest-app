"use strict";
// import {
//   Column,
//   CreateDateColumn,
//   Entity,
//   PrimaryGeneratedColumn,
//   UpdateDateColumn,
//   OneToMany,
//   JoinTable,
// } from 'typeorm';
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.UserEntity = void 0;
// @Entity({ name: 'user' })
// export class UserEntity {
//   @PrimaryGeneratedColumn()
//   id!: number;
//   @Column()
//   username!: string;
//   @Column({ nullable: true })
//   password?: string;
//   @CreateDateColumn()
//   created!: Date;
//   @UpdateDateColumn()
//   updated!: Date;
//   //   @OneToMany(() => TodoItemEntity, (todo) => todo.owner)
//   //   @JoinTable()
//   //   todoItems!: TodoItemEntity[];
// }
var typeorm_1 = require("typeorm");
// import { TodoItemEntity } from '../todo-item/todo-item.entity';
var UserEntity = /** @class */ (function () {
    function UserEntity() {
    }
    __decorate([
        typeorm_1.PrimaryGeneratedColumn()
    ], UserEntity.prototype, "id");
    __decorate([
        typeorm_1.Column()
    ], UserEntity.prototype, "username");
    __decorate([
        typeorm_1.Column({ nullable: true })
    ], UserEntity.prototype, "password");
    __decorate([
        typeorm_1.CreateDateColumn()
    ], UserEntity.prototype, "created");
    __decorate([
        typeorm_1.UpdateDateColumn()
    ], UserEntity.prototype, "updated");
    UserEntity = __decorate([
        typeorm_1.Entity({ name: 'user' })
    ], UserEntity);
    return UserEntity;
}());
exports.UserEntity = UserEntity;
