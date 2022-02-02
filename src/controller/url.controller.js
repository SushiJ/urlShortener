import { createUrl, getUrl, getUrlById } from "../service/url.service";

export async function createUrlHandler(req, res) {
  try {
    await createUrl(req.body.fullUrl);
    return res.redirect("/");
  } catch (e) {
    console.error(e);
    return res.status(400).send(e.message);
  }
}
export async function getAllUrlHandler(_, res) {
  try {
    const shortenUrl = await getUrl();
    return res.render("index", { shortenUrl });
  } catch (e) {
    return res.status(400).send(e.message);
  }
}
export async function getUrlByIdHandler(req, res) {
  try {
    const urlById = await getUrlById(req.params.sUrl);
    res.redirect(urlById.full);
  } catch (e) {
    return res.status(400).send(e.message);
  }
}
