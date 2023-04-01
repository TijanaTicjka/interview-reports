import './CandidateCard.css';
import { useNavigate } from 'react-router';

export const CandidateCard = ({ id, avatar, name, email}) => {
  const navigate = useNavigate()
    return (
      <div className='card' onClick={() => navigate(`/candidates/${id}`)}>
        <img src={avatar} alt={`${name}'s avatar`} />
        <div><h3>{name}</h3></div>
        <div className='email'><p>{email}</p></div>
      </div>
    );
}