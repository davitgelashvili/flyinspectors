import { Route, Routes } from 'react-router-dom';
import './App.scss';
import Footer from './components/Common/Footer/Footer';
import Header from './components/Common/Header/Header';
import Main from './Pages/Main/Main';
import SubmitClaim from './Pages/SubmitClaim/SubmitClaim';
import YourRights from './Pages/Your Rights/YourRights';
import AdminPanel from './Pages/AdminPanel/AdminPanel';

function App() {

    return (
        <>
        <Header />
        <Routes>
            <Route path={'/'} element={<Main />}/>
            <Route path={'/submit-claim'} element={<SubmitClaim />}/>
            <Route path={'/your-rights'} element={<YourRights />}/>
            <Route path={'/adminpanel'} element={<AdminPanel />}/>
        </Routes>
        <Footer />
        </>
    )
}

export default App;
