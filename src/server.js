import {createServer, Model} from "miragejs"

export function makeServer({environment = "development"} = {}) {
    let server = createServer({
        environment,

        models: {
            recipe: Model,
        },

        seeds(server) {
            server.create("recipe", {title: "Praemuna", type: "Hommikusöök", time: 10, ingredients: "1 muna", steps: "" +
                    "Prae muna kuumal pannil"})
            server.create("recipe", {
                title: "Kartulisalat",
                type: "Lõunasöök/Õhtusöök",
                time: 30,
                ingredients: " 10-15 koorimata kartulit (nt Laura või Marabel)\n" +
                    "5-6 keedetud muna\n" +
                    "1-2 värsket kurki ja/või\n" +
                    "4-5 marineeritud kurki\n" +
                    "2-3 keskmist sibulat\n" +
                    "400-500 g laste- või muud head keeduvorsti ",
                steps: "Keeda kartulid ja porgandid eelmisel päeval soolaga maitsestatud vees pehmeks. "
            })
            server.create("recipe", {
                title: "Manhattani toorjuustukook",
                type: "Dessert",
                time: 60,
                ingredients: " Põhi: \n" +
                    "8 digestive küpsist (u 110g)\n" +
                    "50g sulatatud võid\n" +
                    "Toorjuustukate:\n" +
                    "400g toorjuustu\n" +
                    "75g suhkrut\n" +
                    "2 muna\n" +
                    "1 tl vanilliektrakti\n" +
                    "Hapukoorekate:\n" +
                    "250g 20%list hapukoort\n" +
                    "2 sl suhkrut\n" +
                    "0,5 tl vanilliektrakti",
                steps: " Põhja tegemiseks tampisin küpsised pudrunuiaga puruks, segasin juurde sulatatud või ja surusin segu koogivormi põhja. Panin hetkeks külmkappi tahenema.\n" +
                    "\n" +
                    "Segasin toorjuustu suhkru ja vanilliekstraktiga pehmemaks, siis lisasin munad ja segasin kõik ühtlaseks. Valasin toorjuustusegu küpsisepõhjale ja küpsetasin eelsoojendatud ahjus 150*C juures umbes 40-45 minutit, kuni segu oli hüübinud, aga vormi liigutamisel keskelt veel võdises (see on ainuke asi, mis ma Nami retseptist erinevalt teen- tunnen, et madalamal temperatuuril küpsetades on eksimisvõimalus väiksem ja kook tuleb kreemjam). Siis tõstsin koogi ahjust välja ja lasin pool tunnikest jahtuda.\n" +
                    "\n" +
                    "Viimaks võtsin hapukoore ja segasin suhkru ning vanilliekstraktiga läbi, valasin ettevaatlikult toorjuustukihile ja küpsetasin 230*C ahjus 5-6 minutit, kuni hapukoorekiht oli tahenenud. Siis lasin koogil täielikult jahtuda ja üleöö jahedas puhata. "
            })
        },

        routes() {
            this.namespace = "api"

            this.get("/recipes", (schema) => {
                return schema.recipes.all()
            })

            this.get("/recipes/:id", (schema, request) => {
                let id = request.params.id
                return schema.recipes.find(id)
            })

            this.post("/recipes", (schema, request) => {
                let attrs = JSON.parse(request.requestBody)

                return schema.recipes.create(attrs)
            })

            this.patch("/recipes/:id", (schema, request) => {
                let attrs = JSON.parse(request.requestBody)
                let id = request.params.id
                let recipe = schema.recipes.find(id)

                return recipe.update(attrs)
            })

            this.delete("/recipes/:id", (schema, request) => {
                let id = request.params.id

                return schema.recipes.find(id).destroy()
            })
        },
    })

    return server
}