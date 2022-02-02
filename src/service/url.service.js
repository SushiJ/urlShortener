/**
 * @param {string} id
 */

import url from "../model/url.model";

export async function createUrl(input) {
  try {
    await url.create({
      full: input,
    });
  } catch (e) {
    throw new Error(e);
  }
}

export async function getUrl() {
  try {
    const storedUrl = await url.find();
    return storedUrl;
  } catch (e) {
    throw new Error(e);
  }
}
export async function getUrlById(id) {
  try {
    const shortUrl = await url.findOne({ short: id });
    if (!shortUrl) return;
    shortUrl.clicks++;
    shortUrl.save();
    return shortUrl;
  } catch (e) {
    throw new Error(e);
  }
}
