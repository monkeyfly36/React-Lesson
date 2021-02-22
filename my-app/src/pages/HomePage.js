import React, { Component } from 'react'
import Layout from './Layout';

export default class HomePage extends Component {
  render() {
    return (
      <Layout showTopBar={false} showBottomBar={true} title={'商城首页'}>
        <div>
          <h3>HomePage</h3>
        </div>
      </Layout>
    )
  };
}
