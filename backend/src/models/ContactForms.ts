import { BaseEntity, Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm'

@Entity()
export class ContactForm extends BaseEntity {
    constructor(name: string, phone: string, message: string) {
        super()
        this.name = name
        this.phone = phone
        this.message = message
    }
    
    @PrimaryGeneratedColumn()
        id: number

    @Column()
        name: string

    @Column({ nullable: true })
        phone: string

    @Column({ nullable: true })
        message: string


}