import CustomAxios from "../../../../customer hooks/CustomAxios";

function Logic({setPinned, data, isPinned, setFeedbacks}) {
    const pinFeedback = async () => {
        try {
          setPinned(!isPinned);
          const res = await CustomAxios({METHOD:"PATCH", uri:`/api/admin/togglePinFeedback/${data.id}`, values:{
            pin: !isPinned
        }});
        } catch (error) {
          console.error(error.message)
        }
      }

      const deleteFeedback = async () => {
        try {
          const res = await CustomAxios({METHOD:"DELETE", uri:`/api/admin/deleteFeedback/${data.id}`});
          setFeedbacks(prev => prev.filter((feedback) => feedback.id != data.id));
        } catch (error) {
          console.error(error.message)
        }
      }

      return {pinFeedback, deleteFeedback}
}

export default Logic