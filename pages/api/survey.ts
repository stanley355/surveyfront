import axios from "axios";
import type { NextApiRequest, NextApiResponse } from "next";

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const URL = "http://localhost:6000/api/survey/add";

  const { fullName, payload } = req.body;

  let response;
  try {
    response = await axios.post(URL, {
      fullName, payload
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
