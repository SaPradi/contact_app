import '../styles/skeletonCardContact.css';

const SkeletonCardContact:React.FC = () => {
  return (
    <div className='card__skeleton'>
      
        <div className="card__skeleton__avatar"></div>

        <div className="card__skeleton__content">
            <div className="card__skeleton__name"></div>
            <div className="card__skeleton__email"></div>
        </div>

        <div className="card__skeleton__footer">
            <hr />
            <div className="card__skeleton__footer__button"></div>
        </div>

    </div>
  )
}

export default SkeletonCardContact
