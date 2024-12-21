import ruCommon from './ru/common.json'
import ruHome from './ru/home.json'
import uaCommon from './ua/common.json'
import uaHome from './ua/home.json'
 import { createI18n } from 'vue-i18n'

 const messages = {
    ru: { 
        common: ruCommon,
        home: ruHome
     },
    ua: { 
        common: uaCommon,
        home: uaHome
     }

 }
 export default createI18n({
    legacy: false,
    locale: 'ru',
    fallbackLocale: 'ru',
    messages
 })