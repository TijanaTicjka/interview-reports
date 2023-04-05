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
                <h1 className='candidates-info'>{candidate.name}</h1>
                <p className='title-p'>Email:</p>
                <h1 className='candidates-email'>{candidate.email}</h1>
            </div>
            <div className='info'> 
                <p className='title-p'>Date of birth:</p>
                <h1 className='candidates-info'>{formattedBirthday}</h1>
                <p className='title-p'>Education:</p>
                <h1 className='candidates-info'>{candidate.education}</h1>
            </div> 
        </div>
    )
}