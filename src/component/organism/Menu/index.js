import React from "react";
import { HashLink as Link } from "react-router-hash-link";
import { Menu } from "antd";
import {
  HomeOutlined,
  CalendarOutlined,
  ReadOutlined,
  CustomerServiceOutlined,
  FileTextOutlined,
  RiseOutlined,
  NotificationOutlined,
  FolderOpenOutlined,
  EditOutlined,
} from "@ant-design/icons";
// import "./style.less";

const MySider = () => {
  const { pathname: path } = window.location;

  return (
    <Menu
      theme="dark"
      mode="inline"
      defaultSelectedKeys={["/"]}
      selectedKeys={path}
      style={{ background: "#2b2828" }}
    >
      <Menu.Item key="/" icon={<HomeOutlined />}>
        <Link to="/">Home</Link>
      </Menu.Item>
      <Menu.Item key="/course" icon={<FileTextOutlined />}>
        <Link to="/course">Course</Link>
      </Menu.Item>
      <Menu.Item key="/announcement" icon={<NotificationOutlined />}>
        <Link to="/announcement">Announcement</Link>
      </Menu.Item>
      <Menu.Item key="/assignment" icon={<EditOutlined />}>
        <Link to="/assignment">Assignment</Link>
      </Menu.Item>
      <Menu.Item key="/grade" icon={<RiseOutlined />}>
        <Link to="/grade">Grade</Link>
      </Menu.Item>
      <Menu.Item key="/material" icon={<FolderOpenOutlined />}>
        <Link to="/material">Material</Link>
      </Menu.Item>
      <Menu.Item key="/calendar" icon={<CalendarOutlined />}>
        <Link to="/calendar">Calendar</Link>
      </Menu.Item>
      <Menu.Item key="/library" icon={<ReadOutlined />}>
        <Link to="/library">Library</Link>
      </Menu.Item>
      <Menu.Item key="/studentservice" icon={<CustomerServiceOutlined />}>
        <Link to="/studentservice">Student Service</Link>
      </Menu.Item>
    </Menu>
  );
};

export default MySider;
