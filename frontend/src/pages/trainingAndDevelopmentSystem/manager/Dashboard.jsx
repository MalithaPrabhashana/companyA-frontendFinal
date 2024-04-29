import '../../../styles/dashboard.css';
import '../../../styles/style.css';
import { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import avatar from '../../../assets/avatar.svg';
import { SideNavigation, TopBar } from '../../../components/sideComps/dashBoardComps';
import {
    dashboardAdminData,
} from './data/DashBoardData';

import { AddCourse, AddMainSupervisor, AddOse, AddUnitSupervisor, Course, DashboardView, EditCourse, EditOse, MainSupervisors, Ose, UnitSupervisors } from './SideBarPages';
import NotFound from '../../generalManagementSystem/NotFound';




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


        const switchMode = document.getElementById('switch-mode');
        const wrapper = document.getElementById('dashboardWrapper');


        switchMode.addEventListener('change', function () {
            if (this.checked) {
                wrapper.classList.add('dark');
            } else {
                wrapper.classList.remove('dark');
            }
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
                        <Route path="/main-supervisors" element={<MainSupervisors />} />
                        <Route path="/unit-supervisors" element={<UnitSupervisors />} />
                        <Route path="/main-supervisors/add" element={<AddMainSupervisor />} />
                        <Route path="/unit-supervisors/add" element={<AddUnitSupervisor />} />
                        <Route path="/courses" element={<Course />} />
                        <Route path="/courses/add" element={<AddCourse />} />
                        <Route path="/courses/edit/:id" element={<EditCourse />} />
                        <Route path="/over-seas" element={<Ose />} />
                        <Route path="/over-seas/add" element={<AddOse />} />
                        <Route path="/over-seas/edit/:id" element={<EditOse />} />
                        <Route path="/*" element={<NotFound />}  />
                    </Routes>
                </section>
                
            </div>

        </>
    )
}