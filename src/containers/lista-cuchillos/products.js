import { Promise } from "q";

const cuchis = [{
    id: 1,
    title: 'cuchi1',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ65d-t7nhFWd98coa7DRytc1hLgKC1MKdzJw&usqp=CAU',
    stock: 10,
    price: 1500
},
{
    id: 2,
    title: 'cuchi2',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ65d-t7nhFWd98coa7DRytc1hLgKC1MKdzJw&usqp=CAU',
    stock: 0,
    price: 1860
    },
{
    id: 3,
    title: 'cuchi3',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ65d-t7nhFWd98coa7DRytc1hLgKC1MKdzJw&usqp=CAU',
    stock: 17,
    price: 2500
    },
{
    id: 4,
    title: 'cuchi4',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ65d-t7nhFWd98coa7DRytc1hLgKC1MKdzJw&usqp=CAU',
    stock: 5,
    price: 3500
},

]

export const getCuchi = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
        resolve (cuchis)
        }, 2000);
    })
}