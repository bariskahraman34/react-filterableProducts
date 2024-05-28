import { TableWrapperProps, FruitsOrVeggies } from "./types";
import { v4 as uuidv4 } from 'uuid';

export const VegetablesTable = ({inputValue,isProductInStock} : TableWrapperProps) => {
  const veggies : FruitsOrVeggies = [
    {id:uuidv4(),name:"Carrot",price:'1$' , inStock:false},
    {id:uuidv4(),name:"Pepper",price:'2$' , inStock:false},
    {id:uuidv4(),name:"Cucumber",price:'3$' , inStock:true},
    {id:uuidv4(),name:"Tomato",price:'4$' , inStock:true},
    {id:uuidv4(),name:"Onion",price:'5$' , inStock:true},
    {id:uuidv4(),name:"Potato",price:'6$' , inStock:false},
    {id:uuidv4(),name:"Lettuce",price:'7$' , inStock:true},
    {id:uuidv4(),name:"Broccoli",price:'8$' , inStock:true},
    {id:uuidv4(),name:"Garlic",price:'9$' , inStock:true},
    {id:uuidv4(),name:"Asparagus",price:'10$' , inStock:true}
  ];

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