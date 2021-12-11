import AxiosAPI from "../lib/axiosAPI";


const addSurvey = async (fullName: any,values: any) => {
  const response = await AxiosAPI({
    method: "POST",
    path: `/api/survey`,
    data: {
      fullName: fullName,
      data: {
        answer_1: values.answer_1,
        answer_2: values.answer_2,
        answer_3: values.answer_3,
      }
    },
  });

  if (response.data.success) {
    window.location.href = `/survey/result/all`;
  } else {
    alert("Terjadi kesalahan pada sistem, silakan coba lagi!");
    window.location.reload();
  }
};

export default addSurvey;
