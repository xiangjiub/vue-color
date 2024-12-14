export default{
	data(){
		return{
			
		}
	},
	computed: {
		skin() {
			console.log(this.$store.state.skin)
			return this.$store.state.skin;
		}
	},
}