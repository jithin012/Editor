import React from 'react';
import { Layout } from 'antd';

import Editor from './Editor';

import 'antd/dist/antd.css'
import './App.css';

const { Header, Footer, Sider, Content } = Layout;

function App() {
  return (
    <React.Fragment>
      <Layout className={'full-width-height'}>
        <Sider className={'app-sider'}></Sider>
        <Layout>
          <Header></Header>
          <Content className={'app-content'}>
            <Editor />
          </Content>
          {/* <Footer /> */}
        </Layout>
      </Layout>
    </React.Fragment>
  )
}
export default App;
