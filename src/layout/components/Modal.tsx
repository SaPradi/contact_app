import { useDispatch } from "react-redux";
import { AppDispatch, RootState} from "../../store/store";
import { useSelector } from "react-redux";
import '../styles/modal.css';
import { closeModal } from "../../store/modalSlice";
import CloseIcon from "../../icons/CloseIcon";

interface ModalProps {
    renderContent: () => React.ReactNode;
}


const Modal: React.FC<ModalProps> = ({ renderContent }) => {

    const dispatch = useDispatch<AppDispatch>();
    const { isOpen } = useSelector((state:RootState)=>state.modal);

    if(!isOpen) return null;

    const handleCloseModal = ()=>{
        dispatch(closeModal())
    }

    return (
        <div className="modal">
            <div className={`modal-container ${isOpen ? 'open' : 'close'}`}>

                <button className="modal-container__button" onClick={() => handleCloseModal()}>
                    <CloseIcon/>
                </button>

                <div className="modal-content">
                    {renderContent()}
                </div>
            </div>
        </div>
    )
}

export default Modal
