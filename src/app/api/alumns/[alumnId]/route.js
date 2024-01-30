import axios from "axios";
import https from "https";

export async function GET(request, { params }) {
  const id = params.alumnId;
  let alumn = {};
  const httpsAgent = new https.Agent({
    rejectUnauthorized: false,
  });

  // console.log(params);
  // console.log(id);

  await axios
    .get(
      `https://65b3bd08770d43aba47a5479.mockapi.io/api/v1/next-test/alumns/${id}`,
      { httpsAgent }
    )
    .then((response) => {
      alumn = response.data;
      // console.log(response.data);
      // console.log(alumn);
    })
    .catch((err) => {
      console.error(err);
      return new Response({ status: 404, body: null });
    });

  return new Response(JSON.stringify(alumn));
}
