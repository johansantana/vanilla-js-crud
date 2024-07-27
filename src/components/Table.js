import '@material/web/list/list'
import '@material/web/list/list-item'
import Row from './Row.js'

export default function Table({ data } = {}) {
  return /* html */ `
    <md-list  class="min-w-[400px]">
      ${data.map((row, index) => Row({ id: index, ...row })).join('')}
    </md-list>
  `
}
