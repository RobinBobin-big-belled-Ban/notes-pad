import React, { FC } from 'react'
import { Layout as LayoutAntd } from 'antd'
import { LayoutProps as LayoutAntdProps } from 'antd/lib/layout'

export interface Props extends LayoutAntdProps { }

const Layout: Component = ({ ...props }) => {
    return <LayoutAntd {...props} />
}

Layout.Header = LayoutAntd.Header
Layout.Content = LayoutAntd.Content
Layout.Footer = LayoutAntd.Footer
Layout.Sider = LayoutAntd.Sider

interface Component extends FC<Props> {
    Header: typeof LayoutAntd.Header;
    Content: typeof LayoutAntd.Content;
    Footer: typeof LayoutAntd.Footer;
    Sider: typeof LayoutAntd.Sider;

}

export default Layout