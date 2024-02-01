import { random } from 'lodash-es'

export default function renderApp() {
  const app = document.querySelector('#app')

  app.innerHTML = `
  <div class="flex gap-8 mx-auto my-8 w-fit h-fit">
    <div class="flex flex-col gap-4 mx-auto p-4">
      <h3 class="text-center font-semibold">랜덤하게 1 부터 10 까지의 짝수 뽑기</h3>
      <div id="even-num" class="flex justify-center items-center p-4 text-6xl w-60 h-60 max-h-60 overflow-auto rounded-lg shadow-gray-700/50 shadow-lg">
        -
      </div>
      <div class="flex justify-between items-center">
        <button id="btn-get-even" class="bg-sky-800 hover:bg-sky-700 active:bg-sky-900 w-full h-8 rounded-md">짝수 뽑기</button>
      </div>
    </div>

    <div class="flex flex-col gap-4 mx-auto p-4">
      <h3 class="text-center font-semibold">랜덤하게 1 부터 10 까지의 홀수 뽑기</h3>
      <div id="odd-num" class="flex justify-center items-center p-4 text-6xl w-60 h-60 max-h-60 overflow-auto rounded-lg shadow-gray-700/50 shadow-lg">
        -
      </div>
      <div class="flex justify-between items-center">
        <button id="btn-get-odd" class="bg-sky-800 hover:bg-sky-700 active:bg-sky-900 w-full h-8 rounded-md">홀수 뽑기</button>
      </div>
    </div>
  </div>
  `

  const [btnGetEven, btnGetOdd] = [
    document.querySelector('#btn-get-even'),
    document.querySelector('#btn-get-odd'),
  ]

  btnGetEven.addEventListener('click', () => {
    const num = random(1, 10)

    document.querySelector('#even-num').textContent =
      num % 2 !== 0 ? num : num + 1
  })

  btnGetOdd.addEventListener('click', () => {
    const num = random(1, 10)

    document.querySelector('#odd-num').textContent =
      num % 2 === 0 ? num : num - 1
  })
}
