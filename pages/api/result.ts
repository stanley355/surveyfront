import axios from "axios";
import type { NextApiRequest, NextApiResponse } from "next";

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const URL = "http://localhost:6000/api/survey/result";

  let response;
  try {
    response = await axios.get(URL);
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
