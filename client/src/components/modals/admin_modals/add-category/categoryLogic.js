import * as yup from "yup";
import CustomAxios from "../../../../customer hooks/CustomAxios";

function categoryLogic({setOpenItem, toast, setDisabled, setCategories}) {
    const onSubmit = async (values) => {
        try {
            const {category} = values;
            if(!category) {
                return toast('category is required', {type:'warning'})
            }
            setDisabled(true)
            const result = await CustomAxios({METHOD:'POST', uri:'/api/products/addCategory', values})
            const {success, msg, insertId} = result
            if(!success && msg?.includes('session expired')) {
                return window.location.reload();
            }

            if(!success) {
                return toast(msg, {type:'warning'})
            }
            setCategories(prev => [...prev, {
                id: insertId,
                category,
                createdAt:'',
                updatedAt:'',
            }])
             toast(msg, {type:'success'})
             setTimeout(() => setOpenItem(false), 2500)
        } catch (error) {
            console.error(error.message)
        } finally {
        }
    }
    const initialValues = () => {
        return {
            category: ""
        }
    }
    const validationSchema = yup.object().shape({
        category: yup.string().matches(/^[a-zA-Z]+$/, "Must container letters only").min(3).required("Category is a required field")
    })

    return {
        onSubmit,
        initialValues,
        validationSchema,
    }
}

export default categoryLogic