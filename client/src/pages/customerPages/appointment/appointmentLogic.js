import * as yup from "yup";
import {useNavigate} from "react-router-dom";
import CustomAxios from "../../../customer hooks/CustomAxios";

function AppointmentLogic({toast, image, setImgError, setLoading}) {

  const navigate = useNavigate();

  const onSubmit = async (values) => {
    try {
      if(image == null || !image || image == {}) {
        console.log('yes');
        return setImgError("Please set an image to this pet");
      }
      values.image = image;
      setLoading(true)
      const reponse = await CustomAxios({METHOD:"POST", uri:`/api/customer/appointment`, values})
      const {success, msg} = reponse;

      if(!success && msg.includes('session expired')) {
        return window.location.reload();
      }

      if(!success) {
        setLoading(false)
        return toast(msg, {type: 'error'});
      }
      setLoading(false)
      toast(msg, {type: 'success'});

      setTimeout( _ => navigate('/customer/profile', {replace: true}), 5000)
    } catch (error) {
      setLoading(false)
      console.error(error.message);
    }
  };

  const initialValues = () => {
    return {
      petName: "",
      petType: "",
      birthdate: "",
      gender: "",
      breed: "",
      admin_id: '',
      appointmentType: "",
      dateNtime: "",
      additional_details: "",
    };
  };

  const validationSchema = yup.object({
    petName: yup.string().required("Pet name is required"),
    petType: yup.string().required("Pet Type is required"),
    birthdate: yup.date().required("Birthdate is required"),
    gender: yup.string().required("Gender is required"),
    breed: yup.string().required("Breed is required"),
    appointmentType: yup.string().required("Appointment is required"),
    dateNtime: yup.date().required("Date-time is required (08:00 am - 07:00 pm)"),
    admin_id: yup.number(),
    additional_details: yup.string(),
  });

  const genderOptions = [
    {
      key: "Select Gender",
      value: "",
    },
    {
      key: "Male",
      value: "male",
    },
    {
      key: "Female",
      value: "female",
    },
  ];

  const petTypeOptions = [
    {
      key: "Select",
      value: "",
    },
    {
      key: "Dog",
      value: "dog",
    },
    {
      key: "Cat",
      value: "cat",
    },
  ];

  const requestTypeOptions = [
    {
      key: "Select Type",
      value: "",
    },
    {
      key: "Grooming",
      value: "grooming",
    },
    {
      key: "Walk-in consulting",
      value: "walk-in-consulting",
    },
  ];

 

  const dateTodayFormatter = ({year=0, month=0, date=0}) => {
    const dateObj = new Date();
    const dd = String(dateObj.getDate() - date).padStart(2, '0');
    const mm = String(dateObj.getMonth() + 1 - month).padStart(2, '0');
    const yyyy = dateObj.getFullYear() - year;
    const today = `${yyyy}-${mm}-${dd}`;
    return today
  }
  return {
    onSubmit,
    initialValues,
    validationSchema,
    genderOptions,
    petTypeOptions,
    requestTypeOptions,
    dateTodayFormatter
  };
}

export default AppointmentLogic;
