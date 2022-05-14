export const trimText = (text, length) =>
  text?.length > length ? `${(text || '').slice(0, length)}...` : text;