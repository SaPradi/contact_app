import { useDispatch, useSelector } from 'react-redux';
import CloseIcon from '../../icons/CloseIcon';
import DeleteIcon from '../../icons/DeleteIcon';
import '../styles/modalConfirmDelete.css';
import { AppDispatch, RootState } from '../../store/store';
import { clearContactDelete, removeContact } from '../../store/contactSlice';
import { closeModal } from '../../store/modalSlice';

const ModalConfirmDelete:React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { contactDeleted } = useSelector((state:RootState)=> state.contact)


  const handleCancel = ()=>{
    dispatch(closeModal())
    dispatch(clearContactDelete())
  }
  const handleDelete = ()=>{
    dispatch(closeModal())
    dispatch(removeContact())
  }

  return (
    <div className="modal-confirm-delete">
      
      <h1> You want to delete { contactDeleted ? `${contactDeleted.first_name}` : ''} ?</h1>

      <div className="modal-confirm-delete__bottons">

        <button onClick={()=>handleCancel()} className='modal-confirm-delete__bottons__close'>
            Cancel
          <CloseIcon/>
        </button>

        <button onClick={()=> handleDelete()} className='modal-confirm-delete__bottons__delete'>
          <span>Delete</span>
          <DeleteIcon/>
        </button>

      </div>
    

    </div>
  )
}

export default ModalConfirmDelete
