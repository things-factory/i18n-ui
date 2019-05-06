import { html } from 'lit-html'

import { store } from '@things-factory/shell'
import { i18next } from '@things-factory/i18n-base'
import { showSnackbar } from '@things-factory/layout-base'
import { ADD_MORENDA } from '@things-factory/more-base'
import { ADD_SETTING } from '@things-factory/setting-base'

export default function bootstrap() {
  /* add language changed event handler */
  i18next.on('languageChanged', e => {
    store.dispatch(
      showSnackbar(
        i18next.t('text.you.are.now.in', {
          state: {
            text: i18next.t('text.current language')
          }
        })
      )
    )
  })

  /* add language setting morenda - should be changed to setting */
  store.dispatch({
    type: ADD_MORENDA,
    morenda: {
      icon: 'language.png',
      name: 'set language',
      template: html`
        <select
          @change="${e => {
            i18next.changeLanguage(e.target.value)
          }}"
        >
          <option value="en-US" ?selected=${i18next.language == 'en-US'}>English</option>
          <option value="ko-KR" ?selected=${i18next.language == 'ko-KR'}>한국어</option>
        </select>
      `
    }
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
