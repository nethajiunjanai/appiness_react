import React, { Component } from 'react';
import {
    DataTable,
    TableHeader,
    TableBody,
    TableRow,
    TableColumn,
} from 'react-md';

class Dashboard extends Component {
  render() {
        const { tableData } = this.props;
        return (<div className="user_table">
            <DataTable plain>
                <TableHeader>
                    <TableRow>
                        <TableColumn>Id</TableColumn>
                        <TableColumn>Name</TableColumn>
                        <TableColumn>Age</TableColumn>
                        <TableColumn>Gender</TableColumn>
                        <TableColumn>Email</TableColumn>
                        <TableColumn>PhoneNo</TableColumn>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {tableData.map((value,key) => (
                        <TableRow key={key}>
                            <TableColumn>{value.id}</TableColumn>
                            <TableColumn>{value.name}</TableColumn>
                            <TableColumn>{value.age}</TableColumn>
                            <TableColumn>{value.gender}</TableColumn>
                            <TableColumn>{value.email}</TableColumn>
                            <TableColumn>{value.phoneNo}</TableColumn>
                        </TableRow>
                    ))}
                </TableBody>
            </DataTable>
        </div>)
    }
};

export default Dashboard;