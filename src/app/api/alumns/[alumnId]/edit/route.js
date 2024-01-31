import axios from "axios";
import https from "https";

export async function PATCH(request, { params }) {
  const id = params.alumnId;
  const body = await request.json();
  const { alumn } = body;
  let alumnRes = {};
  const httpsAgent = new https.Agent({
    rejectUnauthorized: false,
  });

  // console.log(params);
  // console.log(id);

  await axios
    .patch(
      `https://65b3bd08770d43aba47a5479.mockapi.io/api/v1/next-test/alumns/${id}`,
      { httpsAgent, body: JSON.stringify({ ...alumn }) }
    )
    .then((response) => {
      // alumnRes = response.data;
      console.log(response);
      // console.log(alumn);
    })
    .catch((err) => {
      console.error(err);
      // return new Response({ status: 404, body: null });
    });

  // return new Response(JSON.stringify(alumnRes));
}
