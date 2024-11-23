import { createI18n } from "vue-i18n"
import en from '@/i18n/en.json'
import es from '@/i18n/es.json'
import ko from '@/i18n/ko.json'

const i18n = createI18n({
    locale: 'en',
    fallbackLocale : 'ko', //우리가 설정한 지역 외에서 접속하면 ko로 보여줌.
    messages : {
        en,
        ko,
        es
    }
})

export default i18n;