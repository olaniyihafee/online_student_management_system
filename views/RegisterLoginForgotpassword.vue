<script >
  import {getProjects} from '../services/RegisterLoginForgotpassword'

  export default{
    data (){
      return {
        project: [],
        loading: false,
    };
    },
    methods: {
      showProject(){
        getProjects().then( response =>{
          console.log('response :'+JSON.stringify(response))
          this.project = response.projects[0]
        })
      }
    }
  }/**/

</script>

<template>
  <div class="common-layout">
    <el-container class="full-width">
      <span class="logo-span">CMS</span> 
      <el-main class="full-width">
        <el-row>
          <el-col :span="16">
            <div class="body-container" >
              <el-header>COURSE MANAGEMENT <br>SYSTEM</el-header>
              <img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="125" height="125" />
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan et viverra justo commodo. Proin sodales pulvinar sic tempor. Sociis natoque penatibus et magnis dis parturient montes, 
              </p>
              <p id='projectDisplay'>{{project.content}}</p>
              <div class='spaced-evenly'>
                <el-button type="warning" @click="this.$router.push('/')">Register</el-button>
                <el-button type="warning" @click="this.$router.push('/loggedIn')">Home</el-button>
                <el-button id='button' type="warning" @click="showProject">Register</el-button>
                <el-button type="warning" @click="this.$router.push({name: 'Login'})">Login</el-button>
              </div>
            </div>
          </el-col>
          <el-col :span="8">
             <RouterView />
          </el-col>
        </el-row>
      </el-main>
    </el-container>
  </div>
    
</template>

<style>
@media (min-width: 1024px) {
  .common-layout {
    min-height: 100vh;
    display: flex;
    align-items: center;
    background: linear-gradient(rgba(248, 252, 4, 0.336), rgba(235, 204, 25, 0.295));
  }
  .full-width {
    min-height: 100vh;
    display: flex;
    width: 100%;
    align-items: start;
  }
  .logo-span{
    color: rgb(240, 49, 224);
    font-size: 19px;
    font-family: 'forte';
    margin: 15px
  }
  header{
    color: rgb(153, 5, 141);
    font-size: 40px;
    font-family: 'lucida handwriting';
    font-weight: 900;
    text-shadow: 2px 2px 2px grey;
    margin:15px 0px
  }
  h3{
    color: rgb(153, 5, 141);
    font-size: 25px;
    font-family: 'lucida handwriting';
    margin-bottom: 15px
  }
  p{
    margin: 50px 0px;
    max-width: 500px;
    font-family: 'Arial';
    line-height: 1.7em;
    word-spacing: 2px;
    text-align: justify
  }
  .body-container{
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center
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
