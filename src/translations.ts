/**
 * this represents a simplified i18n system to be replaced (or not i guess)
 * by whatever system would use
 */

const translations = {
  en: {
    LOADING_TEXT: "Now loading...",
    SET_LANGUAGE: "Toggle Language",
    LANDING_PAGE: {
      LOGIN_TITLE: "Log in",
      LOGIN_PROMPT: "Enter your email and we'll send you a login code"
    },
    MENU_PAGE: {
      HEADER: "Menu",
      DELIVERY_DATE: "Menu for {{date}} deliveries",
      ADD_TO_CART_CTA: "Add to cart"
    }
  },

  jp: {
    LOADING_TEXT: "ロード中...",
    SET_LANGUAGE: "トグル言語",
    LANDING_PAGE: {
      LOGIN_TITLE: "jhfjfv",
      LOGIN_PROMPT: "jhfutdf"
    },
    MENU_PAGE: {
      HEADER: "メニュー",
      DELIVERY_DATE: "{{date}}に配信されるメニュー",
      ADD_TO_CART_CTA: "カートに入れる"
    }
  }
};

export default translations;
