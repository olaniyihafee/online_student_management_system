<script >
  import {login} from '../../services/RegisterLoginForgotpassword'

  export default{
    data (){
      return {
        registerForm :{
          name: '' ,
          email: '',
          password: '',
          confirm: '',
          personnel: ''
        },

        validCredentials: {
          username: "lightscope",
          password: "lightscope"
        },
        loginForm: {
          name: "",
          password: ""
        },
        loading: false,
        rules: {
          name: [
            {
              required: true,
              message: "Username is required",
              trigger: "blur"
            },
            {
              min: 4,
              message: "Username length should be at least 5 characters",
              trigger: "blur"
            }
          ],
          password: [
            { required: true, message: "Password is required", trigger: "blur" },
            {
              min: 5,
              message: "Password length should be at least 5 characters",
              trigger: "blur"
            }
          ]
        }
    };
    },
    methods: {

      register(){
        this.card = 'register'
        this.$router.push('/loggedIn')
      },

      simulateLogin() {
        return new Promise(resolve => {
          setTimeout(resolve, 800);
        });
      },
      async login() {
        let valid = await this.$refs.form.validate();
        if (!valid) {
          return;
        }
        this.loading = true;
        await this.simulateLogin();
        this.loading = false;
        if (
          this.model.username === this.validCredentials.username &&
          this.model.password === this.validCredentials.password
        ) {
          this.$message.success("Login successfull");
        } else {
          this.$message.error("Username or password is invalid");
        }
      }
    
    }
  }/**/

</script>

<template>
  <div>   
    <el-card shadow="never" class="login-card">            
        <h3>Login</h3>

        <el-form  
            class="form-container"            
            :model="loginForm" 
            :rules="rules"
            ref="form"
            @submit.native.prevent="login" 
            label-width="120px"            
            label-position="right" 
            size="small">

            <el-form-item label="Name">
              <el-input v-model="loginForm.name"/>
            </el-form-item>                  

            <el-form-item label="Password">
              <el-input type="password" v-model="loginForm.password"/>
            </el-form-item>

            <el-form-item >
              <RouterLink to="forgotpassword" class='italic-string'>Forgot password</RouterLink>
            </el-form-item>
            
            <el-form-item>
              <el-button type="warning" native-type='submit'>Login</el-button>
            </el-form-item>
        </el-form>
    </el-card>
  </div>
    
</template>

<style>
@media (min-width: 1024px) {
  .login-card{
    height:90vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: auto
  }
  .form-container{
    height:50vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center
  }
  h3{
    color: rgb(153, 5, 141);
    font-size: 25px;
    font-family: 'lucida handwriting';
    text-align: center;
    margin-bottom: 15px
  }
  .spaced-evenly{
    width: 100%;
    display:flex;
    flex-direction: row;
    justify-content: space-evenly;    
    align-items: space-around;
  }
  .italic-string{
    margin: 0px 10px;
    font-style: italic;
    text-decoration: none;
    color: rgb(153, 5, 141)
  }
}
</style>
