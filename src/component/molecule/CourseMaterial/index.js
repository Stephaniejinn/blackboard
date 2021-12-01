import React from "react";
import { List, Avatar, Button } from "antd";

const CourseMaterial = () => {
  const data = [
    {
      title: "Review material",
    },
    {
      title: "Previous exams and practice exams",
    },
    {
      title: "Lecture Note",
    },
  ];

  return (
    <>
      <List
        itemLayout="horizontal"
        dataSource={data}
        renderItem={(item) => (
          <List.Item
            actions={[
              <Button type="primary" key="list-loadmore-edit">
                Preview
              </Button>,
              <Button type="primary" key="list-loadmore-more">
                Download
              </Button>,
            ]}
          >
            <List.Item.Meta
              avatar={<Avatar size={40}>DanZ</Avatar>}
              title={item.title}
              description="Here are some description of the material"
            />
          </List.Item>
        )}
      />
    </>
  );
};

export default CourseMaterial;
