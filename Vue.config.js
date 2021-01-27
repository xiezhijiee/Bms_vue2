/*
 * @Author: your name
 * @Date: 2021-01-27 18:36:28
 * @LastEditTime: 2021-01-27 19:00:20
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \Bms_vue2\Vue.config.js
 */
module.exports = {
	css: { //配置全局样式
		loaderOptions: {
			sass: {
				data: `@import "@/style/index.scss";`
			}
		}
    }
}
