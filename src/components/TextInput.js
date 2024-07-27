import '@material/web/textfield/filled-text-field.js'

export default function TextInput({ type = 'text', label = '', id, maxlength, pattern } = {}) {
  return /* html */ `
  <md-filled-text-field 
    label="${label}" 
    type="${type}" 
    id="${id}" 
    name="${id}"
    ${type ? `type="${type}"` : ''}
    ${maxlength ? `maxlength="${maxlength}"` : ''}
    ${pattern ? `pattern="${pattern}"` : ''}>
  </md-filled-text-field>
  `
}
