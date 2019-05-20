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
          type: result ? 'info' : 'error',
          message: i18next.t('text.you.are.now.in', {
            state: {
              text: i18next.t('text.current language')
            }
          })
        }
      })
    )
  })

  store.dispatch({
    type: ADD_SETTING,
    setting: {
      seq: 20,
      template: html`
        <div id="languageSetting" style="padding:30px;">
          <span style="color: #c0504d;text-align: left;font-size: 1em;">Change Language</span><br />
          <select
            @change="${e => {
              i18next.changeLanguage(e.target.value)
            }}"
          >
            <option value="en-US" ?selected=${i18next.language == 'en-US'}>English</option>
            <option value="ko-KR" ?selected=${i18next.language == 'ko-KR'}>한국어</option>
          </select>
        </div>
      `
    }
  })
}
