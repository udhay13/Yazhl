const WHATSAPP_PHONE_NUMBER = "917871088361";
const BOOK_CALL_MESSAGE = "Hi YAZHL, I want to book a call.";

export const WHATSAPP_BOOK_CALL_URL = `https://wa.me/${WHATSAPP_PHONE_NUMBER}?text=${encodeURIComponent(
  BOOK_CALL_MESSAGE,
)}`;

export const getWhatsAppUrlWithMessage = (message: string) =>
  `https://wa.me/${WHATSAPP_PHONE_NUMBER}?text=${encodeURIComponent(message)}`;

export const openBookCallWhatsApp = () => {
  if (typeof window === "undefined") {
    return;
  }

  window.open(WHATSAPP_BOOK_CALL_URL, "_blank", "noopener,noreferrer");
};

export const openWhatsAppWithMessage = (message: string) => {
  if (typeof window === "undefined") {
    return;
  }

  window.open(getWhatsAppUrlWithMessage(message), "_blank", "noopener,noreferrer");
};
