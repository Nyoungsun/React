import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Main from './page04/Main';
import MemberDetail from './page04/MemberDetail';

const App04 = () => {
    return (
        <BrowserRouter>
            <div>
                {/* 화면에 보이는 영역 */}
                <Routes>
                    <Route path='/' element={<Main />} />
                    <Route path='/member'>
                        <Route path=':memberId' element={<MemberDetail />} />
                    </Route>
                </Routes>
            </div>
        </BrowserRouter>
    );
};

export default App04;