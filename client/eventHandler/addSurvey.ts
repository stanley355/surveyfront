import jsCookie from "js-cookie";
import AxiosAPI from "../lib/axiosAPI";


const addParticipant = async (values: any) => {
  const response = await AxiosAPI({
    method: "POST",
    path: `/api/participant`,
    data: {
      fullName: values.fullName,
      payload: {
        answer_1: values.answer_1,
        answer_2: values.answer_2,
        answer_3: values.answer_3,
        answer_4: values.answer_4,
        answer_5 :values.answer_5,
      }
    },
  });

  if (response.data.success) {
    const fullName = jsCookie.get('full_name');
    window.location.href = `/survey/${fullName}`;
  } else {
    alert("Terjadi kesalahan pada sistem, silakan coba lagi!");
    window.location.reload();
  }
};

export default addParticipant;
