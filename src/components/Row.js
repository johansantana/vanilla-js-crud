import { IconButton } from './Button.js'

export default function Row({ id, firstName, lastName, regNumber, grades }) {
  return /* html */ `
    <md-list-item type="button" id="${id}">
      <div slot="headline">${firstName} ${lastName}</div>
      <div slot="supporting-text">${regNumber}</div>
      <div slot="trailing-supporting-text" class="flex items-center gap-2">
        <span>${grades}</span>
        ${IconButton({ iconName: 'edit', id: `edit-${id}` })}
        ${IconButton({ iconName: 'delete', isTonal: true, id: `delete-${id}` })}
      </div>
    </md-list-item>
  `
}
