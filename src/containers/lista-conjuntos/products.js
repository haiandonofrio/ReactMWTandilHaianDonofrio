import { Promise } from "q";

const cuchis = [{
    id: 1,
    nombre: 'cuchi1',
    imageURL: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ65d-t7nhFWd98coa7DRytc1hLgKC1MKdzJw&usqp=CAU',
    cantidad: 10,
    precio: 1500
},
{
    id: 2,
    nombre: 'cuchi2',
    imageURL: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ65d-t7nhFWd98coa7DRytc1hLgKC1MKdzJw&usqp=CAU',
    cantidad: 0,
    precio: 1860
    },
{
    id: 3,
    nombre: 'cuchi3',
    imageURL: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ65d-t7nhFWd98coa7DRytc1hLgKC1MKdzJw&usqp=CAU',
    cantidad: 17,
    precio: 2500
    },
{
    id: 4,
    nombre: 'cuchi4',
    imageURL: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ65d-t7nhFWd98coa7DRytc1hLgKC1MKdzJw&usqp=CAU',
    cantidad: 5,
    precio: 3500
},

]

export const getCuchi = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
        resolve (cuchis)
        }, 2000);
    })
}