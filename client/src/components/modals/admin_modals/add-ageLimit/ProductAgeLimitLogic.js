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
            //  setTimeout(() => {
            //     setOpenItem(false)
            // }, 2500)

        } catch (error) {
            console.error(error.message)
        } finally {
            setDisabled(false);
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

    const updateAgeLimit = async (ageLimitData, setModify) => {
        try {
            setModify(false);
            const res = await CustomAxios({METHOD: "PUT", values: {ageLimitData}, uri:`/api/products/updateAgeLimit/${ageLimitData.id}`});
            const {msg, success} = res;
            
            if(!success && msg?.includes('session expired')) {
                return window.location.reload();
            }
            toast(`age limit data has been updated`, {type: 'success'});
            setProductAgeLimit(prev => prev.map((data) => {
                if(data.id == ageLimitData.id) {
                    return {...ageLimitData};
                } 
                return data;
            }))
        } catch (error) {
            toast('Failed to update, age limit cannot be duplicated', {type: 'warning'});
            setProductAgeLimit(prev => prev.map(data => data))
            console.error(error.message)
        }
    }

    const deleteAgeLimit = async (id, setModify) => {
        try {
            setProductAgeLimit(prev => prev.filter((data) => id != data.id));
            const res = await CustomAxios({METHOD: "DELETE", uri:`/api/products/deleteAgeLimit/${id}`});
            const {msg, success} = res;
            if(!success && msg?.includes('session expired')) {
                return window.location.reload();
            }
            toast(`age limit data has been deleted`, {type: 'success'});
        } catch (error) {
            toast('Failed to delete, some went wrong', {type: 'warning'});
            console.error(error.message)
        } finally {
            setModify(false)
        }
    }

    return {
        onSubmit,
        initialValues,
        validationSchema,
        updateAgeLimit,
        deleteAgeLimit
    }
}

export default ProductAgeLimitLogic