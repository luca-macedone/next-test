"use server";

import axios from "axios";
import https from "https";
import { revalidatePath } from "next/cache";

const editAlumn = async (formData, id) => {
  const { note } = formData;
  const httpsAgent = new https.Agent({
    rejectUnauthorized: false,
  });

  // console.log(formData);
  // console.log(note);
  // console.log(id);

  await axios({
    method: "PATCH",
    url: `https://65b3bd08770d43aba47a5479.mockapi.io/api/v1/next-test/alumns/${id}`,
    data: { note },
    httpsAgent,
  }).catch((err) => {
    console.error(err);
  });

  revalidatePath(`/dashboard/details/${id}`);
};

export default editAlumn;
