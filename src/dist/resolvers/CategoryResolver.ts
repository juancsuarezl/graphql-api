import { Query, Resolver, Mutation, Arg} from 'type-graphql'
import { Category } from '../../entity/Category'

@Resolver()
export class GetAllCategories {
    @Query(() => [Category])
    GetAllCategories(){
        return Category.find();
    }
}

export class CreateCategory {
  @Mutation(() => Category)
  async CreateCategory(@Arg("name") name:String) {
    const category = Category.create();
    await category.save();
    return category;
  }
}
