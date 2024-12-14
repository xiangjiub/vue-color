// export default {
//   namespaced: true,
//   state: {
//     // 深色系主题
//     dark: {
//       '--text-color': '#000000',
//       '--text-color-reverse': '#ccc9bd',
//       '--text-color-tab': '#ddd8be',
//       '--bg-color': '#0000004d',
//       '--bg-shadow': '#e9ead82e'
//     },
//     // 浅色系主题
//     light: {
//       '--text-color': '#ffffff',
//       '--text-color-reverse': '#333642',
//       '--text-color-tab': '#222741',
//       '--bg-color': '#ffffff4d',
//       '--bg-shadow': '#1615272e'
//     },
//     // 主题方案
//     scheme: ['dark', 'light'],
//     // 当前主题
//     theme: 'light'
//   },
//   getters: {
//     theme(state) {
//       return state[state.theme]
//     }
//   },
//   mutations: {
//     updateTheme(state, { theme, message = '主题切换完成' }) {
//       if (state.scheme.includes(theme)) {
//         state.theme = theme
//         message &&
//           uni.showToast({
//             title: message,
//             icon: 'none'
//           })
//       } else {
//         console.warn(new Error('不存在的主题类型'))
//       }
//     }
//   }
// }



import Vue from 'vue'
import Vuex from 'vuex'
 
Vue.use(Vuex)
 
const store = new Vuex.Store({
	state: {
        // 写上默认皮肤的数据
		skin: `
			--nav-bg:#42b983;
			--nav-color:#ffffff;
			--bg-color:#ff4400;
		`
	},
	getters: {
 
	},
	mutations: {
		// 皮肤更换
		skinPeeler(state,skin = []){
			// 将皮肤配置JSON转为以 ; 分割的字符串（style 值）
			let style = skin.map((item,index)=>{
				return `${item.name}:${item.value}`
			}).join(";");
			console.log(style,'结果')
			state.skin = style;
		}
	}
})
 
export default store
