import { VegetablesTable } from "./vegetablesTable"
import { FruitsTable } from "./fruitsTable"
import { TableWrapperProps } from "./types"
import { Stack } from "@mui/material"

export const TableWrapper = ({inputValue , isProductInStock} : TableWrapperProps) => {

  return (
    <>
    <Stack direction="row" justifyContent="center" alignItems="flex-start" gap="30px" marginTop="50px">
      <FruitsTable  inputValue={inputValue} isProductInStock={isProductInStock} />
      <VegetablesTable inputValue={inputValue} isProductInStock={isProductInStock} />
    </Stack>
    </>
  )
}