import TextInput from './TextInput.js'
import Button from './Button.js'
import { areObjectsEqual, validateRow } from '../utils.js'

export default function Form(dataObject, load) {
  const inputs = [
    {
      id: 'firstName',
      label: 'Nombre'
    },
    {
      id: 'lastName',
      label: 'Apellido'
    },
    {
      id: 'regNumber',
      label: 'Matricula',
      maxlength: 9
      //pattern: /\d{4}-\d{4}/
    },
    {
      id: 'grades',
      label: 'Nota',
      maxlength: 3
    }
  ]

  document.addEventListener('submit', e => {
    if (!e.target.matches('#form')) return
    e.preventDefault()

    const formData = Object.fromEntries(new FormData(e.target))
    Object.keys(formData).forEach(key => (formData[key] = formData[key] || null))

    if (!validateRow(formData)) return

    // validate grades > 0 && <= 100
    const gradesInt = Number(formData.grades)
    if (gradesInt < 0 || gradesInt > 100) return

    // validate not repeated objects
    const exists = dataObject.data.some(row => areObjectsEqual(row, formData))
    if (exists) return

    // update row
    const rowId = e.target.getAttribute('data-id')
    if (rowId != null) {
      dataObject.data[rowId] = formData
      load()
      return
    }

    // Add data to the array
    dataObject.data.push(formData)
    load()
  })

  return /* html */ `
    <form action="submit" id="form" class="flex flex-col gap-5 max-w-[400px] ">
      ${inputs.map(input => TextInput(input)).join('')}
      ${Button({ text: 'Guardar' })}
    </form>
  `
}
