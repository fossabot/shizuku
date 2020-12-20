import {Layout, Menu, Select, Space, Switch} from 'antd'
import { Link } from 'umi'
import { MenuUnfoldOutlined, MenuFoldOutlined, CodeOutlined, EditOutlined, ProfileOutlined, HomeOutlined, ReadOutlined, FileSearchOutlined } from '@ant-design/icons'
import React, {Component} from "react"
import { material_oceanic } from '../styles/prism-material-oceanic'
import { material_light } from '../styles/prism-material-light'
import { darcula } from '../styles/prism-darcula'
import { atom_dark } from '../styles/prism-atom-dark'
import { solarized_light } from '../styles/prism-solarized-light'

const { Header, Sider, Content, Footer } = Layout
const { Option } = Select

class SimpleLayout extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      collapsed: false,
      theme: 'light',
    }
  }


  onCollapse = collapsed => {
    this.setState({ collapsed })
  }

  changeTheme = value => {
    this.setState({theme: value ? 'dark' : 'light',})
  }

  render() {
    return (
      <Layout>
        <Sider theme={this.state.theme} collapsible collapsed={this.state.collapsed} onCollapse={this.onCollapse}>
          <div className="logo" style={{ minHeight : '60px' }}/>
          <Menu theme={this.state.theme} mode="inline"  defaultSelectedKeys={['1']}>
            <Menu.Item key="1" icon={< HomeOutlined />}>
              <Link to='/'>
                Home
              </Link>
            </Menu.Item>
            <Menu.Item key="2" icon={<CodeOutlined />}>
              <Link to="/main">
              Playground
              </Link>
            </Menu.Item>
            <Menu.Item key="3" icon={<EditOutlined />}>
              <Link to="/editor">
              Edit
              </Link>
            </Menu.Item>
            <Menu.Item key='4' icon={<FileSearchOutlined />}>
              <Link to={'/gallery'}>
                Gallery
              </Link>
            </Menu.Item>
            <Menu.Item key='5' icon={<ReadOutlined />}>
              <Link to='/help'>
                Help
              </Link>
            </Menu.Item>
            <Menu.Item key="6" icon={<ProfileOutlined />}>
              <Link to="/about">
              About
              </Link>
            </Menu.Item>
          </Menu>
        </Sider>
        <Layout className="site-layout">
          <Header className="site-layout-background" style={{ padding: 0, }}>
            <Space size="large">
              <Switch checked={this.state.theme === 'dark'}
                      onChange={this.changeTheme}
                      checkedChildren="暗色"
                      unCheckedChildren="亮色"
                      style={{ marginLeft: '16px' }}
                      />
              <Select defaultValue="chinese" style={{ width: 144, }}>
                <Option value="chinese">中文/Chinese</Option>
                <Option value="english" disabled>英文/English</Option>
                <Option value="french" disabled>法语/Français</Option>
              </Select>
              <Select defaultValue="solarized-light" style={{ width: 144, }} onChange={(sel) => this.props.changeColor(sel)}>
                <Option value="solarized-light">Solarized Light</Option>
                <Option value='material-light'>Material Light</Option>
                <Option value='material-oceanic'>Material Oceanic</Option>
                <Option value="atom-dark">Atom Dark</Option>
                <Option value="darcula">Darcula</Option>
              </Select>
            </Space>
          </Header>
          <Content
            className="site-layout-background"
            style={{
              margin: '24px, 16px',
              padding: 24,
              minHeight: 480,
            }}
            >
            {
              this.props.children
            }
          </Content>
          <Footer style={{textAlign: "center"}}>
            2020 - Amatsukaze x Shizuku (天津風 x 雫) created by ironica
          </Footer>
        </Layout>
      </Layout>
    )
  }
}

const Index = (props) => {

  let codeHightlightStyle = solarized_light

  const changeColor = type => {
    console.log('I\'m in index')
    switch (type) {
      case 'atom-dark': {
        codeHightlightStyle = atom_dark
        break
      }
      case 'darcula': {
        codeHightlightStyle = darcula
        break
      }
      case 'material-light': {
        codeHightlightStyle = material_light
        break
      }
      case 'material-oceanic': {
        codeHightlightStyle = material_oceanic
        break
      }
      case 'solarized-light': {
        codeHightlightStyle = solarized_light
        break
      }
    }
  }

  return (
    <>
      <style>{`
        .square:before {
          display: inline-block;
          padding-top: 100%;
          content: '';
        }
        .square>span {
          position: absolute;
          width: 100%;
          height: 100%;
          z-index: 5;
        }
        .square>span>svg {
          position: relative;
          width: 100%;
          height: auto;
          object-fit: fill;
          overflow: hidden;
        }
        ${codeHightlightStyle}
      `}</style>
      <SimpleLayout changeColor={(e) => changeColor(e)}>
        {props.children}
      </SimpleLayout>
    </>
  )
}

export default Index
