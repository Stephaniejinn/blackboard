import React from "react";
import { Layout, List, Avatar, PageHeader } from "antd";
import "./style.less";

const AnnouncementContent = () => {
  const { Content } = Layout;
  const data = [
    {
      title: "CSE518 | A kind reminder",
    },
    {
      title: "CSE523 | Due dates",
    },
    {
      title: "CSE518 | Homework 3 uploaded",
    },
    {
      title: "CSE518 | Homework 2 uploaded",
    },
  ];

  return (
    <div>
      <Content
        className="site-layout-background"
        style={{
          margin: "24px 16px",
          minHeight: 280,
        }}
      >
        <PageHeader
          className="site-page-header"
          onBack={() => window.history.back()}
          title="Announcement"
          subTitle="| 2021 Fall"
        />
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
      </Content>
    </div>
  );
};

export default AnnouncementContent;
