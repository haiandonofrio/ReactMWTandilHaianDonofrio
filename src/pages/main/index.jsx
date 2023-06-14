import React from 'react';
import '../index.css';
import ButtonCustom from '../../components/button';
import Navbar from '../../components/navbar';
import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';
import Stack from '@mui/material/Stack';
import Message from '../../components/message';


const Main = () => {
    //SIEMPRE CREAMOS ESTADOS ASI
//          estado     accion / update                  valor inicial
    const [inputValue, setInputValue] = React.useState('0');

    const noStock = () => {
            return (
                <div>
                    <Message />
                </div>)
    }   
    
    const handleClick = () => {
        if (isNaN(inputValue)) {
            return;
        }
        inputValue < 5 ? setInputValue(parseInt(inputValue) + 1) : noStock()
    }

    const resetClick = () => {
    setInputValue(0);
    }

    const handlevalue = (event) => {
    setInputValue(event.target.value)
    }
    return (
        <section>
            <Navbar label={inputValue} />   
            <div className='contenedor' style={{ display: 'flex', flexDirection: 'column', alignItems:'center'}}>
            <h2 style={{textAlign:'center', color:'white'}}>Somos una empresa dedicada a la manufacturación de cuchillos regionales!</h2>
            <ButtonCustom label={'Agregar al carrito'} color={'red'} handleClick={handleClick} />
            <ButtonCustom label={'Reiniciar'} color={'red'} handleClick={resetClick} />
            <div>
                                                        {/* evento que recibe el valor en el cambio */}
                <input style={{}} value={inputValue} onChange={handlevalue} />
            </div>
            </div>
            </section>
    )
}

export default Main