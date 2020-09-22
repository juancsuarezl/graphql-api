import { InputType, Field } from "type-graphql";

/*@Entity("User")
export class User {
  @PrimaryGeneratedColumn({ type: "int", name: "id" })
  id!: number;

  @Column("varchar", { name: "name", length: 255 })
  name!: string;

  @Column("varchar", { name: "email", length: 255 })
  email!: string;

  @Column("varchar", { name: "password", length: 255 })
  password!: string;*/

@InputType()
export class CreateUserInput {
  @Field()
  name!: string;

  @Field()
  email!: string;

  @Field()
  password!: string;

}