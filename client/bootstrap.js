import { i18next } from '@things-factory/i18n-base'

export default function bootstrap() {
  /* add language changed event handler */
  i18next.on('languageChanged', e => {
    document.dispatchEvent(
      new CustomEvent('notify', {
        detail: {
          level: 'info',
          message: i18next.t('text.you.are.now.in', {
            state: {
              text: i18next.t('language!')
            }
          })
        }
      })
    )
  })
}
