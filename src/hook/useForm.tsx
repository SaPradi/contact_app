import { useEffect, useState } from 'react';
import { ContactErrorsData } from '../interfaces';
import { isValidEmail, onlyString } from '../utils/regex';

interface UseFormProps<T> {
    initialForm: T;
}
interface FormData{
    [key: string]: any;
}
interface FieldNamesMap {
    [key: string]: string;
}

// pa mapear los nombres y mostrarlos mas bonitos
const fieldNamesMap:FieldNamesMap = {
    'email': 'Email',
    'first_name': 'First name',
    'last_name': 'Last name',
};


const useForm =  <T extends FormData>({ initialForm }: UseFormProps<T>) => {

    const [formValues, setFormValues ] = useState<T>( initialForm );
    const [errors,setErrors]           = useState<ContactErrorsData>({})
    const [formValid,setFormValid]     = useState<boolean>(false);
    const [isTouched, setIsTouched]    = useState<{ [key: string]: boolean }>({});;

    const changeHandler = (e:React.ChangeEvent<HTMLInputElement>): void => {
        const { name, value, type, checked  } = e.target;

        const inputType = type === 'email' ? 'email' : (type === 'checkbox' ? 'checkbox' : 'text');
        validateField(name, value,inputType);


        setFormValues({
            ...formValues,
            [name]: type === 'checkbox' ? checked : value
        });

    };

    const blurHandler = (e: React.FocusEvent<HTMLInputElement>): void => {
        const { name } = e.target;
        setIsTouched((prev)=>({
            ...prev,
            [name]:true
        }));
    };

    const validateField = (name: string, value: string,type:string):void => {

        const nameShowErrors:string = fieldNamesMap[name] || name;
        let newErrors:ContactErrorsData = { ...errors };

        if ( (type === 'text' || type === 'email') && value.length <= 4) {
            newErrors[name] = `${nameShowErrors} must have at least 5 characters`;
        } else if (type === 'email' && !isValidEmail(value)) {
            newErrors[name] = `${nameShowErrors} is not valid`;
        } else if (type === 'text' && !onlyString(value)) {
            newErrors[name] = `${nameShowErrors} cannot contain numbers`;
        } else {
            // Si no hay errores
            delete newErrors[name];
        }

        setErrors(newErrors);
    }

    useEffect(() => {
        const hasErrors = Object.values(errors).some(error => error !== '');
        const noEmptyValues = Object.values(formValues).every(value => {
            if (typeof value === 'boolean') return true; // Los booleanos no se consideran vacíos
            return value !== '';
        });
        setFormValid(!hasErrors && noEmptyValues);
    }, [errors, formValues]);

    

    const clear = (): void => {
        setFormValues(initialForm);
        setIsTouched({});
        setFormValid(false);
    };

    return {
        formValues,
        errors,
        formValid,
        isTouched,
        changeHandler,
        blurHandler,
        clear,
        setFormValues,
    };
};

export default useForm;
