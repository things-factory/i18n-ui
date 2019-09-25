import { LitElement, html } from 'lit-element'

import { localize, i18next } from '@things-factory/i18n-base'
import '@things-factory/setting-base'

export class I18nSettingLet extends localize(i18next)(LitElement) {
  render() {
    return html`
      <setting-let>
        <i18n-msg slot="title" msgid="change language"></i18n-msg>
        <select
          slot="content"
          @change=${e => {
            i18next.changeLanguage(e.target.value)
          }}
        >
          <option value="" ?selected=${!i18next.language}></option>
          <option value="ms-MY" ?selected=${i18next.language == 'ms-MY'}>Bahasa Malaysia</option>
          <option value="en-US" ?selected=${i18next.language == 'en-US'}>English</option>
          <option value="ko-KR" ?selected=${i18next.language == 'ko-KR'}>한국어</option>
          <option value="zh-CN" ?selected=${i18next.language == 'zh-CN'}>中文</option>
        </select>
      </setting-let>
    `
  }
}

customElements.define('i18n-setting-let', I18nSettingLet)
