import React, { useState } from "react";
import { Layout, PageHeader } from "antd";
import Menu from "../../organism/Menu";
import Header from "../../organism/Header";
import logo from "../../../assets/logo.png";
import logoCollapsed from "../../../assets/logo-collapsed.png";

import "../style.less";

const MaterialPage = () => {
  const [isCollapsed, setCollapsed] = useState(false);
  const { Sider, Content } = Layout;

  const onCollapse = (collapsed) => {
    setCollapsed(collapsed);
  };

  return (
    <div className="home-page">
      <Layout>
        <Sider collapsible collapsed={isCollapsed} onCollapse={onCollapse}>
          <div className="logo-position">
            {isCollapsed ? (
              <img
                src={logoCollapsed}
                className="logo-collapsed"
                alt="logo collapsed"
              />
            ) : (
              <>
                <img src={logo} className="logo" alt="logo" />
              </>
            )}
          </div>
          <Menu />
        </Sider>
        <Layout className="site-layout">
          <Header />
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
              title="Material Page"
              subTitle="| 2021 Fall"
            />
          </Content>
        </Layout>
      </Layout>
    </div>
  );
};

export default MaterialPage;
