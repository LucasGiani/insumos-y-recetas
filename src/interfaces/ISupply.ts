export interface ISupply {
  id: number;
  name: string;
  amount: number;
  price: number;
  unit: Unit;
}

export type Unit = "Kg" | "Gr";
