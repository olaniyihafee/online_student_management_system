
<script>
    export default{
        data (){
        return {
            card: 'register'
        }
        },
        methods: {
            showLogin(){
                this.card = 'login'
                this.$router.push('/register')
            }
        }
    }
</script>

<template>
    <div>
        <el-container>
            <el-header class='head'>
            
            </el-header>

            <el-container>
                <el-aside width='200px' class='side'>
                    <ul>
                        <li><i/><RouterLink to="/loggedIn">My Courses</RouterLink></li>
                        <li><i/><RouterLink to="/courseModule">About</RouterLink></li>
                    </ul>           
                </el-aside>

                <el-container>
                    <el-main class='main'>                        
                        <RouterView />
                    </el-main>
                    <el-footer class='foot'>
                    
                    </el-footer>
                </el-container>

            </el-container>
        </el-container>
    </div>
</template>

<style>
    .head{
        background: blue;
        margin: 0px;    
        height: 20vh
    }
    .side{
        background: green;
        height: 85vh
    }
    .main{
        background: pink
    }
    .foot{
        background: red
    }
    .push{
        background: white;
        height: 700px;
        width: 70px
    }
</style>