import { useState } from "react";
import "../../styles/TestCaseForm.css";

function TestCaseForm({ onCreate, onClose }) {
  const [formData, setFormData] = useState({
    test_flow: "",
    test_class: "",
    app_name: "",
    description: "",
    details: "",
    feature: "",
    test_parameters: "",
    active: 1,
    retry_count: 0,
    skip: false,
    skip_reason: "",
    test_suites: [],
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    if (type === "checkbox") {
      setFormData({ ...formData, [name]: checked });
    } else if (name === "test_suites") {
      setFormData({
        ...formData,
        test_suites: value.split(",").map((s) => s.trim()),
      });
    } else if (name === "retry_count" || name === "active") {
      setFormData({ ...formData, [name]: parseInt(value, 10) });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onCreate(formData);
    onClose();
  };

  return (
    <div className="form-overlay">
      <form className="testcase-form" onSubmit={handleSubmit}>
        <input
          name="test_flow"
          placeholder="Test Flow"
          value={formData.test_flow}
          onChange={handleChange}
        />
        <input
          name="test_class"
          placeholder="Test Class"
          value={formData.test_class}
          onChange={handleChange}
        />
        <input
          name="app_name"
          placeholder="App Name"
          value={formData.app_name}
          onChange={handleChange}
        />
        <textarea
          name="description"
          placeholder="Description"
          value={formData.description}
          onChange={handleChange}
          rows={5}
          style={{ gridColumn: "span 3" }}
        />

        <input
          name="details"
          placeholder="Details"
          value={formData.details}
          onChange={handleChange}
        />
        <input
          name="feature"
          placeholder="Feature"
          value={formData.feature}
          onChange={handleChange}
        />
        <input
          name="test_parameters"
          placeholder="Test Parameters"
          value={formData.test_parameters}
          onChange={handleChange}
        />
        <input
          name="retry_count"
          type="number"
          placeholder="Retry Count"
          value={formData.retry_count}
          onChange={handleChange}
        />
        <input
          name="active"
          type="number"
          placeholder="Active (1 or 0)"
          value={formData.active}
          onChange={handleChange}
        />
        <label>
          <input
            name="skip"
            type="checkbox"
            checked={formData.skip}
            onChange={handleChange}
          />
          Skip
        </label>
        <input
          name="skip_reason"
          placeholder="Skip Reason"
          value={formData.skip_reason}
          onChange={handleChange}
        />
        <input
          name="test_suites"
          placeholder="Test Suites (comma-separated)"
          value={formData.test_suites.join(", ")}
          onChange={handleChange}
        />
        <div
          style={{ display: "flex", justifyContent: "flex-end", gap: "0.5rem" }}
        >
          <button type="button" onClick={onClose}>
            Cancel
          </button>
          <button type="submit" onClick={onCreate}>
            Create
          </button>
        </div>
      </form>
    </div>
  );
}

export default TestCaseForm;
