
import { AppError } from "../../../../erros/AppError";
import { CategoriesRepositoryInMemory } from "../../repositories/in-memory/CategoriesRepositoryInMemory";
import { CreateCategoryUseCase } from "./CreateCategoryUseCase";

let createCategoryUseCase: CreateCategoryUseCase;
let categoriesRepositoryInMomery: CategoriesRepositoryInMemory;

describe("Create Category", () => {
    beforeEach(() => {
        categoriesRepositoryInMomery = new CategoriesRepositoryInMemory();
        createCategoryUseCase = new CreateCategoryUseCase(categoriesRepositoryInMomery);
    });

    it("should be able to create a new category", async () => {
        const category = {
            name: "Category Test",
            description: "Category description test"
        };

        await createCategoryUseCase.execute(category);
        const categoryCreated = await categoriesRepositoryInMomery.findByName(category.name);

        expect(categoryCreated).toHaveProperty("id");
    });

    it("should not be able to create a new category with name exists", async () => {
        expect(async () => {
            const category = {
                name: "Category Test",
                description: "Category description test"
            };

            await createCategoryUseCase.execute(category);
            await createCategoryUseCase.execute(category);
            
        }).rejects.toBeInstanceOf(AppError)

    });

});