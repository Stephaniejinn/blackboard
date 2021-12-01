import React from "react";
import { Table, Tag, Space, Typography } from "antd";

const CourseAssign = () => {
  const { Text } = Typography;
  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
      render: (text) => <a>{text}</a>,
    },
    {
      title: "Status",
      key: "status",
      dataIndex: "status",
      render: (tags) => (
        <>
          {tags.map((tag) => {
            let color =
              tag === "submitted"
                ? "green"
                : tag === "Not Completed"
                ? "volcano"
                : "num";
            return (
              <>
                {color === "num" ? (
                  <Text strong> {tag}</Text>
                ) : (
                  <Tag color={color} key={tag}>
                    {tag.toUpperCase()}
                  </Tag>
                )}
              </>
            );
          })}
        </>
      ),
    },
    {
      title: "Released",
      dataIndex: "released",
      key: "released",
    },
    {
      title: "Due",
      dataIndex: "due",
      key: "due",
    },

    {
      title: "Action",
      key: "action",
      render: (text, record) => (
        <Space size="middle">
          <a>Email Grader </a>
        </Space>
      ),
    },
  ];

  const data = [
    {
      key: "1",
      name: "Homework #3",
      released: "Sep 24",
      due: "Friday, Oct 8, 2021, 11:59PM",
      status: ["Not Completed"],
    },
    {
      key: "2",
      name: "Homework #2",
      released: "Oct 29, 2021",
      due: "Friday, Nov 12, 11:59PM",
      status: ["submitted"],
    },
    {
      key: "3",
      name: "Homework #1",
      released: "Nov 19",
      due: "Friday, Sep 3, 11:59PM",
      status: ["92.0/100.0"],
    },
  ];
  return (
    <>
      <Table columns={columns} dataSource={data} />
    </>
  );
};

export default CourseAssign;
