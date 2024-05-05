import React from "react";
import CardComp from "../../components/sideComps/CardComp";
import TableComp from '../../components/sideComps/TableComp'
import avatar from '../../assets/avatar.svg';
import Typography from '@mui/material/Typography'; // Import Typography

export function DashboardView(props) {
    const dataList = [
        {
            image: avatar,
            altText: "Avatar 1",
            count: "Finance Manager",
            name: "Michael Brown"
        },
        
    ];

    return (
        <>
            <main>
                <div className="head-title">
                    <div className="left">
                        <Typography variant="h1">Dashboard</Typography>
                    </div>
                    <CardComp data={dataList}/>
                </div>
            </main>
        </>
    )
}
