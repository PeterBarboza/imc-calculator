let resultVisor = document.getElementById('imc-calc-result')
const cleanInputsBtn = document.getElementById('clean-inputs-btn')
const calculateBtn = document.getElementById('calculate-btn')

cleanInputsBtn.addEventListener('click', cleanInputs)
calculateBtn.addEventListener('click', calculateIMC)

function calculateIMC() {
  const height = Number(document.getElementById('height'))
  const weight = Number(document.getElementById('weight'))

  if (height.lenght == 0 || weight.lenght == 0) {
    console.log(height.lenght)
    console.log(weight.lenght)

    return
  } else {
    console.log(height.lenght)
    console.log(weight.lenght)

    const squaredHeight = height.value * height.value
    const IMCResult = weight.value / squaredHeight
    const formatedIMCResult = IMCResult.toFixed(2)


    resultVisor.innerText = formatedIMCResult
  }


}

function cleanInputs() {
  height.value = ''
  weight.value = ''
  resultVisor.innerText = '...'
}