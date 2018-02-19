<template>
	<div>
		<button @click="getMethods()"></button>
		<ul>
			<li v-for="method in methods" :key="method">
				{{ method }}
			</li>
		</ul>
	</div>
</template>

<script>
import axios from 'axios'

export default {
	name: 'my-comp',
	data() {
		return {
			methods: []
		}
	},
	methods: {
		getMethods() {
			return axios.get('/api/methods').then(data => console.log)
		}
	}
}
</script>

<style>

</style>
