import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import About from './page03/About';
import Front from './page03/Front';
import Home from './page03/Home';
import Profile from './page03/Profile';


const data = [
    { title: 'html', info: 'HTML' },
    { title: 'css', info: 'CSS' },
    { title: 'js', info: 'JS' },
    { title: 'react', info: 'REACT' },
    { title: 'vue', info: 'VUE' }
]

const App03 = () => {
    return (
        <BrowserRouter>
            <div>
                <ul>
                    <li><Link to='/'>home</Link></li>
                    <li><Link to='/about'>about</Link></li>
                    <li><Link to='/profile'>profile</Link></li>

                    <li><Link to='/front/html'>html</Link></li>
                    <li><Link to='/front/css'>css</Link></li>
                    <li><Link to='/front/js'>js</Link></li>
                    <li><Link to='/front/react'>react</Link></li>
                    <li><Link to='/front/vue'>vue</Link></li>
                </ul>
            </div>
            {/* 화면에 보이는 영역*/}
            <Routes>
                <Route path='/' element={<Home />} />       {/* 주소가 '/'면 Home컴포넌트 출력*/}
                <Route path='/about' element={<About />} />
                <Route path='/profile' element={<Profile />} />
                <Route path='/front/:name' element={<Front data={data} />} />
            </Routes>
        </BrowserRouter>
    );
};

export default App03;


/*
 :style 를 route path에 사용하면 useParams() 로 불러와 사용할 수 있다.
 : 뒤에 나오는 부분이 params의 key 부분이 되어 :name 는 name가 key가 되어 불러오고 있다.
*/