import React from 'react';
import { Layout } from 'antd';
import Login from './components/Login';
import Register from './components/register';


const { Header, Content, Sider } = Layout;


function App() {
  return (
    <Layout>
      <Header>
        {'Header'}
      </Header>
      <Layout>
        <Sider width={300} className="site-layout-background">
          {'Sider'}
        </Sider>
        <Layout style={{ padding: '24px' }}>
          <Content
            className="site-layout-background"
            style={{
              padding: 24,
              margin: 0,
              height: 800,
              overflow: 'auto'
            }}
          >
            <Login />
            <Register />
          </Content>
        </Layout>
      </Layout>
    </Layout>
  )
}

export default App;