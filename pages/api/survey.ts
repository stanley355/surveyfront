import axios from "axios";
import type { NextApiRequest, NextApiResponse } from "next";

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const URL = "http://localhost:6000/api/survey/add";

  const { fullName, data } = req.body;
console.log(req.body);
  let response;
  try {
    response = await axios.post(URL, {
      fullName, data
    });
  } catch (err) {
    response = {
      data: {
        success: false,
        reason: "Terjadi kesalahan pada sistem, silakan coba lagi.",
      },
    };
  }

  res.json(response.data);
};
