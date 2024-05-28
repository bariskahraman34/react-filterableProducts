import { TableWrapperProps , FruitsOrVeggies } from "./types";
import { v4 as uuidv4 } from 'uuid';

export const FruitsTable = ({inputValue,isProductInStock}: TableWrapperProps) => {
  const fruits : FruitsOrVeggies = [
    {id:uuidv4(),name:"Apple",price:'1$' , inStock:false},
    {id:uuidv4(),name:"Orange",price:'2$' , inStock:false},
    {id:uuidv4(),name:"Strawberry",price:'3$' , inStock:true},
    {id:uuidv4(),name:"Banana",price:'4$' , inStock:true},
    {id:uuidv4(),name:"Grape",price:'5$' , inStock:false},
    {id:uuidv4(),name:"Melon",price:'6$' , inStock:true},
    {id:uuidv4(),name:"Watermelon",price:'7$' , inStock:false},
    {id:uuidv4(),name:"Kiwi",price:'8$' , inStock:true},
    {id:uuidv4(),name:"Apricot",price:'9$' , inStock:true},
    {id:uuidv4(),name:"Pineapple",price:'10$' , inStock:false},
    {id:uuidv4(),name:"Mango",price:'11$' , inStock:true},
    {id:uuidv4(),name:"Pomegranate",price:'12$' , inStock:true},
    {id:uuidv4(),name:"Raspberry",price:'13$' , inStock:true}
  ]

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
