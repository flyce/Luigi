import React from 'react';
import { Layout } from 'antd';
import env from "../../config/env";

const { Footer } = Layout;

const BasicFooter = () => (
    <Footer style={{ textAlign: 'center' }}>{env.footer} ©2020 Created by Echo</Footer>
);

export default BasicFooter;
