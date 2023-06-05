// 1. 액션 생성 - 모듈 이름을 앞에 붙여줌으로써 액션명 중복 방지
const RED = 'color/RED'
const GREEN = 'color/GREEN'
const BLUE = 'color/BLUE'
const TOMATO = 'color/TOMATO'

// 2. 액션 export
export const red = () => ({ type: RED })
export const green = () => ({ type: GREEN })
export const blue = () => ({ type: BLUE })
export const tomato = () => ({ type: TOMATO })

//3. 초기값
const initialState = { color: 'hotpink' }

//4. reducer 생성 - state, action 파라미터를 참조하여, 새로운 상태 객체를 만들어서 반환한다.
// state에는 반드시 초기값을 주어야 한다.
const reducer = (state = initialState, action) => { //state: 현재 상태, action: 액션 객체
    switch (action.type) {
        case RED:
            return { color: 'red' }
        case GREEN:
            return { color: 'green' }
        case BLUE:
            return { color: 'blue' }
        case TOMATO:
            return { color: 'tomato' }
        default:
            return state
    }
}

export default reducer //Context와 다르게 컴포넌트가 아니라 순수 자바스크립트 파일이다.