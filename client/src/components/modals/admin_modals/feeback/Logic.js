import CustomAxios from "../../../../customer hooks/CustomAxios";

function Logic({setPinned, data, isPinned, setFeedbacks, comment, setComment}) {
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

      const sendComment = async () => {
        try {
          const res = await CustomAxios({METHOD:"POST", uri:`/api/admin/comment`, values: {
            feedback_id: data.id,
            comment
          }});
          console.log(res);
          setComment('');
        } catch (error) {
          console.error(error)
        }
      }

      return {pinFeedback, deleteFeedback, sendComment}
}

export default Logic