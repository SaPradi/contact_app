
import '../styles/titleheader.css'

interface titleHeaderProps {
    title:string
}

const TitleHeader:React.FC<titleHeaderProps> = ({title}) => {
  return (
      <div className="header-section">
        <h1 className='header-section__title'>{title}</h1>
        <hr className='header-section__line'/>
      </div>
  )
}

export default TitleHeader
