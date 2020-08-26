import { plainToClass } from 'class-transformer';
import { BeforeUpdate, Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';

@Entity()
export class Point {
  @ApiProperty()
  @PrimaryGeneratedColumn('increment')
  id: number;

  @ApiProperty()
  @Column('text')
  address: string;

  @ApiProperty()
  @Column('number')
  type: number;

  @ApiProperty()
  @Column('number')
  specialization: number;

  @ApiProperty()
  @Column('text')
  info_number: string;

  @ApiProperty()
  @Column('text')
  info_action: string;

  @ApiProperty()
  @Column('text')
  scheme_number: string;

  @ApiProperty()
  @Column('text')
  square: string;

  @ApiProperty()
  @Column('number')
  status : number;

  @ApiProperty()
  @CreateDateColumn({ type: 'timestamptz' })
  created_at: string;
  @ApiProperty()
  @UpdateDateColumn({ type: 'timestamptz' })
  updated_at: string;

  static createFromObject<T>(object: T): Point {
    return plainToClass(Point, object);
  }

  @BeforeUpdate()
  private update?() {
    this.updated_at = new Date().toISOString();
  }
}
