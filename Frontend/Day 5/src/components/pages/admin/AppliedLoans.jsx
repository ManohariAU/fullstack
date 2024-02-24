import { useState } from 'react';
import '../../../assets/css/AppliedLoans.css';
import AdminNavbar from '../../services/AdminNavbar';
import { Button } from '@mui/material';

const AppliedLoans = () => {
  const cardsData = [
    { name: 'Applicant Name : Manohari', id: 'Application Loan Id : 123456', phone: 'Applicant Phone No : 9876543210', address: 'Application Address : XXXXXX', email: 'Application Email : XXXXXX@gmail.com', loan: 'Loan Amount : 400000' },
    { name: 'Applicant Name : Monisha', id: 'Application Loan Id : 135790', phone: 'Applicant Phone No : 957577433', address: 'Application Address : XXXXXX', email: 'Application Email : XXXXXX@gmail.com', loan: 'Loan Amount : 800000' },
    { name: 'Applicant Name : Madhumathi', id: 'Application Loan Id : 2344291', phone: 'Applicant Phone No : 919847433', address: 'Application Address : XXXXXX', email: 'Application Email : XXXXXX@gmail.com', loan: 'Loan Amount : 100000' },
  ];

  const [approvalStatus, setApprovalStatus] = useState({});

  const handleApprove = (id) => {
    setApprovalStatus(prevState => ({
      ...prevState,
      [id]: 'Approved'
    }));
  };

  const handleReject = (id) => {
    setApprovalStatus(prevState => ({
      ...prevState,
      [id]: 'Rejected'
    }));
  };

  return (
    <div>
      <AdminNavbar />
      <h1 style={{ textAlign: "center", marginTop: "80px" }}>Applied Loans</h1>
      <div className="appliedcard-list">
        {cardsData.map((acard, index) => (
          <div key={index} className="appliedcard">
            <p className="acard-title">{acard.name}</p>
            <p className="acard-title">{acard.id}</p>
            <p className="acard-title">{acard.phone}</p>
            <p className="acard-title">{acard.address}</p>
            <p className="acard-title">{acard.email}</p>
            <p className="acard-title">{acard.loan}</p>
            {approvalStatus[acard.id] ? ( // Display status if available
              <p className='acard-title'><strong>Status: {approvalStatus[acard.id]}</strong></p>
            ) : ( // Display buttons if status is not available
              <div style={{ display: "flex", paddingLeft: "70px", paddingTop: "20px" }}>
                <div style={{ paddingRight: "50px" }}>
                  <Button
                    style={{ color: "white", backgroundColor: "green", borderRadius: "6px" }}
                    onClick={() => handleApprove(acard.id)}>Approve</Button>
                </div>
                <div>
                  <Button
                    style={{ color: "white", backgroundColor: "red", borderRadius: "6px" }}
                    onClick={() => handleReject(acard.id)}>Reject</Button>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default AppliedLoans;
