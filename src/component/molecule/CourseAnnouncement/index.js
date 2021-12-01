import React from "react";
import { List, Avatar } from "antd";

const CourseAnnouncement = () => {
  const data = [
    {
      title: "Some deadlines and midterm paper 11/23/21, 14:54",
    },
    {
      title: "Come and get your Midterm paper | 11/19/21, 15:50",
    },
    {
      title: "Assignment 3 has been published | 11/12/21, 15:12",
    },
  ];

  return (
    <>
      <List
        itemLayout="horizontal"
        dataSource={data}
        renderItem={(item) => (
          <List.Item>
            <List.Item.Meta
              avatar={<Avatar size={40}>DanZ</Avatar>}
              title={item.title}
              description="Here are some description of the announcement"
            />
          </List.Item>
        )}
      />
    </>
  );
};

export default CourseAnnouncement;
