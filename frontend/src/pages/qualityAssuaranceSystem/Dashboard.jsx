import '../../styles/dashboard.css';
import '../../styles/style.css';
import { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import avatar from '../../assets/avatar.svg';
import { SideNavigation, TopBar } from '../../components/sideComps/dashBoardComps';
import {
    dashboardAdminData,
} from './data/DashBoardData';

import { DashboardView, Reports, PrototypeOps, SampleOps, TestOps , ManagerOps ,SafetyOps } from './SideBarPages';




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

                <SideNavigation data={dashboardAdminData} />

                <section id="content" style={{height: '100vh'}}>
                    <TopBar avatar={avatar} />

                    <Routes>
                        <Route path="/dashboard" element={<DashboardView />} />
                        <Route path="/reports" element={<Reports />} />
                        <Route path="/prototypes" element={<PrototypeOps />} />
                        <Route path="/samples" element={<SampleOps />} />
                        <Route path="/tests" element={<TestOps />} />
                        <Route path="/qaManagers" element={<ManagerOps />} />
                        <Route path="/health-safety-practices" element={<SafetyOps />}/>
                    </Routes>
                </section>
                
            </div>

        </>
    )
}