import { Mutation, Arg} from 'type-graphql'
import { Category } from '../../entity/Category'

const name = Category.name
export class CreateCategory {
  @Mutation((name) => Category)
  async createCategory(name : String) {
    const category = Category.create();
    await category.save();
    return category;
  }
}
