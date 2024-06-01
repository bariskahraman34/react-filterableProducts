import { TableWrapperProps } from "./types";
import { VEGGIES } from "../constants";

const veggies = VEGGIES;

export const VegetablesTable = ({inputValue,isProductInStock} : TableWrapperProps) => {
  const filteredProducts = veggies.filter(veggy => veggy.name.toLowerCase().includes(inputValue.toLowerCase()));
  return (
    <>
      {filteredProducts.length > 0 ? 
        <table>
          <thead>
            <tr>
              <th>Veggies</th>
            </tr>
          </thead>
          <tbody>
          {isProductInStock ? filteredProducts.filter(veggy => veggy.inStock).map((veggy) => <tr key={veggy.id}> <td>{`${veggy.name} ${veggy.price}`}</td></tr>) : filteredProducts.map((veggy) => <tr key={veggy.id}> <td style={veggy.inStock ? {color:"#000"} : {color:"red"}} >{`${veggy.name} ${veggy.price}`}</td></tr>)}
          </tbody>
        </table>
        : 
        <></>
      }
    </>
  ) 
}