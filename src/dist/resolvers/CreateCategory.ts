import { Mutation, Arg} from 'type-graphql'
import { Category } from '../../entity/Category'

const name = Category.name

export class CreateCategory {
  @Mutation(() => Category)
  async createCategory(@Arg("name") name : String) {
    const category = Category.create();
    await category.save();
    return category;
  }
}
