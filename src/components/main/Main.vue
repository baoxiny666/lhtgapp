<template>
  <Layout>
    <Sider trigger={null} collapsible collapsed={this.state.collapsed}>
      <div className="logo" />
      <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>

      </Menu>
    </Sider>
    <Layout className="site-layout">
      <Header class="site-layout-background" style={{}}>

      </Header>
      <Content
        class="site-layout-background"

      >
      Content
      </Content>
    </Layout>
  </Layout>
</template>

<script>
  export default {}
</script>

<style lang="scss">
  .site-layout-background{
        margin:24px 16px,
        padding: 24,
        minHeight: 280
  }
</style>
