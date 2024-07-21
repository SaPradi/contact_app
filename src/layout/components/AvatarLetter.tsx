import '../styles/avatarLetter.css';
import { extractLetterAvatar } from '../../utils/string';


interface AvatarLetterProps {
    first_name: string;
    last_name: string;
}

const AvatarLetter: React.FC<AvatarLetterProps> = ({first_name,last_name}) => {

    return (
        <div className="avatar">
            <p className="avatar__letter"> {extractLetterAvatar(first_name,last_name)} </p>
        </div>
    )
}

export default AvatarLetter
