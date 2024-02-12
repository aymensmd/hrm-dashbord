import React from 'react';
import { Table, Tag, Space } from 'antd';

const { Column } = Table;

const employeeData = [
  {
    key: '1',
    firstName: 'John',
    lastName: 'Brown',
    age: 32,
    address: 'Tunisia',
    team: 'Development',
    tags: [ 'developer'],
  },
  {
    key: '2',
    firstName: 'Jim',
    lastName: 'Green',
    age: 42,
    address: 'London No. 1 Lake Park',
    team: 'Design',
    tags: ['sales man'],
  },
  {
    key: '3',
    firstName: 'Joe',
    lastName: 'Black',
    age: 32,
    address: 'Sydney No. 1 Lake Park',
    team: 'Development',
    tags: ['designer'],
  },

];

const EmployeeTable = () => (
  <Table dataSource={employeeData}>
    <Column title="First Name" dataIndex="firstName" key="firstName" />
    <Column title="Last Name" dataIndex="lastName" key="lastName" />
    <Column title="Age" dataIndex="age" key="age" />
    <Column title="Address" dataIndex="address" key="address" />
    <Column title="Team" dataIndex="team" key="team" />
    <Column
      title="Tags"
      dataIndex="tags"
      key="tags"
      render={(tags) => (
        <>
          {tags.map((tag) => (
            <Tag color="blue" key={tag}>
              {tag}
            </Tag>
          ))}
        </>
      )}
    />
    <Column
      title="Action"
      key="action"
      render={(_, record) => (
        <Space size="middle">
          <a>Invite {record.lastName}</a>
          <a>Delete</a>
        </Space>
      )}
    />
  </Table>
);

export default EmployeeTable;
