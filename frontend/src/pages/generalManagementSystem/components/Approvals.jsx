import React, { useState, useEffect } from 'react';
import { Card, CardContent, Button } from '@mui/material';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';
import axios from 'axios';
import avatar from '../../../assets/avatar.svg';
import '../../../styles/dashboard.css';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import * as reqSend from '../../../global/reqSender.jsx';

const ApprovalCard = ({ name, email, message, status, id, onApprove }) => {
  let statusText;
  let chipColor;
  switch (status) {
    case 0:
      statusText = "New";
      chipColor = 'warning'; // Assigning color for 'New' status
      break;
    case 2:
      statusText = "Rejected";
      chipColor = 'error'; // Assigning color for 'Rejected' status
      break;
    case 1:
      statusText = "Approved";
      chipColor = 'success'; // Assigning color for 'Approved' status
      break;
    default:
      statusText = "Unknown";
      chipColor = 'default'; // Default color
  }

  const approveRequest = (id) => {
    reqSend.defaultReq("PUT", `api/request/approve?id=${id}`, {},
            response => {
                if (response.status === 200 && response.data) {

                } else {
                    console.error("Invalid response format:", response);
                }
            },
            error => {
                console.error("API request failed:", error);
            }
        );
  }

  const handleApproveClick = () => {
    approveRequest(id); // Assuming approveRequest is defined elsewhere
    onApprove(id); // Call the callback function with the request ID
};

  return (
    <Card sx={{
      borderRadius: '20px',
      background: 'var(--light)',
      padding: '24px',
      overflowX: 'auto',
      width: 'calc(90% - 30px)',
      marginBottom: '20px',
      marginLeft: '20px',
      display: 'inline-block'
    }}>
      <CardContent>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <Avatar src={avatar} alt="Avatar" sx={{ mr: 2 }} />
          <div>
            <Stack direction="row" spacing={1}>
              <Chip label={statusText} size="medium" variant="filled" color={chipColor} style={{ marginLeft: 'auto', position: 'relative', top: '-20px', left: '240px', textAlign: 'right' }} />
            </Stack>
            <Typography variant="h5" component="div">
              Request
            </Typography>
            <Typography variant="body1" color="textSecondary">
              Name: {name}
            </Typography>
            <Typography variant="body1" color="textSecondary">
              E-mail: {email}
            </Typography>
            <Typography variant="body1" color="textSecondary">
              Message: {message}
            </Typography>
            <Button onClick={handleApproveClick} variant="contained" color="primary" style={{ marginTop: '10px', marginRight: '10px' }}>
              Approve
            </Button>
            <Button variant="contained" color="primary" style={{ marginTop: '10px', marginRight: '10px' }}>
              Reject
            </Button>
            <Button variant="contained" color="primary" style={{ marginTop: '10px', marginRight: '10px' }}>
              Dismiss
            </Button>
          </div>
          <Button variant="contained" color="primary" style={{ position: 'absolute', top: '10px', right: '10px' }}>
            Action
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}

export default ApprovalCard;
