import React from 'react';

const styles2 = {
    width: 120,
    height: 70,
}
// const ButtonCustom = (props) => {

//     // const label = props.label
//     const { label,color } = props;   //Desestructuracion

//     console.log(props)
//     return (
//         <div>
//             <button>
//                 style={{ ...styles, backgroundColor: color }} {label}
//             </button>
//         </div>
//     )
// }

const ButtonCustom = ({ label , color, handleClick }) => {

    // const label = props.label
    // const { label,color } = props;   //Desestructuracion

    // console.log(props)
    return (
        <div>
            <button onClick={handleClick} style={{ ...styles2, backgroundColor: color }}>
                {label}
            </button>   

        </div>
    )
}
export default ButtonCustom;



