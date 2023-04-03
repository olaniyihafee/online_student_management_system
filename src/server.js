import { Server, Model } from 'miragejs'

export function makeServer({ environment = "development" } = {}) {

let server = new Server({
  environment,

    models: {
      todo: Model,
      project: Model,
    },

  seeds(server) {
  server.create("todo", { content: "Learn Mirage JS" })
  server.create("todo", { content: "Integrate With Vue.js" })
  
  server.create("project", { content: 'helpEverybody' })
  },

  routes() {

    this.namespace = "localhost:3000"

    this.get("/todos", schema => {
      return schema.todos.all()
    })

    this.post("/getprojects", schema => {
        return schema.projects.all()
      })
  },
  })

  return server
}