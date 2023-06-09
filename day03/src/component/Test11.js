import React, { useState } from 'react';

const dataList = [
    { id: 1, name: 'chk1', text: '연령(만 14세 이상) 확인(필수)', isChk: false },
    { id: 2, name: 'chk2', text: '개인정보 위탁 처리 동의(필수)', isChk: false },
    { id: 3, name: 'chk3', text: '개인정보 수집 및 이용에 대한 동의(필수)', isChk: false },
    { id: 4, name: 'chk4', text: '이벤트 우대 혜택 동의 안내(선택)', isChk: false },
]

const Test11 = () => {
    const [data, setData] = useState(dataList);

    const onChk = (e) => {
        const { name, checked } = e.target

        if (name === 'all') {
            setData(data.map(item => {
                return {
                    ...item,
                    isChk: checked
                }
            }))
        } else {
            setData(data.map(item => item.name === name ? { ...item, isChk: checked } : item))
        }
    }

    return (
        <div>
            <p>
                <input type='checkbox' name='all' onChange={onChk}
                    checked={data.filter(item => item.isChk !== true).length < 1} />
                {/*
                 item.isChk가 true가 아닌 것(false)이 1개라도 있으면 false를 반환하여 전체동의 해제
                */}
                <label>전체 동의</label>
            </p>
            {
                data.map(item =>
                    <p key={item.id}>
                        <input type='checkbox' name={item.name} checked={item.isChk} onChange={onChk} />
                        <label>{item.text}</label>
                    </p>)
            }
        </div>
    );
};

export default Test11;
