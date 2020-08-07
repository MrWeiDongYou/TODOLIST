Page({
  data:{
    search:'',
    todos:[
      {name:'Learning Weapp',complate:false},
      {name:'Learning Sacc',complate:true},
      {name:'Learning Vue',complate:false}
    ],
    leftCount: 2,
    complateAll: false
  },
  inputChange(e){
    // console.log(e.detail.value)
    this.setData({search: e.detail.value})
  },
  addTodos(){
    // console.log(!this.data.search)
    // if(this.data.search == '') return
    if(!this.data.search) return
    // console.log(this.data.search)
    var todos = this.data.todos
    todos.push({
        name: this.data.search,
        complate: false
    })
    this.setData({
      todos: todos,
      search: '',
      leftCount: this.data.leftCount +1
    })
  },
  toggleTodos(e){
    // console.log(e.currentTarget.dataset.index)
    var item = this.data.todos[e.currentTarget.dataset.index]
    // console.log(item)
    item.complate = !item.complate
    var leftCount = this.data.leftCount + (item.complate ? -1 : 1)
    this.setData({
      todos: this.data.todos,
      leftCount: leftCount
    })
  },
  removeTodos(e){
    // 注意点是：阻止事件冒泡（使用catchtap事件）
    var todos = this.data.todos
    var item = todos.splice(e.currentTarget.dataset.index, 1)[0]
    var leftCount = this.data.leftCount + (item.complate ? 0 : -1)
    this.setData({
      todos: todos,
      leftCount: leftCount
    })
  },
  selectedAll(){
    this.data.complateAll = !this.data.complateAll
    var selectedAll = this.data.complateAll
    var todos = this.data.todos
    todos.forEach(item => {
      item.complate = selectedAll
    })
    var leftCount = this.data.complateAll ? 0 : this.data.todos.length
    this.setData({
      todos: todos,
      leftCount: leftCount
    })
  },
  clearComplate(){
    // var todos = []
    // this.data.todos.forEach(function(item){
    //   if(!item.complate){
    //     todos.push(item)
    //   }
    // })
    // this.setData({
    //   todos: todos
    // })

    var todos = this.data.todos.filter(item => {
      return !item.complate
    })
    this.setData({
        todos: todos
    })
  }
})