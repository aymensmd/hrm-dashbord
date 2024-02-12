// Sidebar.jsx
import React, { useState } from 'react';
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';

import { Menu } from 'antd';
import {
  HomeOutlined,
  ContactsOutlined,
  TeamOutlined,
  FileTextOutlined,
  UserOutlined,
  MessageOutlined ,
  UserAddOutlined,
  CalendarOutlined,
  QuestionCircleOutlined,
  BarChartOutlined,
  InfoCircleOutlined,
  LineChartOutlined,
  GlobalOutlined,
  LogoutOutlined,
} from '@ant-design/icons';
import { Box, IconButton, Typography, useTheme } from '@mui/material';
import { Link } from 'react-router-dom';
import { tokens } from '../../themes';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import LightModeOutlinedIcon from '@mui/icons-material/LightModeOutlined';

const { SubMenu } = Menu;

const Sidebar = ({ isSidebarOpen, setIsSidebarOpen }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [selected, setSelected] = useState('Dashboard');

  const handleMenuClick = (e) => {
    setSelected(e.key);
  };

  const handleToggleSidebar = () => {
    setIsSidebarOpen((prev) => !prev);
  };

  return (
    <Box
      sx={{
        position: 'fixed',
        top: 0,
        height: '100vh',
        width: '250px',
        background: colors.primary[400],
        overflowY: 'auto',
        zIndex: 1000,
        marginLeft: isSidebarOpen ? '0' : '-250px',
        transition: 'margin-left 0.3s ease',
        '& .ant-menu': {
          background: 'transparent',
        },
        '& .ant-menu-item, & .ant-menu-submenu-title': {
          color: colors.grey[100] + ' !important',
        },
        '& .ant-menu-item-selected, & .ant-menu-submenu-title-selected': {
          color: '#6870fa !important',
        },
      }}
    >
      <div style={{ padding: '20px', borderBottom: `1px solid ${colors.grey[800]}` }}>
        <Box display="flex" justifyContent="space-between" alignItems="center">
          <Typography variant="h3" color={colors.grey[100]}>
            Comunik HRM
          </Typography>
          <IconButton onClick={handleToggleSidebar}>
            <MenuOutlinedIcon />
          </IconButton>
        </Box>
      </div>
      <Menu
        mode="inline"
        defaultSelectedKeys={['Dashboard']}
        selectedKeys={[selected]}
        onClick={handleMenuClick}
        style={{ background: 'transparent', color: colors.grey[100] }}
      >
        <Menu.Item key="Dashboard" icon={<HomeOutlined />}>
          <Link to="/">Dashboard</Link>
        </Menu.Item>

        <SubMenu key="Account Setting" icon={<UserOutlined />} title="Account Setting">
          <Menu.Item key="ManageTeam" icon={<TeamOutlined />}>
            <Link to="/team">Manage Team</Link>
          </Menu.Item>
          <Menu.Item key="ContactsInformation" icon={<ContactsOutlined />}>
            <Link to="/contacts">Contacts Information</Link>
          </Menu.Item>
          <Menu.Item key="Messages" icon={<MessageOutlined />}>
            <Link to="/invoices">Messages</Link>
          </Menu.Item>
        </SubMenu>

        <SubMenu key="Recrutment" icon={<FileTextOutlined />} title="Recrutment">
          <Menu.Item key="ProfileForm" icon={<UserAddOutlined />}>
            <Link to="/form">Profile Form</Link>
          </Menu.Item>
          <Menu.Item key="Calendar" icon={<CalendarOutlined />}>
            <Link to="/calendar">Calendar</Link>
          </Menu.Item>
          <Menu.Item key="FAQPage" icon={<InfoCircleOutlined />}>
            <Link to="/faq">FAQ Page</Link>
          </Menu.Item>
        </SubMenu>

        <SubMenu key="Charts" icon={<BarChartOutlined />} title="Charts">
          <Menu.Item key="BarChart">
            <Link to="/bar">Bar Chart</Link>
          </Menu.Item>
          <Menu.Item key="PieChart">
            <Link to="/pie">Pie Chart</Link>
          </Menu.Item>
          <Menu.Item key="LineChart">
            <Link to="/line">Line Chart</Link>
          </Menu.Item>
          <Menu.Item key="GeographyChart">
            <Link to="/geography">Geography Chart</Link>
          </Menu.Item>
        </SubMenu>
      </Menu>
    </Box>
  );
};

export default Sidebar;
