// src/models/User.ts

import { BelongsTo, Column, DataType, ForeignKey, Model, Table } from 'sequelize-typescript';
import { Color } from './Color';

@Table({
  tableName: 'users',
  modelName: 'User',
})
export class User extends Model {
  @Column(DataType.STRING)
  name?: string

  @ForeignKey(() => Color)
  @Column(DataType.NUMBER)
  carColorId?: number;

  @BelongsTo(() => Color)
  carColor?: Color;
}

