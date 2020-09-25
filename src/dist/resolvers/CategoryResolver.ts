import { Query, Resolver, Mutation, Arg} from 'type-graphql'
import { Category } from '../../entity/Category'
import { CreateCategoryInput} from '../../inputs/createCategoryInput'

@Resolver()
export class GetAllCategories {
    @Query(() => [Category])
    GetAllCategories(){
        return Category.find();
    }
}

export class CreateCategory {
  @Mutation(() => Category)
  async CreateCategory(@Arg("name") name:string) {
    const category = Category.create();
    category.name = name;
    await category.save();
    return category;
  }
}

export class updateCategory {
  @Mutation(() => Category)
  async updateCategory(@Arg("id") id: string, @Arg("name") name: string) {
    const category = await Category.findOne({ where: { id }});
  
    if (!category) {
      throw new Error(`Category with id = ${id} does not exist!`);
    } else {
      category.name = name;
      await category.save();
      return category;
    }  
  }   
}

export class deleteCategoryById {
  @Mutation(() => Boolean)
  async deleteCategoryById(@Arg("id") id: string) {
    const category = await Category.findOne({ where: { id } });
    if (!category) throw new Error("Category not found!");
    await category.remove();
    return true;
  }
  
  }

  export class deleteCategoryByName {
    @Mutation(() => Boolean)
    async deleteCategoryByName(@Arg("name") name: string) {
      const category = await Category.findOne({ where: { name } });
      if (!category) throw new Error("Category not found!");
      await category.remove();
      return true;
    }
    
    }