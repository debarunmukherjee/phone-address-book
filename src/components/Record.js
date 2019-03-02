import React from 'react';

const Records = ({records, deleteRecord}) => {

  const recordList = records.length ? (
    records.map(record => {
      return (
        <tr  key={record.id}>
            <td>{record.name}</td>
            <td>
                <div className="row">
                    <div className="col">
                        {record.phone}
                    </div>
                    <div className="col float-right">
                        <button type="button" className="btn btn-danger" onClick={() => {deleteRecord(record.id)}}>Delete</button>
                    </div>
                </div>
            </td>
        </tr>
      )
    })
  ) : (
    <p className="center">You have no records!</p>
  );
  return (
      <tbody>
          {recordList}
      </tbody>
      
  )
}
export default Records;