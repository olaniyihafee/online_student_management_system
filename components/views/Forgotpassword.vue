<script >
  import {forgotPassword} from '../../services/RegisterLoginForgotpassword'

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
        forgotpasswordForm: {
          name: "",
          password: ""
        },
        loading: false,
        rules: {
          email: [
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
        <h3>Forgot Password</h3>
        
        <el-form 
            class="form-container" 
            :model="forgotpasswordForm"
            :rules="rules"
            ref="form"
            @submit.native.prevent="login"  
            label-width="120px" 
            label-position="right" 
            size="small">

            <el-form-item label="Email">
                <el-input v-model="forgotpasswordForm.email"/>
            </el-form-item>     
            
            <el-form-item>
                <el-button type="warning" native-type='submit'>Send</el-button>
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
}
</style>
