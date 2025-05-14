function TestCaseList({ testCases }) {
  return (
    <>
      <h2>Test Cases</h2>
      <div className="testcase-list">
        {testCases.map((testCase) => (
          <div key={testCase.id} className="testcase-card">
            <h3>{testCase.description}</h3>
            <p>{testCase.steps}</p>
          </div>
        ))}
      </div>
    </>
  );
}

export default TestCaseList;
