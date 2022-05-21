import {lazy, Suspense} from 'react'
import {Route, Routes} from "react-router-dom";

const SignUp = lazy(() => import ('../components/SignUp'));


const Home = () => {
    return (
        <Suspense fallback={<div>Loading...</div>}>
            <Routes>
                <Route path='/register' element={<SignUp/>}/>
            </Routes>
        </Suspense>
    )
}

export default Home;