<template>
  <Layout class="backimg">
    <Header class="header-content"></Header>
    <Content  class="middle-content">
      <div class="login-container">
        <a-row  class="login-container-row">
          <a-col :span="8"></a-col>
          <a-col :span="8" class="login_form">
            <div class="login_form_input">
                <h2 class="font-color">巡检后台管理</h2>
                <br />
                <br />
               <!-- <label style="display:inline">用户名：</label><a-input class="inputBox" ref="userNameInput" v-model="userName" placeholder="请输入">
                  <a-icon slot="prefix" type="user" />
                </a-input>
                <br />
                <br />
                <label style="display:inline">密码：</label><a-input class="inputBox"  v-model="passWord" placeholder="请输入"/>
              <br />
              <br />-->
              <!--:label-col="{ span: 5 }" :wrapper-col="{ span: 12 }"-->
              <a-form class="login-form-kuang"  :form="form" @submit="handleSubmit">
                 <div class="login-form-detail">
                   <div class="user_style">用户：</div>
                   <div>
                     <a-form-item>
                       <a-input class="inputBox" v-model="userName" placeholder="请输入..."/>
                     </a-form-item>
                   </div>
                 </div>
                 <div class="login-form-detail">
                   <div class="mima_style">密码：</div>
                   <div class="login-form-detail">
                     <a-form-item>
                       <a-input class="inputBox"  v-model="passWord" placeholder="请输入..."/>
                     </a-form-item>
                   </div>
                 </div>
              </a-form>
              <div class="login-button">
                <a-button @click="IntoMain" class="button_style" type="primary">
                  登录
                </a-button>
                <a-button  class="button_style" type="danger">
                  注册
                </a-button>
              </div>

            </div>

          </a-col>
          <a-col :span="8">

          </a-col>
        </a-row>
      </div>
    </Content>
    <Footer class="footer-content"></Footer>
  </Layout>
</template>
<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
  name: 'Login',
  data () {
    return {
      user: '../assets/user.png',
      mima: '../assets/lock.png',
      form: {
        username: 'admin',
        password: '123456'
      }
    }
  },mounted() {
    this.$nextTick(() => {
      // To disabled submit button at the beginning.

    });
  },
  methods: {
    IntoMain(){

    }
  }
})
</script>
<style lang="scss">
  body{
    background: url("../assets/houTaiKuang.png") no-repeat !important;
    background-size: 100% 100% !important;
    overflow:hidden;
  }
  .font-color{
    color:white;
    font-size: 0.2rem;
  }

  .login_form{
    display:flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;

  }

  .login_form_input{
    width: 2.5rem;
    height: 2.1rem;
    margin: 0.5rem auto;
    background: url("../assets/houTaiBg.png") no-repeat !important;
    background-size: 100% 100% !important;

  }


  .login-form-kuang{
    display:flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .login-form-detail{
    display: flex;
    flex-direction: row;
    justify-content: center;
    height: 0.5rem;
  }
  .user_style{
      height: 0.2rem;
      margin-top: 0.1rem;
      color:white;
  }
  .mima_style{
    height: 0.2rem;
    margin-top: 0.1rem;
    color:white;
  }
  .login-container{
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
  }
  .login-container-row{
    height:3rem !important
  }

  .login-button{
    display:flex;
    justify-content: space-around;
    align-items: center;
  }

  /* 输入框 */
  .inputBox{
    width: 1.3rem !important;
    height: 0.2rem;
  }
  .button_style{
    height:0.2rem;
  }
  /*中上下布局*/
  .middle-content{
    height:3rem !important
  }

  .footer-content{
    height: 1rem !important
  }
  .header-content{
    height:1rem !important
  }


</style>
