import {Route, Routes} from 'react-router-dom';
import Home from './home/components/home';
import MainLayout from './common/components/layout';
import Login from './auth/components/login';
import ProtectedRoute from './auth/components/protected-route';
import Orders from './orders/components/orders';
import Patients, {PatientsPagePermissions} from './patients/components/patients';
import NotFound from './common/components/not-found';
import Unauthorized from './common/components/unauthorized';
import Patient from "./patients/components/patient";
import About from "./about/components/about";
import OrderInbox from "./orders/components/order-inbox";

function App() {
    return (
        <div>
            <Routes>
                <Route path="/" element={<MainLayout/>}>
                    <Route
                        index
                        element={
                            <ProtectedRoute>
                                <Home/>
                            </ProtectedRoute>
                        }
                    ></Route>
                    <Route
                        path="orders"
                    >
                        <Route index element={
                            <Orders/>
                        }></Route>
                        <Route
                            path="inbox"
                            element={
                                <OrderInbox/>
                            }
                        ></Route>
                    </Route>
                    <Route
                        path="patients"
                        element={
                            <ProtectedRoute requiredPermissions={PatientsPagePermissions}>
                                <Patients/>
                            </ProtectedRoute>
                        }
                    >
                    </Route>
                    <Route
                        path="patient/*"
                        element={
                            <Patient/>
                        }
                    >
                    </Route>
                </Route>
                <Route path="login" element={<Login/>}/>
                <Route path="unauthorized" element={<Unauthorized/>}/>
                <Route path="about" element={<About/>}/>
                <Route path="*" element={<NotFound/>}/>
            </Routes>
        </div>
    );
}

export default App;
