import { InputArea } from './inputArea'
import { TableWrapper } from './tableWrapper'
import { useState } from 'react';

export const AppWrapper = () => {
  const [inputValue , setInputValue] = useState("");
  const [isProductInStock , setIsProductInStock] = useState(false);
  return (
    <>
      <InputArea inputValue={inputValue} setInputValue={setInputValue} isProductInStock={isProductInStock} setIsProductInStock={setIsProductInStock} />
      <TableWrapper inputValue={inputValue} isProductInStock={isProductInStock} />
    </>
  )
}
