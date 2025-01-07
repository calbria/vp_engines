import ruCommon from '@/i18n/ru/common.json'
import ruHome from '@/i18n/ru/home.json'
import ruBtn from '@/i18n/ru/btn.json'
import ruCards from '@/i18n/ru/cards.json'
import uaCommon from '@/i18n/ua/common.json'
import uaHome from '@/i18n/ua/home.json'
import uaBtn from '@/i18n/ua/btn.json'
import uaCards from '@/i18n/ua/cards.json'
import { createI18n } from 'vue-i18n'

const messages = {
  ru: {
    common: ruCommon,
    home: ruHome,
    btn: ruBtn,
    cards: ruCards,
  },
  ua: {
    common: uaCommon,
    home: uaHome,
    btn: uaBtn,
    cards: uaCards
  },
}
export default createI18n({
  legacy: false,
  locale: 'ru',
  fallbackLocale: 'ru',
  messages,
})
