import './InfoSection.css';

export const InfoSection = ({ candidate }) => {
    console.log(candidate);
    if (!candidate) return null;
    
    const formattedBirthday = new Date(candidate.birthday).toLocaleDateString('ru-RU') + ".";
    return (
        <div className='info-box gradient-border-info'>
            <div className='image'>
                <div className='circlar-frame'>
                    <img src={candidate.avatar}></img>
                </div>
            </div>
            <div className='info'>
                <p className='title-p'>Name:</p>
                <h2>{candidate.name}</h2>
                <p className='title-p'>Email:</p>
                <h2>{candidate.email}</h2>
            </div>
            <div className='info'> 
                <p className='title-p'>Date of birth:</p>
                <h2>{formattedBirthday}</h2>
                <p className='title-p'>Education:</p>
                <h2>{candidate.education}</h2>
            </div> 
        </div>
    )
}