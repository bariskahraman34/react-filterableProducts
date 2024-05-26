import {TextField,Checkbox,Typography,Stack} from '@mui/material';
import { ChangeEvent } from 'react';
import { InputAreaProps } from './types';

export const InputArea = ({
  setIsProductInStock,
  inputValue,
  setInputValue}:InputAreaProps) => {

  const handleInputChange = (e:ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setInputValue(e.target.value);
  };

  return(
    <Stack>
      <TextField id="outlined-basic" label='Search' placeholder='Search' variant="outlined" value={inputValue} onChange={(e) => handleInputChange(e)} />
      <Stack direction="row" alignItems="center" justifyContent="center">
        <Checkbox onChange={(e) => setIsProductInStock(e.target.checked)} />
        <Typography variant='body1' component="span">Only show products in stock</Typography>
      </Stack>
    </Stack>
  )
}