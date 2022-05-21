import { Layout, Menu } from 'antd';
import Home from './router/Home'
const {Header, Content, Footer} = Layout;

function App() {
    return (

        <Layout>
            <Header style={{position: 'fixed', zIndex: 1, width: '100%'}}>
                <div className="logo"/>
                <Menu
                    theme="dark"
                    mode="horizontal"
                    defaultSelectedKeys={['2']}
                    items={new Array(3).fill(null).map((_, index) => ({
                        key: String(index + 1),
                        label: `nav ${index + 1}`,
                    }))}
                />
            </Header>
            <Content className="site-layout" style={{padding: '0 50px', marginTop: 64}}>
               <Home />
            </Content>
            <Footer style={{textAlign: 'center'}}>Kerem Karadeniz</Footer>
        </Layout>

    );
}

export default App;
