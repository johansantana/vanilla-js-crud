import Form from './components/Form.js'
import DataTable from './components/Table.js'

export default function App() {
  const $root = document.getElementById('app')

  // firstName, lastName, regNumber, grades
  const dataObject = {
    data: []
  }

  const load = () => {
    $root.innerHTML = /* html */ `
      <main class="h-screen p-20 grid place-items-center" id="content">
        <div class="flex gap-10 ">
          ${Form(dataObject, load)}
          ${DataTable(dataObject)}
        </div>
      </main>
    `
  }

  load()

  document.addEventListener('click', e => {
    if (e.target.matches('.edit')) {
      const rowId = Number(e.target.id.split('-')[1])
      const formData = dataObject.data[rowId]

      Object.keys(formData).forEach(key => {
        const inputElement = document.getElementById(key) || document.querySelector(`[name=${key}]`)
        if (inputElement) {
          inputElement.value = formData[key]
        }
      })

      document.getElementById('form').setAttribute('data-id', rowId)
    }

    if (e.target.matches('.delete')) {
      const rowId = Number(e.target.id.split('-')[1])
      dataObject.data.splice(rowId, 1)
      load()
    }
  })
}
