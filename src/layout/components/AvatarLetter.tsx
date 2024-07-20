
import { useEffect, useState } from 'react';
import '../styles/avatarLetter.css';
import { generateRandomColor } from '../../utils/random';
import { extractLetterAvatar } from '../../utils/string';


interface AvatarLetterProps {
    first_name: string;
    last_name: string;
}

const AvatarLetter: React.FC<AvatarLetterProps> = ({first_name,last_name}) => {
    const [backgroundColor, setBackgroundColor] = useState<string>('');

    useEffect(()=>{
        setBackgroundColor(generateRandomColor());
        
    },[])

    return (
        <div className="avatar" style={{backgroundColor}}>
            <p className="avatar__letter"> {extractLetterAvatar(first_name,last_name)} </p>
        </div>
    )
}

export default AvatarLetter
