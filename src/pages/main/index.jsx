import React from 'react';
import '../index.css';
import ButtonCustom from '../../components/button';
import Navbar from '../../components/navbar';
import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';
import Stack from '@mui/material/Stack';


const Main = () => {
    //SIEMPRE CREAMOS ESTADOS ASI
//          estado     accion / update                  valor inicial
    const [inputValue, setInputValue] = React.useState('0');

    const handleClick = () => {
        if (isNaN(inputValue)) {
            return;
        }
        inputValue < 5 ? setInputValue(parseInt(inputValue) + 1) :
<Alert severity="error">
  <AlertTitle>Error</AlertTitle>
  This is an error alert — <strong>check it out!</strong>
</Alert>;
    }

    const resetClick = () => {
    setInputValue(0);
    }

    const handlevalue = (event) => {
    setInputValue(event.target.value)
    }
    return (
        <div className='contenedor' sx={{ display: 'flex', flexDirection: 'column'}}>
            <Navbar />   
            <ButtonCustom label={'SUMAR 1'} color={'red'} handleClick={handleClick} />
            <ButtonCustom label={'Reiniciar'} color={'red'} handleClick={resetClick} />
            <div>
                                                        {/* evento que recibe el valor en el cambio */}
                <input style={{}} value={inputValue} onChange={handlevalue} />
            </div>
        </div>
    )
}

export default Main