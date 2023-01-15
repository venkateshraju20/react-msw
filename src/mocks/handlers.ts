// src/mocks/handlers.js
import { rest } from 'msw'
import data from "../components/data.json";
export const handlers = [
    rest.get("https://jsonplaceholder.typicode.com/users", (req, res, ctx) => {
        return res(ctx.status(200),
            ctx.json(data))
    })
]