export const publicPath = new URL(
  import.meta.env.BASE_URL,
  window.location.origin === "null" ? window.location.href : window.location.origin,
).href;
