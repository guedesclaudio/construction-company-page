import { IoIosBed } from "react-icons/io";
import { FaShower } from "react-icons/fa";
import { FaCar } from "react-icons/fa";

export const infoData = [
    {   
        icon: () => <IoIosBed style={{fontSize: '26px'}}/>,
        background: 'Highlight',
        h1Color: 'black',
        title: '2 quartos',
        h1: 'Quartos',
        p: 'A unidade conta com 2 súites. A primeira possui 16 metros e a segunda tem 11 metros.'
    },
    {
        icon: () => <FaShower style={{fontSize: '26px'}}/>,
        background: 'Highlight',
        h1Color: 'black',
        title: '3 banheiros',
        h1: 'Banheiros',
        p: 'São 3 banheiros. 8,70 metros, 7 metros e 6,5 metros. Todos revestidos com porcelanato de alta qualidade'
    },
    {
        icon: () => <FaCar style={{fontSize: '26px'}}/>,
        background: 'Highlight',
        h1Color: 'black',
        title: '1 garagem',
        h1: 'Garagem',
        p: 'A garagem possui 1 vaga e ao todo são 14 metros de área.'
    }
]