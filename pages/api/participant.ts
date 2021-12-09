import axios from "axios";
import type { NextApiRequest, NextApiResponse } from "next";

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const URL = "http://localhost:6000/api/participant/add";

  const { full_name, email, phone_number } = req.body.values;

  let response;
  try {
    response = await axios.post(URL, {
      full_name,
      email,
      phone_number,
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
