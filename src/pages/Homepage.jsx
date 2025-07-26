import React, { useState } from 'react';
import { Modal, Button, Form, Alert } from 'react-bootstrap';
import SearchBar from '../components/SearchBar';

function HomePage() {
  const [showApplyModal, setShowApplyModal] = useState(false);
  const [selectedJob, setSelectedJob] = useState(null);
  const [jobTypeFilter, setJobTypeFilter] = useState('All');
  const [locationFilter, setLocationFilter] = useState('All');
  const [currentPage, setCurrentPage] = useState(1);
  const [successMessage, setSuccessMessage] = useState('');
  const [formData, setFormData] = useState({ name: '', email: '', resume: '' });

  const jobsPerPage = 6;

  const jobs = [
    { id: 1, title: "Frontend Developer", company: "CodeWorks", location: "Remote", type: "Full-time" },
    { id: 2, title: "Backend Engineer", company: "ByteBase", location: "Bengalore", type: "Contract" },
    { id: 3, title: "UI/UX Designer", company: "RetroSoft", location: "mumbai", type: "Part-time" },
    { id: 4, title: "DevOps Engineer", company: "CloudNova", location: "Remote", type: "Full-time" },
    { id: 5, title: "Mobile App Developer", company: "AppNest", location: "Bengalore", type: "Internship" },
    { id: 6, title: "Product Manager", company: "Visionary Inc.", location: "Pune", type: "Full-time" },
    { id: 7, title: "Data Analyst", company: "DataBloom", location: "Hydrabad", type: "Part-time" },
    { id: 8, title: "QA Tester", company: "BugSquashers", location: "Qutar", type: "Contract" },
    { id: 9, title: "AI Researcher", company: "NeuroTech", location: "San Francisco", type: "Full-time" },
    { id: 10, title: "Systems Architect", company: "BuildStack", location: "Remote", type: "Full-time" },
    { id: 11, title: "Technical Writer", company: "DocuCraft", location: "Satellite", type: "Freelance" },
    { id: 12, title: "Game Developer", company: "PixelForge", location: "Tokyo", type: "Full-time" },
    { id: 13, title: "Cybersecurity Analyst", company: "SafeNet", location: "Washington D.C.", type: "Full-time" },
    { id: 14, title: "Machine Learning Engineer", company: "DeepData", location: "Zurich", type: "Full-time" },
    { id: 15, title: "Blockchain Developer", company: "ChainWise", location: "Singapore", type: "Remote" },
    { id: 16, title: "IT Support Specialist", company: "HelpDeskHQ", location: "Chennai", type: "Part-time" },
    { id: 17, title: "SEO Specialist", company: "RankLabs", location: "Los Angeles", type: "Contract" },
    { id: 18, title: "Cloud Solutions Architect", company: "SkyTech", location: "Sydney", type: "Full-time" },
    { id: 19, title: "Business Analyst", company: "InsightX", location: "Amsterdam", type: "Full-time" },
    { id: 20, title: "Web Designer", company: "CreativeDots", location: "thailand", type: "Freelance" }
  ];

  const filteredJobs = jobs.filter((job) => {
    return (
      (jobTypeFilter === 'All' || job.type === jobTypeFilter) &&
      (locationFilter === 'All' || job.location === locationFilter)
    );
  });

  const indexOfLastJob = currentPage * jobsPerPage;
  const indexOfFirstJob = indexOfLastJob - jobsPerPage;
  const currentJobs = filteredJobs.slice(indexOfFirstJob, indexOfLastJob);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const handleApplyClick = (job) => {
    setSelectedJob(job);
    setShowApplyModal(true);
    setFormData({ name: '', email: '', resume: '' }); // reset form
  };

  const handleFormChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmitApplication = (e) => {
    e.preventDefault();
    setShowApplyModal(false);
    setSuccessMessage(`✅ Successfully applied for ${selectedJob.title} at ${selectedJob.company}!`);
  };

  return (
    <div className="container mt-5">
      {/* Logo + Search Bar */}
      <header className="mb-4 text-center">
        <h1 className="display-5 fw-bold" style={{ fontFamily: 'Georgia', color: '#2c3e50' }}>🎯 JobVault</h1>
        <p className="lead">Find your dream job with a vintage-modern touch.</p>
        <SearchBar />
      </header>

      {/* Success Message */}
      {successMessage && (
        <Alert variant="success" onClose={() => setSuccessMessage('')} dismissible>
          {successMessage}
        </Alert>
      )}

      {/* Filters */}
      <div className="mb-4 text-center">
        <select
          className="form-select d-inline-block w-auto"
          onChange={(e) => setJobTypeFilter(e.target.value)}
          value={jobTypeFilter}
        >
          <option value="All">All Job Types</option>
          <option value="Full-time">Full-time</option>
          <option value="Part-time">Part-time</option>
          <option value="Contract">Contract</option>
          <option value="Internship">Internship</option>
          <option value="Freelance">Freelance</option>
        </select>

        <select
          className="form-select d-inline-block w-auto ms-2"
          onChange={(e) => setLocationFilter(e.target.value)}
          value={locationFilter}
        >
          <option value="All">All Locations</option>
          <option value="Remote">Remote</option>
          <option value="Bengalore">Bengalore</option>
          <option value="mumbai">mumbai</option>
          <option value="Pune">Pune</option>
          <option value="Hydrabad">Hydrabad</option>
          <option value="Qutar">Qutar</option>
          <option value="San Francisco">San Francisco</option>
          <option value="Sydney">Sydney</option>
          <option value="thailand">Thailand</option>
          <option value="Tokyo">Tokyo</option>
        </select>
      </div>

      {/* Job Listings */}
      <div className="row">
        {currentJobs.map((job) => (
          <div className="col-md-4 mb-4" key={job.id}>
            <div className="card shadow rounded-4 border-0" style={{ background: "#fdf6e3" }}>
              <div className="card-body">
                <h5 className="card-title">{job.title}</h5>
                <p className="card-text"><strong>{job.company}</strong></p>
                <p className="text-muted">{job.location} • {job.type}</p>
                <button className="btn btn-primary rounded-pill" onClick={() => handleApplyClick(job)}>
                  Apply
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Pagination */}
      <div className="d-flex justify-content-center">
        <nav>
          <ul className="pagination">
            {[...Array(Math.ceil(filteredJobs.length / jobsPerPage))].map((_, index) => (
              <li className="page-item" key={index + 1}>
                <button className="page-link" onClick={() => paginate(index + 1)}>
                  {index + 1}
                </button>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      {/* Apply Modal */}
      <Modal show={showApplyModal} onHide={() => setShowApplyModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Apply for {selectedJob?.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleSubmitApplication}>
            <Form.Group controlId="formName" className="mb-3">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                name="name"
                placeholder="Your full name"
                value={formData.name}
                onChange={handleFormChange}
                required
              />
            </Form.Group>
            <Form.Group controlId="formEmail" className="mb-3">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                name="email"
                placeholder="your@email.com"
                value={formData.email}
                onChange={handleFormChange}
                required
              />
            </Form.Group>
            <Form.Group controlId="formResume" className="mb-3">
              <Form.Label>Resume (URL)</Form.Label>
              <Form.Control
                type="text"
                name="resume"
                placeholder="Link to your resume"
                value={formData.resume}
                onChange={handleFormChange}
              />
            </Form.Group>

            <div className="text-end">
              <Button variant="secondary" className="me-2" onClick={() => setShowApplyModal(false)}>
                Cancel
              </Button>
              <Button variant="success" type="submit">
                Submit Application
              </Button>
            </div>
          </Form>
        </Modal.Body>
      </Modal>
    </div>
  );
}

export default HomePage;
