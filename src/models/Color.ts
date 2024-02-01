// src/models/Color.ts

import { Column, DataType, Model, Table } from 'sequelize-typescript';

@Table({
  tableName: 'colors',
  modelName: 'Color',
})
export class Color extends Model {
  @Column(DataType.STRING)
  name?: string | null;
}

