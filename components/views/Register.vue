<script >
  import {getProjects} from '../../services/RegisterLoginForgotpassword'

  export default{
    data (){
      return {
        project: [], 

        validCredentials: {
          username: "lightscope",
          password: "lightscope"
        },
        registerForm: {
          username: "",
          email: '',
          password: "",
          confirm_password: "",
          personnel: ''
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
          ],
          confirm_password: [
            { required: true, message: "Please confirm Password", trigger: "blur" },
            {
              validator: this.validatePass,
              trigger: "blur"
            }
          ]
        }
    };
    },
    methods: {

      validatePass(rule, value, callback){
          /* if(value === ''){
              callback(new Error('Please input the password again'))
          }
          else */ if(value !== this.model.password){
              callback(new Error('Two inputs dont match'))
          }
          else{
              callback()
          }
      },

      simulateLogin() {
        return new Promise(resolve => {
          setTimeout(resolve, 800);
        });
      },
      async register() {
        let valid = await this.$refs.form.validate();
        if (!valid) {
          return;
        }
        this.loading = true;
        await this.simulateLogin();
        this.loading = false;
        if (
          this.registerForm.username === this.validCredentials.name &&
          this.registerForm.password === this.validCredentials.password
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
        <h3>Register</h3>
        <el-form  
            class="form-container"   
            :model="registerForm"
            :rules="rules"
            ref="form"
            @submit.native.prevent="register"
            label-width="120px" 
            label-position="right" 
            size="small"
            >

            <el-form-item prop="username" label="Name" >
                <el-input v-model="registerForm.name"/>
            </el-form-item>

            <el-form-item prop="email" label="Email">
                <el-input v-model="registerForm.email"/>
            </el-form-item>

            <el-form-item label="Password" prop="password" >
                <el-input type="password" autocomplete="off" v-model="registerForm.password"/>
            </el-form-item>

            <el-form-item label="Confirm" prop="confirm_password">
                <el-input type="password" autocomplete="off" v-model="registerForm.confirm_password"/>
            </el-form-item>

            <el-form-item label="Resources">
            <el-radio-group >
                <el-radio label="Sponsor" />
                <el-radio label="Venue" />
            </el-radio-group>
            </el-form-item>
            
            <el-form-item>
                <el-button type="warning" native-type="submit"        
                    >Register
                </el-button>
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
    justify-content: end;
    align-items: end
  }
  h3{
    color: rgb(153, 5, 141);
    font-size: 25px;
    font-family: 'lucida handwriting';
    margin-bottom: 45px
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
