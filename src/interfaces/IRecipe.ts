import { ISupply } from "./ISupply";

export interface IRecipe {
  id: number;
  name: string;
  ingredients: ISupply[];
}

export type Unit = "Kg" | "Gr";
