import '../../styles/dashboard.css';
import '../../styles/style.css';
import {Route, Routes} from 'react-router-dom';
import avatar from '../../assets/avatar.svg';
import {SideNavigation, TopBar} from '../../components/sideComps/dashBoardComps';
import {
    dashboardAdminData,
} from './data/DashBoardData';

import {DashboardView} from './pages/DashboardView';
import {ViewStocks} from './pages/ViewStocks';
import LogisticsAndMaintenanceProvider from "./context/logisticsAndMaintenanceContext.jsx";
import {useEffect} from "react";


export default function Dashboard() {


    const addJs = () => {
        const allSideMenu = document.querySelectorAll('#sidebar .side-menu.top li a');

        allSideMenu.forEach(item => {
            const li = item.parentElement;

            item.addEventListener('click', function () {
                allSideMenu.forEach(i => {
                    i.parentElement.classList.remove('active');
                })
                li.classList.add('active');
            })
        });

        // TOGGLE SIDEBAR
        const menuBar = document.querySelector('#content nav .bx.bx-menu');
        const sidebar = document.getElementById('sidebar');

        menuBar.addEventListener('click', function () {
            sidebar.classList.toggle('hideSidebar');
        })


       
    }

    useEffect(() => {
        addJs()
    }, [])

    return (
        <>
            <div id="dashboardWrapper">

                <SideNavigation data={dashboardAdminData}/>

                <section id="content" style={{height: '100vh'}}>
                    <TopBar avatar={avatar}/>
                    <LogisticsAndMaintenanceProvider>
                        <Routes>
                            <Route path="/dashboard" element={<DashboardView/>}/>
                            <Route path="/view-machinery" element={<ViewStocks data="machinery"/>}/>
                            <Route path="/view-vehicle" element={<ViewStocks data="vehicle"/>}/>
                            <Route path="/view-technician" element={<ViewStocks data="technician"/>}/>
                            <Route path="/view-vendor" element={<ViewStocks data="vendor"/>}/>
                            <Route path="/view-services-maintenance" element={<ViewStocks data="serviceMaintenance"/>}/>
                        </Routes>
                    </LogisticsAndMaintenanceProvider>
                </section>

            </div>

        </>
    )
}