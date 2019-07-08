import { html } from 'lit-html'

import { store } from '@things-factory/shell'
import { i18next } from '@things-factory/i18n-base'
import { ADD_SETTING } from '@things-factory/setting-base'

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

  import('./setting-let/i18n-setting-let')

  store.dispatch({
    type: ADD_SETTING,
    setting: {
      seq: 20,
      template: html`
        <i18n-setting-let></i18n-setting-let>
      `
    }
  })
}
