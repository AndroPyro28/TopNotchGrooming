import * as yup from "yup";
import CustomAxios from "../../../../customer hooks/CustomAxios";

function ProductAgeLimitLogic({setOpenItem, toast, setDisabled, setProductAgeLimit}) {
    const onSubmit = async (values) => {
        try {
            const {age_limit} = values;
            if(!age_limit) {
                return toast('Product age limit is required', {type:'warning'})
            }
            setDisabled(true)
            const result = await CustomAxios({METHOD:'POST', uri:'/api/products/addProductAgeLimit', values})
            const {success, msg, insertId} = result
            if(!success && msg?.includes('session expired')) {
                return window.location.reload();
            }

            if(!success) {
                return toast(msg, {type:'warning'})
            }

            setProductAgeLimit(prev => [...prev, {
                id: insertId,
                age_limit,
                createAt:'',
            }])

             toast(msg, {type:'success'})
             setTimeout(() => {
                setOpenItem(false)
            }, 2500)

        } catch (error) {
            console.error(error.message)
        } finally {
        }
    }
    const initialValues = () => {
        return {
            age_limit: ""
        }
    }
    const validationSchema = yup.object().shape({
        age_limit: yup.string().min(3, "Age limit must be atleast 3 characters").required('Age Limit is required field')
    })

    return {
        onSubmit,
        initialValues,
        validationSchema,
    }
}

export default ProductAgeLimitLogic