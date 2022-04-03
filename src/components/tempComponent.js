//Roll No., Student name, Subject Name,
const StudentTable = ({ data }) => {
  const tableRows = data.map((data) => {
    return (
      <tr>
        <td>{data.rollno}</td>
        <td>{data.studentName}</td>
        <td>{data.subjectName}</td>
      </tr>
    );
  });
  return (
    <div>
      <table>
        <tr>
          <th>Roll No.</th>
          <th>Student name</th>
          <th>Subject Name</th>
        </tr>
        {tableRows}
      </table>
    </div>
  );
};

export default StudentTable;
