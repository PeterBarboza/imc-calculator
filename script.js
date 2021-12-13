const resultVisor = document.getElementById('imc-calc-result')

const heightInput = document.getElementById('height')
const weightInput = document.getElementById('weight')

const cleanInputsBtn = document.getElementById('clean-inputs-btn')
const calculateBtn = document.getElementById('calculate-btn')

heightInput.addEventListener('input', editHeightInput)
weightInput.addEventListener('input', editWeightInput)
cleanInputsBtn.addEventListener('click', cleanInputs)
calculateBtn.addEventListener('click', calculateIMC)

function editHeightInput() {
  let height = heightInput.value
  let hasDot = height.includes('.')

  if (height.length > 1) {
    const firstPart = height.slice(0, 1)
    const endPart = height.slice(1, height.length)

    if (!hasDot) {
      let finalString = firstPart.concat('.').concat(endPart)

      heightInput.value = finalString
    }
  }
}

function editWeightInput() {
  let weight = weightInput.value
  let hasDot = weight.includes('.')

  if (weight.length > 3) {
    const firstPart = weight.slice(0, 3)
    const endPart = weight.slice(3, weight.length)

    if (!hasDot) {
      let finalString = firstPart.concat('.').concat(endPart)

      weightInput.value = finalString
    }
  }
}

function calculateIMC() {
  const heightToNumber = Number(heightInput.value)
  const weightToNumber = Number(weightInput.value)

  const squaredHeight = heightToNumber * heightToNumber
  const IMCResult = weightToNumber / squaredHeight
  const formatedIMCResult = IMCResult.toFixed(2)

  resultVisor.innerText = formatedIMCResult
}

function cleanInputs() {
  heightInput.value = ''
  weightInput.value = ''
  resultVisor.innerText = '...'
}