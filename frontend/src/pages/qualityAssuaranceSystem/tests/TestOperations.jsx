import React, { useState, useEffect } from 'react';
import axios from 'axios';

import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';

const TestOperations = () => {
  const [tests, setTests] = useState([]);
  const [newTestId, setNewTestId] = useState('');
  const [newTestName, setNewTestName] = useState('');
  const [fetchTestId, setFetchTestId] = useState('');
  const [fetchedTest, setFetchedTest] = useState(null);
  const [deleteTestId, setDeleteTestId] = useState('');
  const [deleteResponse, setDeleteResponse] = useState('');

  useEffect(() => {
    fetchTests();
  }, []);

  const fetchTests = async () => {
    try {
      const response = await axios.get('https://spring-boot-companya.azurewebsites.net/api/v1/tests');
      setTests(response.data);
    } catch (error) {
      console.error('Error fetching tests:', error);
    }
  };

  const handleAddTest = async () => {
    try {
      const response = await axios.post('https://spring-boot-companya.azurewebsites.net/api/v1/tests/addTest', {
        testId: newTestId,
        name: newTestName,
      });
      setTests([...tests, response.data]);
      setNewTestId('');
      setNewTestName('');
    } catch (error) {
      console.error('Error adding test:', error);
    }
  };

  const handleDeleteTest = async () => {
    try {
      const response = await axios.delete(`https://spring-boot-companya.azurewebsites.net/api/v1/tests/delete/${deleteTestId}`);
      setTests(tests.filter((test) => test.testId !== deleteTestId));
      setDeleteResponse(response.data);
      setDeleteTestId('');
    } catch (error) {
      console.error('Error deleting test:', error);
    }
  };

  const handleFetchTest = async () => {
    try {
      const response = await axios.get(`https://spring-boot-companya.azurewebsites.net/api/v1/tests/getTest/${fetchTestId}`);
      setFetchedTest(response.data);
      if (response.data === null) {
        alert('Invalid ID. Please check and try again.');
      }
    } catch (error) {
      console.error('Error fetching test:', error);
    }
  };

  return (
    <div>
      <div style={{ margin: '30px 0' }}>
        <Typography variant="h6" gutterBottom>All Available Tests</Typography>
        {/* {tests.map((test) => (
          <Typography key={test.testId} gutterBottom>{test.name}</Typography>
        ))} */}
        <table style={{ maxWidth: '500px' }}>
    <thead>
      <tr>
        <th>Test ID</th>
        <th>Name</th>
      </tr>
    </thead>
    <tbody>
      {tests.map((test) => (
        <tr key={test.testId}>
          <td>{test.testId}</td>
          <td>{test.name}</td>
        </tr>
      ))}
    </tbody>
  </table>
      </div>
      <div style={{ margin: '30px 0' }}>
        <Typography variant="h6" gutterBottom>Add New Test</Typography>
        <form onSubmit={handleAddTest}>
          <TextField
            label="Test ID"
            variant="outlined"
            value={newTestId}
            onChange={(e) => setNewTestId(e.target.value)}
            required
            style={{ marginRight: '6px' }}
          />
          <TextField
            label="Test Name"
            variant="outlined"
            value={newTestName}
            onChange={(e) => setNewTestName(e.target.value)}
            required
            style={{ marginRight: '6px' }}
          />
          <Button type="submit" variant="contained" color="primary">Add Test</Button>
        </form>
      </div>
      <div style={{ margin: '30px 0' }}>
        <Typography variant="h6" gutterBottom>Enter the ID to get a specific test</Typography>
        <TextField
          label="Test ID to fetch"
          variant="outlined"
          value={fetchTestId}
          onChange={(e) => setFetchTestId(e.target.value)}
          style={{ marginRight: '6px' }}
        />
        <Button onClick={handleFetchTest} variant="contained" color="primary">Fetch Test</Button>
        {fetchedTest && (
          <div>
            <Typography variant="h6" gutterBottom>Fetched Test</Typography>
            <Typography>ID: {fetchedTest.testId}</Typography>
            <Typography>Name: {fetchedTest.name}</Typography>
          </div>
        )}
      </div>
      <div style={{ margin: '30px 0' }}>
        <Typography variant="h6" gutterBottom>Enter the ID to delete a specific test</Typography>
        <TextField
          label="Test ID to delete"
          variant="outlined"
          value={deleteTestId}
          onChange={(e) => setDeleteTestId(e.target.value)}
          style={{ marginRight: '6px', marginBottom: '4px' }}
        />
        <Button onClick={handleDeleteTest} variant="contained" color="secondary" >Delete Test</Button>
        {deleteResponse && <Typography style={{ color: 'purple', fontWeight: 'bold' }}>{deleteResponse}</Typography>}
      </div>
    </div>
  );
};

export default TestOperations;
