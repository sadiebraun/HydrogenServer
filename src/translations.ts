/**
 * this represents a simplified i18n system to be replaced (or not i guess)
 * by whatever system would use
 */

const translations = {
  en: {
    LOADING_TEXT: "Now loading...",
    SET_LANGUAGE: "Toggle Language",
    LANDING_PAGE: {
      HEADER: "Landing Page",
      INTRO: "Hello fron the Landing Page of {{name}}"
    },
    ORDER_PAGE: {
      HEADER: "Order Page",
      INTRO: "You can order things on this page maybe",
      MAYBE_FROM_WEEK: "Maybe from {{week}}?",
      MAYBE_PRODUCT: "Maybe you would like {{product}}?"
    },
    NAV: {
      HEADER: "This navigation can move between projects",
      ACTIVE_LABEL: " is active"
    }
  },

  jp: {
    LOADING_TEXT: "ロード中...",
    SET_LANGUAGE: "トグル言語",
    LANDING_PAGE: {
      HEADER: "ランディングページ",
      INTRO: "{{name}}のランディングページからこんにちは"
    },
    ORDER_PAGE: {
      HEADER: "注文ページ",
      INTRO: "このページで注文できる。",
      MAYBE_FROM_WEEK: "たぶん{{week}}から?",
      MAYBE_PRODUCT: "{{product}}がお好きなのでは?"
    },
    NAV: {
      HEADER: "このナビゲーションはプロジェクト間を移動できる",
      ACTIVE_LABEL: "は活動的"
    }
  }
};

export default translations;
