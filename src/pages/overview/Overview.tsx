import Contacts from "../contacts/Contacts"
import Favorites from "../favorites/Favorites"

import './styles/overview.css';

const Overview:React.FC = () => {




  return (
    <div className="overview">

      <Favorites />
      <Contacts/>

    </div>
  )
}

export default Overview
