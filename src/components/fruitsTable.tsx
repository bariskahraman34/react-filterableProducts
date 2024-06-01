import { TableWrapperProps } from "./types";
import {FRUITS} from "../constants"

const fruits = FRUITS;

export const FruitsTable = ({inputValue,isProductInStock}: TableWrapperProps) => {
  const filteredProducts = isProductInStock ? fruits.filter(fruit => fruit.inStock).filter(fruit => fruit.name.toLowerCase().includes(inputValue.toLowerCase())) : fruits.filter(fruit => fruit.name.toLowerCase().includes(inputValue.toLowerCase()));
  return(
    <>
      {filteredProducts.length > 0 ?
        <table>
          <thead>
            <tr>
              <th>Fruits</th>
            </tr>
          </thead>
          <tbody>
            {filteredProducts.map((fruit) => <tr key={fruit.id}> <td style={fruit.inStock ? {color:"#000"} : {color:"red"}} >{`${fruit.name} ${fruit.price}`}</td></tr>)}
          </tbody>
        </table>
        : 
        <></>
      }
    </>
  )
};
