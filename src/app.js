import React from 'react';
import Layouts from "./layouts";
import Ra from './routers';
import { BrowserRouter as Router } from 'react-router-dom';
import { ConfigProvider } from 'antd';
import zhCN from 'antd/es/locale/zh_CN';
import 'antd/dist/antd.css';


class App extends React.Component {
  render() {
    return (
        <ConfigProvider locale={zhCN}>
          <Router>
            <Layouts>
              <Ra/>
            </Layouts>
          </Router>
        </ConfigProvider>
    );
  }
}

export default App;
