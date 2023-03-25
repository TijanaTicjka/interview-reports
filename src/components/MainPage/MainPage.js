import './MainPage.css';
import { useNavigate } from 'react-router';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';

export const MainPage = () => {
    const navigate = useNavigate();
    //      useEffect(()=> {
//         fetch('http://localhost:3333/api/candidates',{
//   mode: 'cors',
//   headers: {
//     'Access-Control-Allow-Origin':'*'
//   }
// }).then(data=>data.json())
//         .then(res => {
//             console.log(res);
//         })
//     },[])
    return (
        <div className='dummy'>
            <h1 className='title' onClick={() => navigate('/')}> Hiring agency HAREM </h1>
            <Link to="/candidates">Go to Candidates</Link>
            <div>
            </div>
        </div>
    )
}