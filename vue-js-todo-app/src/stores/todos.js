import { defineStore } from 'pinia'

export const useTodoStore = defineStore({
    id: 'todos',
    state: () => ({
            todos: [
                {
                    id: 1,
                    listId: 1,
                    parentId: null,
                    title: 'Test',
                    description: 'Testing, testing ... 1, 2, 3 ... testing..',
                    createdAt: 'DATE/TIME',
                    dueAt: 'DATE/TIME',
                    complete: false,
                    reminder: {},
                }
            ],
            todosFilter: 'open',
            todosDetailsOpen: false,
    }),
    getters: {
        getAllTodos: (state) => state.todos.sort(function(a, b){return (a.complete === b.complete) ? 0 : a.complete ? 1 : -1 }),
        getIncompleteTodos: (state) => {
            return state.todos.filter((todo) => !todo.complete)
        },
        getCompleteTodos: (state) => {
            return state.todos.filter((todo) => todo.complete)
        },
        getTodosCount: (state) => {
            return state.todos.length
        },
        getIncompleteTodosCount: (getters) => {
            return getters.getIncompleteTodos.length
        },
        getCompleteTodosCount: (getters) => {
            return getters.getCompleteTodos.length
        },
        getTodosFilter: (state) => {
            return state.todosFilter
        },
        getTodosDetailsOpen:(state) => {
            return state.todosDetailsOpen
        }
    },
    actions: {
        addTodo(todoItem) {
            this.todos = [todoItem, ...this.todos]
        },
        removeTodo(todoId){
            this.todos = this.todos.filter((item) => item.id !== todoId)
        },
        updateTodo(todoId, todo){
            const todoIndex = this.findTodoIndexById(todoId)

            if(todoIndex !== -1){
                this.todos[todoIndex] = todo
            }
        },
        toggleTodo(todoId){
            const todoIndex = this.findTodoIndexById(todoId)

            if(todoIndex !== -1){
                this.todos[todoIndex].complete = !this.todos[todoIndex].complete
            }
        },
        findTodoIndexById(id) {
            return this.todos.findIndex((todo) => todo.id === id);
        },
        setTodosFilter(type){
            this.todosFilter = type;
        },
        setTodosDetailsOpen(status){
            this.todosDetailsOpen = status;
        }
    }
})
