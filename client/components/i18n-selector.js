import { i18next, localize } from '@things-factory/i18n-base'
import { css, html, LitElement } from 'lit-element'

export class I18nSelector extends localize(i18next)(LitElement) {
  static get styles() {
    return [
      css`
        * {
          box-sizing: border-box;
        }
        *:focus {
          outline: none;
        }
        select {
          border: var(--i18n-selector-field-border, var(--input-field-border));
          background-color: var(--i18n-selector-field-background-color, initial);

          font: var(--i18n-selector-field-font, var(--input-field-font));
          font-size: var(--i18n-selector-field-font-size, 15px);
          width: var(--i18n-selector-field-width, 100%);
          color: var(--i18n-selector-field-color, initial);
        }
        select:focus {
          border: 1px solid var(--focus-background-color);
        }

        ::placeholder {
          font-size: 0.8rem;
          text-transform: capitalize;
        }
      `
    ]
  }

  static get properties() {
    return {
      value: String
    }
  }

  render() {
    return html`
      <select .value=${this.value} @change=${e => this.onLocaleChanged(e.target.value)}>
        <option value="" ?selected=${!i18next.language}></option>
        <option value="ms-MY" ?selected=${i18next.language == 'ms-MY'}>Bahasa Malaysia</option>
        <option value="en-US" ?selected=${i18next.language == 'en-US'}>English</option>
        <option value="ko-KR" ?selected=${i18next.language == 'ko-KR'}>한국어</option>
        <option value="zh-CN" ?selected=${i18next.language == 'zh-CN'}>中文</option>
      </select>
    `
  }

  async onLocaleChanged(value) {
    if (!value) return
    this.value = value
    this.dispatchEvent(
      new CustomEvent('change', {
        composed: true,
        bubbles: true,
        detail: value
      })
    )
  }
}

customElements.define('i18n-selector', I18nSelector)
