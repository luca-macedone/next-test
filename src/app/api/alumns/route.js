import axios from "axios";
import https from "https";
import fs from "fs";

export async function GET(_request) {
  // const httpsAgent = new https.Agent({
  //   // cert: fs.readFileSync("C:\\Users\\lmacedone\\RootCA.crt"),
  //   // key: fs.readFileSync("C:\\Users\\lmacedone\\RootCA.key"),
  //   // ca: fs.readFileSync("C:\\Users\\lmacedone\\RootCA.pem"),
  //   cert: fs.readFileSync(".\\certificates\\localhost.pem"),
  //   key: fs.readFileSync(".\\certificates\\localhost-key.pem"),
  // });
  const httpsAgent = new https.Agent({
    rejectUnauthorized: false,
  });

  const url =
    "https://65b3bd08770d43aba47a5479.mockapi.io/api/v1/next-test/alumns";
  let data = [];
  await axios
    .get(url, { httpsAgent })
    .then((res) => {
      // console.log(res.data);
      data = res.data;
    })
    .catch((err) => console.error(err));

  return new Response(JSON.stringify(data));
}
