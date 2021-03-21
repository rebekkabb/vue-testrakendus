import {createServer, Model} from "miragejs"

export function makeServer({environment = "development"} = {}) {
    let server = createServer({
        environment,

        models: {
            recipe: Model,
        },

        seeds(server) {
            server.create("recipe", {title: "Eggs", type: "Breakfast", time: 15, ingredients: "text"})
            server.create("recipe", {title: "Salad", type: "Lunch/Dinner", time: 30, ingredients: "text"})
        },

        routes() {
            this.namespace = "api"

            this.get("/recipes", (schema) => {
                return schema.recipes.all()
            })
        },
    })

    return server
}