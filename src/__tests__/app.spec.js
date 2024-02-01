import renderApp from '../app'

describe('app 테스트', () => {
  beforeEach(() => {
    document.body.innerHTML = `<div id="app"></div>`

    renderApp()
  })

  it('짝수 뽑기 버튼을 클릭하면 짝수가 뽑힌다', () => {
    // 이 부분에 테스트 코드 작성
  })

  it('홀수 뽑기 버튼을 클릭하면 홀수가 뽑힌다', () => {
    // 이 부분에 테스트 코드 작성
  })
})
