import * as React from 'react';
import { Layout, Menu } from 'antd';
import router from 'umi/router';
import { urlToArray } from '@/utils/array';
import styles from './index.css';

const BasicLayout = ({ location: { pathname }, children }) => {
  return (
    <Layout className={styles['layout']}>
      <Layout.Header className={styles['header']}>
        <div className={styles['logo']}>learn&nbsp;mapbox</div>
        <Menu
          className={[styles['nav'], styles['menu']]}
          theme="dark"
          mode="horizontal"
          selectedKeys={urlToArray(pathname)}
          onClick={({ key }) => router.push({ pathname: key, query: { k: new Date().getTime() } })}
        >
          <Menu.Item key="/l1">例子1</Menu.Item>
        </Menu>
      </Layout.Header>
      <Layout.Content className={styles['content']}>{children}</Layout.Content>
    </Layout>
  );
};

export default BasicLayout;
