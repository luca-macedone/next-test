"use server";

import axios from "axios";
import https from "https";
import { revalidatePath } from "next/cache";

const addHomework = async (formData) => {
  const httpsAgent = new https.Agent({
    rejectUnauthorized: false,
  });

  const alumn = formData.get("alumn");
  const homework_name = formData.get("homework_name");
  const homework_description = formData.get("homework_description");

  // console.log(formData);
  // console.log(alumn);

  await axios({
    method: "POST",
    url: `https://65b3bd08770d43aba47a5479.mockapi.io/api/v1/next-test/alumns/${alumn}/homeworks`,
    data: {
      alumnId: alumn,
      name: homework_name,
      description: homework_description,
      done: false,
    },
    httpsAgent,
  })
    // .then((res) => console.log(res))
    .catch((err) => console.error(err));

  revalidatePath(`/dashboard/details/${alumn}`);
};

export default addHomework;
