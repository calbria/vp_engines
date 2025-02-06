import ruCommon from '@/i18n/ru/common.json'
import ruHome from '@/i18n/ru/home.json'
import ruRepair from '@/i18n/ru/repair.json'
import ruBtn from '@/i18n/ru/btn.json'
import ruCards from '@/i18n/ru/cards.json'
import ruCTA from '@/i18n/ru/cta.json'
import uaCommon from '@/i18n/ua/common.json'
import uaHome from '@/i18n/ua/home.json'
import uaRepair from '@/i18n/ua/repair.json'
import uaBtn from '@/i18n/ua/btn.json'
import uaCards from '@/i18n/ua/cards.json'
import uaCTA from '@/i18n/ua/cta.json'
import { createI18n } from 'vue-i18n'

const messages = {
  ru: {
    common: ruCommon,
    home: ruHome,
    repair: ruRepair,
    btn: ruBtn,
    cards: ruCards,
    cta: ruCTA
  },
  ua: {
    common: uaCommon,
    home: uaHome,
    repair: uaRepair, 
    btn: uaBtn,
    cards: uaCards,
    cta: uaCTA
  },
}
const savedLanguage = localStorage.getItem('language') || 'ru'
export default createI18n({
  legacy: false,
  locale: savedLanguage,
  fallbackLocale: 'ru',
  messages,
})
