import { Mutation, Arg} from 'type-graphql'
import { Category } from '../../entity/Category'

export class CreateCategory {
  @Mutation(() => Category)
  async CreateCategory(@Arg("name") name:String) {
    const category = Category.create();
    await category.save();
    return category;
  }
}
