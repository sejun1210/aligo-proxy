const axios = require("axios");

export default async function handler(req, res) {
  if (req.method !== "POST") return res.status(405).end();

  const { phone, name, visitDate, company, tpl_code } = req.body;

  const payload = {
    apikey: "i6i0lz22jfxp2qctp52fm3xrpt5nfmg6",
    userid: "ksk548",
    senderkey: "a25a7f727f9373febbb8d438ea20fd51c03d59b1",
    tpl_code,
    sender: "01083214445",
    receiver_1: phone,
    msg_variable_1: `${name}|${visitDate}|${company}`
  };

  try {
    const response = await axios.post("https://kakaoapi.aligo.in/akv10/alimtalk/send/", payload);
    return res.status(200).json(response.data);
  } catch (error) {
    return res.status(500).json({ error: error.toString() });
  }
}
