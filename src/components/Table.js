import '@material/web/list/list'
import '@material/web/list/list-item'
import Row from './Row.js'

export default function Table({ data } = {}) {
  return /* html */ `
    <md-list  class="min-w-[400px]">
      ${
        data.length === 0
          ? '<p class="text-center my-8 text-[15px] text-gray-400">No hay datos aún, ingresa datos de calificaciones</p>'
          : data.map((row, index) => Row({ id: index, ...row })).join('')
      }
    </md-list>
  `
}
