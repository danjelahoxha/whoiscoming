// import { classNames } from '@whoiscoming-ui/utilities';
import {   Layout as AntLayout, Menu } from 'antd';

const { Header, Content, Footer } = AntLayout;

import type { CSSProperties, FC, ReactNode } from 'react';

export type LayoutProps = {
  footer?: ReactNode;
  style?: CSSProperties;
  className?: string;
  children?: ReactNode;
};
 

export const Layout: FC<LayoutProps> = ({
  footer,
  // style,
  // className,
  children,
}) => {
  
  const menuitems = [{
    key: 'home',
    label: `Home`,
  },{
    key: 'overview',
    label: `Overview`,
  }]
  return(
   
    <AntLayout
      // className={classNames([
      //   'flex flex-col flex-1 w-full min-h-screen overflow-hidden',
      // ])}
      className="layout"
    >
        <Header>
        {/* <div className="logo" /> */}
        <Menu
          theme="dark"
          mode="horizontal"
          defaultSelectedKeys={['2']}
          items={new Array(3).fill(null).map((_, index) => {
            const key = index + 1;
            return {
              key,
              label: `nav ${key}`,
            };
          })}
        />
      </Header>

      <Content style={{ padding: '0 50px' }}>
        {children}
        </Content>
        <Footer style={{ textAlign: 'center' }}> ©2023  {footer}</Footer>

    </AntLayout>
 
)};
