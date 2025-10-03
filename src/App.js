import "./style.css";
function App() {
  return (
    <div>
      <div className="container-fluid my-4">
        <div className="form-container">
          <h2 className="form-header">
            <span className="back-arrow">&lt;</span> Purchase Order | New
          </h2>

          <form id="purchaseOrderForm" className="needs-validation" novalidate>
            <div className="row">
              <div className="col-lg-3 col-md-6 mb-4">
                <label className="form-label">Client Name*</label>
                <select className="form-select" required>
                  <option selected>Collabera Inc</option>
                </select>
              </div>
              <div className="col-lg-3 col-md-6 mb-4">
                <label className="form-label">Purchase Order Type*</label>
                <select className="form-select" required>
                  <option selected>Group PO</option>
                </select>
              </div>
              <div className="col-lg-3 col-md-6 mb-4">
                <label className="form-label">Purchase Order No.*</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="PO Number"
                  required
                />
              </div>
              <div className="col-lg-3 col-md-6 mb-4">
                <label className="form-label">Received On*</label>
                <input type="date" className="form-control" required />
              </div>
              <div className="col-lg-3 col-md-6 mb-4">
                <label className="form-label">Received From*</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Received From Name"
                  required
                />
              </div>
              <div className="col-lg-3 col-md-6 mb-4">
                <label className="form-label hidden-label">Email</label>
                <input
                  type="email"
                  className="form-control"
                  placeholder="Received From Email ID"
                  required
                />
              </div>
              <div className="col-lg-3 col-md-6 mb-4">
                <div className="row">
                  <div className="col-6">
                    <label className="form-label">PO Start Date*</label>
                    <input
                      type="date"
                      className="form-control"
                      id="poStartDate"
                      required
                    />
                  </div>
                  <div className="col-6">
                    <label className="form-label">PO End Date*</label>
                    <input
                      type="date"
                      className="form-control"
                      id="poEndDate"
                      required
                    />
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 mb-4">
                <div className="row">
                  <div className="col-6">
                    <label className="form-label">Budget*</label>
                    <input
                      type="number"
                      className="form-control"
                      max="99999"
                      placeholder="Budget"
                      required
                    />
                  </div>
                  <div className="col-6">
                    <label className="form-label">Currency*</label>
                    <select className="form-select" required>
                      <option selected>USD</option>
                    </select>
                  </div>
                </div>
              </div>
            </div>

            <div className="d-flex justify-content-between align-items-center mt-3 section-header-container">
              <h4 className="section-header mb-0">Talent Detail</h4>
              <button
                type="button"
                className="btn btn-add-another"
                id="addAnother"
              >
                + Add Another
              </button>
            </div>

            <div id="talent-details-container">
              <div className="talent-block">
                <div className="talent-job-id-section">
                  <div className="row align-items-center">
                    <div className="col-lg-3 col-md-6 mb-3 mb-lg-0">
                      <label className="form-label">Job Title/REQ Name*</label>
                      <select className="form-select">
                        <option selected>Application Development</option>
                      </select>
                    </div>
                    <div className="col-lg-3 col-md-6 mb-3 mb-lg-0">
                      <label className="form-label">Job ID/REQ ID*</label>
                      <input
                        type="text"
                        className="form-control"
                        select="OWNAI_234"
                      />
                    </div>
                    <div className="col-lg-6 col-md-12 talent-controls">
                      <i
                        className="bi bi-trash icon"
                        onclick="this.closest('.talent-block').remove()"
                      ></i>
                    </div>
                  </div>
                </div>
                <div className="talent-sub-details">
                  <div className="form-check mb-2 mt-3">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      id="monikaGoyal"
                    />
                    <label className="form-check-label" for="monikaGoyal">
                      Monika Goyal Test
                    </label>
                  </div>
                  <div className="row minimalist-inputs">
                    <div className="col-lg-3 col-md-6 mb-4">
                      <label className="form-label">Contract Duration</label>
                      <div className="input-group">
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Contract Duration"
                        />
                        <span className="input-group-text">Months</span>
                      </div>
                    </div>
                    <div className="col-lg-3 col-md-6 mb-4">
                      <div className="row">
                        <div className="col-6">
                          <label className="form-label">Bill Rate</label>
                          <div className="input-group">
                            <input
                              type="text"
                              className="form-control"
                              placeholder="Bill Rate"
                            />
                            <span className="input-group-text">/hr</span>
                          </div>
                        </div>
                        <div className="col-6">
                          <label className="form-label">Currency</label>
                          <select className="form-select">
                            <option selected>USD</option>
                          </select>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-3 col-md-6 mb-4">
                      <div className="row">
                        <div className="col-6">
                          <label className="form-label">Standard Time BR</label>
                          <div className="input-group">
                            <input
                              type="text"
                              className="form-control"
                              placeholder="Std. Time BR"
                            />
                            <span className="input-group-text">/hr</span>
                          </div>
                        </div>
                        <div className="col-6">
                          <label className="form-label">Currency</label>
                          <select className="form-select">
                            <option selected>USD</option>
                          </select>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-3 col-md-6 mb-4">
                      <div className="row">
                        <div className="col-6">
                          <label className="form-label">Over Time BR</label>
                          <div className="input-group">
                            <input
                              type="text"
                              className="form-control"
                              placeholder="Over Time BR"
                            />
                            <span className="input-group-text">/hr</span>
                          </div>
                        </div>
                        <div className="col-6">
                          <label className="form-label">Currency</label>
                          <select className="form-select">
                            <option selected>USD</option>
                          </select>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="form-check mb-2 mt-3">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      id="shalliKhatri"
                    />
                    <label className="form-check-label" for="shalliKhatri">
                      shalli khatri
                    </label>
                  </div>
                  <div className="row minimalist-inputs">
                    <div className="col-lg-3 col-md-6 mb-4">
                      <label className="form-label">Contract Duration</label>
                      <div className="input-group">
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Contract Duration"
                        />
                        <span className="input-group-text">Months</span>
                      </div>
                    </div>
                    <div className="col-lg-3 col-md-6 mb-4">
                      <div className="row">
                        <div className="col-6">
                          <label className="form-label">Bill Rate</label>
                          <div className="input-group">
                            <input
                              type="text"
                              className="form-control"
                              placeholder="Bill Rate"
                            />
                            <span className="input-group-text">/hr</span>
                          </div>
                        </div>
                        <div className="col-6">
                          <label className="form-label">Currency</label>
                          <select className="form-select">
                            <option selected>USD</option>
                          </select>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-3 col-md-6 mb-4">
                      <div className="row">
                        <div className="col-6">
                          <label className="form-label">Standard Time BR</label>
                          <div className="input-group">
                            <input
                              type="text"
                              className="form-control"
                              placeholder="Std. Time BR"
                            />
                            <span className="input-group-text">/hr</span>
                          </div>
                        </div>
                        <div className="col-6">
                          <label className="form-label">Currency</label>
                          <select className="form-select">
                            <option selected>USD</option>
                          </select>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-3 col-md-6 mb-4">
                      <div className="row">
                        <div className="col-6">
                          <label className="form-label">Over Time BR</label>
                          <div className="input-group">
                            <input
                              type="text"
                              className="form-control"
                              placeholder="Over Time BR"
                            />
                            <span className="input-group-text">/hr</span>
                          </div>
                        </div>
                        <div className="col-6">
                          <label className="form-label">Currency</label>
                          <select className="form-select">
                            <option selected>USD</option>
                          </select>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="form-actions">
              <button type="reset" className="btn btn-reset">
                Reset
              </button>
              <button type="submit" className="btn btn-save">
                Save
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
