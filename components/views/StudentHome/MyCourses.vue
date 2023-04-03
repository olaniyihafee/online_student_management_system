
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
                <el-scrollbar height="400px">
            <div class='grid'>
                    <div>
                        <img alt="Vue logo" src="@/assets/logo.svg" width='125' height='125' />
                        <h5>Course Tittle</h5>
                        <span>Teacher: </span><img src='../../../assets/logo.svg' width='20' height='20' ><span>Mr Demo</span>
                        <span>Offered: </span><span>520</span>
                    </div>
                    <div>
                        <img alt="Vue logo" src="@/assets/logo.svg" width='125' height='125' />
                        <h5>Course Tittle</h5>
                        <span>Teacher: </span><img src='../../../assets/logo.svg' width='20' height='20' ><span>Mr Demo</span>
                        <span>Offered: </span><span>520</span>
                    </div>
                    <div>
                        <img alt="Vue logo" src="@/assets/logo.svg" width='125' height='125' />
                        <h5>Course Tittle</h5>
                        <span>Teacher: </span><img src='../../../assets/logo.svg' width='20' height='20' ><span>Mr Demo</span>
                        <span>Offered: </span><span>520</span>
                    </div>
                    <div>
                        <img alt="Vue logo" src="@/assets/logo.svg" width='125' height='125' />
                        <h5>Course Tittle</h5>
                        <span>Teacher: </span><img src='../../../assets/logo.svg' width='20' height='20' ><span>Mr Demo</span>
                        <span>Offered: </span><span>520</span>
                    </div>
                    <div>
                        <img alt="Vue logo" src="@/assets/logo.svg" width='125' height='125' />
                        <h5>Course Tittle</h5>
                        <span>Teacher: </span><img src='../../../assets/logo.svg' width='20' height='20' ><span>Mr Demo</span>
                        <span>Offered: </span><span>520</span>
                    </div>
                    <div>
                        <img alt="Vue logo" src="@/assets/logo.svg" width='125' height='125' />
                        <h5>Course Tittle</h5>
                        <span>Teacher: </span><img src='../../../assets/logo.svg' width='20' height='20' ><span>Mr Demo</span>
                        <span>Offered: </span><span>520</span>
                    </div>
                    <div>
                        <img alt="Vue logo" src="@/assets/logo.svg" width='125' height='125' />
                        <h5>Course Tittle</h5>
                        <span>Teacher: </span><img src='../../../assets/logo.svg' width='20' height='20' ><span>Mr Demo</span>
                        <span>Offered: </span><span>520</span>
                    </div>
                    <div>
                        <img alt="Vue logo" src="@/assets/logo.svg" width='125' height='125' />
                        <h5>Course Tittle</h5>
                        <span>Teacher: </span><img src='../../../assets/logo.svg' width='20' height='20' ><span>Mr Demo</span>
                        <span>Offered: </span><span>520</span>
                    </div>
                    <div>
                        <img alt="Vue logo" src="@/assets/logo.svg" width='125' height='125' />
                        <h5>Course Tittle</h5>
                        <span>Teacher: </span><img src='../../../assets/logo.svg' width='20' height='20' ><span>Mr Demo</span>
                        <span>Offered: </span><span>520</span>
                    </div>
                    <div>
                        <img alt="Vue logo" src="@/assets/logo.svg" width='125' height='125' />
                        <h5>Course Tittle</h5>
                        <span>Teacher: </span><img src='../../../assets/logo.svg' width='20' height='20' ><span>Mr Demo</span>
                        <span>Offered: </span><span>520</span>
                    </div>
                    <div>
                        <img alt="Vue logo" src="@/assets/logo.svg" width='125' height='125' />
                        <h5>Course Tittle</h5>
                        <span>Teacher: </span><img src='../../../assets/logo.svg' width='20' height='20' ><span>Mr Demo</span>
                        <span>Offered: </span><span>520</span>
                    </div>
                    <div>
                        <img alt="Vue logo" src="@/assets/logo.svg" width='125' height='125' />
                        <h5>Course Tittle</h5>
                        <span>Teacher: </span><img src='../../../assets/logo.svg' width='20' height='20' ><span>Mr Demo</span>
                        <span>Offered: </span><span>520</span>
                    </div>
                    <div>
                        <img alt="Vue logo" src="@/assets/logo.svg" width='125' height='125' />
                        <h5>Course Tittle</h5>
                        <span>Teacher: </span><img src='../../../assets/logo.svg' width='20' height='20' ><span>Mr Demo</span>
                        <span>Offered: </span><span>520</span>
                    </div>
                    <div>
                        <img alt="Vue logo" src="@/assets/logo.svg" width='125' height='125' />
                        <h5>Course Tittle</h5>
                        <span>Teacher: </span><img src='../../../assets/logo.svg' width='20' height='20' ><span>Mr Demo</span>
                        <span>Offered: </span><span>520</span>
                    </div>
                    <div>
                        <img alt="Vue logo" src="@/assets/logo.svg" width='125' height='125' />
                        <h5>Course Tittle</h5>
                        <span>Teacher: </span><img src='../../../assets/logo.svg' width='20' height='20' ><span>Mr Demo</span>
                        <span>Offered: </span><span>520</span>
                    </div>
                    <div>
                        <img alt="Vue logo" src="@/assets/logo.svg" width='125' height='125' />
                        <h5>Course Tittle</h5>
                        <span>Teacher: </span><img src='../../../assets/logo.svg' width='20' height='20' ><span>Mr Demo</span>
                        <span>Offered: </span><span>520</span>
                    </div>
                
            </div>    
                </el-scrollbar>
        </el-container>
    </div>
</template>

<style>
    .grid{
        display: grid;
        grid-template-columns: auto auto auto;
        gap: 20px 20px;
    }
</style>