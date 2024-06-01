import { v4 as uuidv4 } from 'uuid';
import {FruitsOrVeggies} from './components/types';

export const VEGGIES : FruitsOrVeggies = [
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

export const FRUITS : FruitsOrVeggies = [
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