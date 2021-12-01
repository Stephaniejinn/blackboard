import React from "react";
import { Tabs } from "antd";
import { SettingOutlined } from "@ant-design/icons";
import CourseAnnouncement from "../CourseAnnouncement";
import CourseAssign from "../CourseAssign";
import CourseMaterial from "../CourseMaterial";

const CourseTab = () => {
  const { TabPane } = Tabs;

  const callback = (key) => {
    console.log(key);
  };
  const operations = <SettingOutlined />;

  return (
    <>
      <Tabs
        defaultActiveKey="1"
        onChange={callback}
        style={{ margin: 24 }}
        type="card"
        tabBarExtraContent={operations}
      >
        <TabPane tab="Announcement" key="1">
          <CourseAnnouncement />
        </TabPane>
        <TabPane tab="Assignment/Grade" key="2">
          <CourseAssign />
        </TabPane>
        <TabPane tab="Course Material" key="3">
          <CourseMaterial />
        </TabPane>
        <TabPane tab="Syllabus" key="4">
          Syllabus shows here
        </TabPane>
        <TabPane tab="Tools" key="5">
          Other tools that might be needed
        </TabPane>
      </Tabs>
    </>
  );
};

export default CourseTab;
