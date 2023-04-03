// src/__tests__/App.spec.js

import { mount, shallowMount } from "@vue/test-utils"
import { makeServer } from "../server"
import App from "../App.vue"
import RegisterLoginForgotpassword from "../views/RegisterLoginForgotpassword.vue"

// src/__tests__/App.spec.js
import { Response } from "miragejs"


let server

beforeEach(() => {
  server = makeServer({ environment: "test" })
})
/*
it("shows the todos from our server", async () => {
  server.create("todo", { id: 1, content: "Learn Mirage JS" })
  server.create("todo", { id: 2, content: "Integrate with Vue.js" })

  const wrapper = mount(App)

  // let’s wait for our vue component to finish loading data
  // we know it’s done when the data-testid enters the dom.
  await waitFor(wrapper, '[data-testid="todo-1"]')
  await waitFor(wrapper, '[data-testid="todo-2"]')

  expect(wrapper.find('[data-testid="todo-1"]').text()).toBe("Learn Mirage JS")
  expect(wrapper.find('[data-testid="todo-2"]').text()).toBe("Integrate with Vue.js")
})

it("shows a message if there are no todo", async () => {
  // Don’t create any todos

  const wrapper = mount(App)
  await waitFor(wrapper, '[data-testid="no-todos"]')

  expect(wrapper.find('[data-testid="no-todos"]').text()).toBe("No todos!")
})*/


it("button push testing", async () => {
    server.create("project", { id: 1, content: 'helpEverybody' })
    const wrapper = shallowMount(RegisterLoginForgotpassword)
  
    // let’s wait for our vue component to finish loading data
    // we know it’s done when the data-testid enters the dom.
    await waitFor(wrapper, '#button')
    wrapper.find('#button').trigger('click')
    await waitFor(wrapper, '#projectDisplay')

    expect(wrapper.find('#projectDisplay').text()).toBe("helpEverybody")
  })

// This helper method returns a promise that resolves
// once the selector enters the wrapper’s dom.
const waitFor = function(wrapper, selector) {
  return new Promise(resolve => {
    const timer = setInterval(() => {
      const todoEl = wrapper.findAll(selector)
      if (todoEl.length > 0) {
        clearInterval(timer)
        resolve()
      }
    }, 100)
  })
}

afterEach(() => {
  server.shutdown()
})


/* it("handles error responses from the server", async () => {
    // Override Mirage’s route handler for /todos, just for this test
    server.get("/todos", () => {
      return new Response(
        500,
        {},
        {
          error: "The database is taking a break.",
        }
      )
    })
  
    const wrapper = mount(App)
  
    await waitFor(wrapper, '[data-testid="server-error"]')
  
    expect(wrapper.find('[data-testid="server-error"]').text()).toBe(
      "The database is taking a break."
    )
  }) */
  