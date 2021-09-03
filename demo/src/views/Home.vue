<template>
  <div class="home">
    <HelloWorld msg="Welcome to Your Express+Vue+Mysql!"/>
				<label>姓名:<input type="text" v-model="name" placeholder="输入名字	" /></label><br>
				<label>年龄:<input type="text" v-model="age" /></label><br>
				<button type="button" @click="add">新增</button>
  </div>
		<ul>
			<li v-for="li in list" :key="li.id">
				{{li.name}} {{li.age}}
				<button type="button" @click="update(li)">修改</button>
				<button type="button" @click="del(li)">删除</button>
			</li>
		</ul>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import axios from 'axios'
export default {
  name: 'Home',
  components: {
    HelloWorld
  },
		data(){
			return{
				name:'',
				age:null,
				list:[]
			}
		},
		methods:{
			//
			query(){
				axios({
					method:'post',
					url:'/api/query',
				}).then(res=>{
					console.log(res.data);
					this.list = res.data.data;
					this.name = null;
					this.age = null;
				}).catch(err=>{
					console.log(err);
				})
			},
			//
			add(){
				axios({
					method:'post',
					url:'/api/add',
					data:{
						name:this.name,
						age:this.age
					}
				}).then(res=>{
					console.log(res);
					this.query();
				}).catch(err=>{
					console.log(err);
				})
			},
			//
			update(data){
				axios({
					method:'post',
					url:'/api/update',
					data:{
						id:data.id,
						name:this.name,
						age:this.age
					}
				}).then(res=>{
					console.log(res);
					this.query();
				}).catch(err=>{
					console.log(err);
				})
			},
			//
			del(data){
				axios({
					method:'post',
					url:'/api/delete',
					data:{
						id:data.id,
						name:data.name,
						age:data.age
					}
				}).then(res=>{
					console.log(res);
					this.query();
				}).catch(err=>{
					console.log(err);
				})
			}
		},
		mounted() {
			this.query();
		}
}
</script>
