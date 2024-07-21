import SkeletonCardContact from "./SkeletonCardContact"

const ListSkeletonCardContact:React.FC = () => {
  return (
    <div className="list-contact">
      {
        [...Array(4)].map((_,i)=>(
            <SkeletonCardContact key={i}/>
        ))
      }
    </div>
  )
}

export default ListSkeletonCardContact
