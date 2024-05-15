import { BaseEntity, Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm'

@Entity()
export class Users extends BaseEntity {
    constructor(name: string, phone: string, message: string) {
        super()
        this.name = name
    }
    
    @PrimaryGeneratedColumn()
        id: number

    @Column()
        name: string

    @Column({ nullable: true })
        role: string

    @Column({ nullable: true })
        identification: string
}