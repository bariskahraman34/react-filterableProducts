import { Dispatch, SetStateAction } from "react"

export type TableWrapperProps = {
  inputValue: string,
  isProductInStock: boolean
}

type FruitOrVeggie = {
  id:string,
  name:string,
  price:string,
  inStock:boolean
}

export type FruitsOrVeggies = FruitOrVeggie[];

export type InputAreaProps = {
  isProductInStock: boolean,
  setIsProductInStock: Dispatch<SetStateAction<boolean>>,
  inputValue: string,
  setInputValue: Dispatch<SetStateAction<string>>
}