import Vue from 'vue'
import Vuex, { Store } from 'vuex'
import timestamp from 'time-stamp';

Vue.use(Vuex)
const cart = JSON.parse(localStorage.getItem('car')) || []

export default new Store({
  state: {
    cart: cart
  },
  mutations: {
    addCar(state, carObj) {
      let flag = true
      state.cart.some(function (item) {
        if (item.id === carObj.id) {
          flag = false
          item.count += carObj.count
          return true
        }
      })
      if (flag) {
        state.cart.push(carObj)
      }
      localStorage.setItem('car', JSON.stringify(state.cart))
    },
    updateSelect(state, data) {
      state.cart.some(function (item) {
        if (item.id === data.id) {
          item.selected = data.flag
          return
        }
      })
      localStorage.setItem('car', JSON.stringify(state.cart))
    },
    updateNum(state, data) {
      state.cart.some(item => {
        if (item.id === data.id) {
          item.count = data.num
          return
        }
      })
      localStorage.setItem('car', JSON.stringify(state.cart))
    },
    commitOrder(state) {
      // let newArr = [...state.cart]
      // newArr.forEach((item, index) => {
      //   if (item.selected) {
      //     // state.cart.splice(index, 1)
      //     console.log(index)

      //   }
      // })
      for (let i = state.cart.length - 1; i >= 0; i--) {
        console.log(state.cart[i])
        if (state.cart[i].selected) {
          state.cart.splice(i, 1)
        }
      }
      localStorage.setItem('car', JSON.stringify(state.cart))
    }
  },
  getters: {
    count(state) {
      let num = 0
      state.cart.forEach(item => {
        num += item.count
      })
      return num
    },
    price(state) {
      let count = 0
      state.cart.forEach(item => {
        if (item.selected) count += item.price * item.count
      })
      return count
    }
  }
})