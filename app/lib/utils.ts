// lib/utils.ts
import { RESTAURANT } from "./constants";

/** Build a pre-filled WhatsApp chat URL */
export const wa = (msg: string) =>
  `https://wa.me/${RESTAURANT.whatsapp}?text=${encodeURIComponent(msg)}`;
  