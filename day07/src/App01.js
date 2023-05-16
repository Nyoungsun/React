import React from 'react';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom'
import About from './page01/About';
import Ceo from './page01/Ceo';
import Home from './page01/Home';
import NotFiles from './page01/NotFiles';
import Sub01 from './page01/Sub01';

const App01 = () => {
    return (
        <div>
            <BrowserRouter>
                <>
                    <nav>
                        <ul>
                            {/* a태그 대신 링크 사용*/}
                            {/* a태그를 쓰면 로딩만 진행됨*/}
                            <li><Link to='/'>Home</Link></li>
                            <li><Link to='/about'>About</Link></li>
                            <li><Link to='/ceo'>CEO</Link></li>
                            <li><Link to='/sub01'>Sub01</Link></li>
                            <li><Link to='/*'>NotFiles</Link></li>
                        </ul>
                    </nav>

                    {/* 화면에 보이는 영역*/}
                    <Routes>
                        <Route path='/' element={<Home />} />       {/* 주소가 '/'면 Home컴포넌트 출력*/}
                        <Route path='/about' element={<About />} />
                        <Route path='/ceo' element={<Ceo />} />
                        <Route path='/sub01' element={<Sub01 />} />
                        <Route path='*' element={<NotFiles />} />
                    </Routes>
                </>
            </BrowserRouter>
        </div>
    );
};

export default App01;