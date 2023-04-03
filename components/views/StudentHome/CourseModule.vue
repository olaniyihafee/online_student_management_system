
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
            <div><h4>Header</h4></div>
            <div class='grid'>
                <div>
                    <img src='../../../assets/logo.svg' width='150px' height='150px' >
                    <h5>Course Tittle</h5>
                    <span>Teacher: </span><img src='../../../assets/logo.svg' width='25px' height='25px' ><span>Mr Demo</span>
                    <span>Offered: </span><span>520</span>
                </div>
                <div>
                    <img src='../../../assets/logo.svg' width='150px' height='150px' >
                    <h5>Course Tittle</h5>
                    <span>Teacher: </span><img src='../../../assets/logo.svg' width='25px' height='25px' ><span>Mr Demo</span>
                    <span>Offered: </span><span>520</span>
                </div>
                <div>
                    <img src='../../../assets/logo.svg' width='150px' height='150px' >
                    <h5>Course Tittle</h5>
                    <span>Teacher: </span><img src='../../../assets/logo.svg' width='25px' height='25px' ><span>Mr Demo</span>
                    <span>Offered: </span><span>520</span>
                </div>
                <div>
                    <img src='../../../assets/logo.svg' width='150px' height='150px' >
                    <h5>Course Tittle</h5>
                    <span>Teacher: </span><img src='../../../assets/logo.svg' width='25px' height='25px' ><span>Mr Demo</span>
                    <span>Offered: </span><span>520</span>
                </div>
                <div>
                    <img src='../../../assets/logo.svg' width='150px' height='150px' >
                    <h5>Course Tittle</h5>
                    <span>Teacher: </span><img src='../../../assets/logo.svg' width='25px' height='25px' ><span>Mr Demo</span>
                    <span>Offered: </span><span>520</span>
                </div>
                <div>
                    <img src='../../../assets/logo.svg' width='150px' height='150px' >
                    <h5>Course Tittle</h5>
                    <span>Teacher: </span><img src='../../../assets/logo.svg' width='25px' height='25px' ><span>Mr Demo</span>
                    <span>Offered: </span><span>520</span>
                </div>
            </div>
        </el-container>
    </div>
</template>

<style>
    .grid{
        display: grid;
        gap: 50px 100px;
    }
</style>