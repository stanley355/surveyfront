import jsCookie from "js-cookie";
import AxiosAPI from "../lib/axiosAPI";

const addParticipant = async (values: any) => {
  const response = await AxiosAPI({
    method: "POST",
    path: `/api/participant`,
    data: {
      values,
    },
  });

  if (response.data.success) {
    jsCookie.set("full_name", response.data.full_name);
    window.location.href = `/survey`;
  } else {
    alert(response.data.console.error);
    window.location.reload();
  }
};

export default addParticipant;
