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
            //  setTimeout(() => setOpenItem(false), 2500)
        } catch (error) {
            console.error(error.message)
        } finally {
            setDisabled(false)
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

    const updateCategory = async (categoryData, setModify) => {
        try {
            setModify(false);
            const res = await CustomAxios({METHOD: "PUT", values: {categoryData}, uri:`/api/products/updateCategory/${categoryData.id}`});
            const {msg, success} = res;
            
            if(!success && msg?.includes('session expired')) {
                return window.location.reload();
            }
            toast(`category data has been updated`, {type: 'success'});
            setCategories(prev => prev.map((data) => {
                if(data.id == categoryData.id) {
                    return {...categoryData};
                } 
                return data;
            }))
        } catch (error) {
            setCategories(prev => prev.map(data => data))
            toast('Failed to update, age limit cannot be duplicated', {type: 'warning'});
            console.error(error.message)
        }
    }

   const deleteCategory = async (id, setModify) => {
        try {
            setCategories(prev => prev.filter((data) => id != data.id));
            const res = await CustomAxios({METHOD: "DELETE", uri:`/api/products/deleteCategory/${id}`});
            const {msg, success} = res;
            if(!success && msg?.includes('session expired')) {
                return window.location.reload();
            }
            toast(`category data has been deleted`, {type: 'success'});
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
        updateCategory,
        deleteCategory
    }
}

export default categoryLogic