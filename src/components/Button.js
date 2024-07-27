// index.js
import '@material/web/icon/icon'
import '@material/web/button/filled-button.js'
import '@material/web/button/outlined-button.js'
import '@material/web/iconbutton/filled-icon-button.js'
import '@material/web/iconbutton/filled-tonal-icon-button'

export default function Button({ text = 'Button' } = {}) {
  return /* html */ `
  <md-filled-button type="submit">${text}</md-filled-button>
  `
}

export function IconButton({ iconName, isTonal = false, id } = {}) {
  if (isTonal) {
    return /* html */ `
      <md-filled-tonal-icon-button id="${id}" class="${iconName}">
        <md-icon>${iconName}</md-icon>
      </md-filled-tonal-icon-button>
    `
  }

  return /* html */ `
    <md-filled-icon-button id="${id}" class="${iconName}">
      <md-icon>${iconName}</md-icon>
    </md-filled-icon-button>
  `
}
