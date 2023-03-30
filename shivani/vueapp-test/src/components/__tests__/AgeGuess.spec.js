import { test, expect, beforeAll, afterEach, afterAll } from "vitest";
//import mount
import { mount } from "@vue/test-utils";
//import your component
import AgeGuess from "../AgeGuess.vue";
import { setupServer } from 'msw/node'
import { rest } from 'msw'

export const restHandlers = [
    rest.get('https://api.agify.io/', (req, res, ctx) => {
        return res(ctx.status(200), ctx.json([
            {
                age: 55,
                name: "tope"
            }
        ]))
    }),
]
const server = setupServer(...restHandlers)
// Start server before all tests
beforeAll(() => server.listen({ onUnhandledRequest: 'error' }))

test("Button clicked", async () => {
    expect(AgeGuess).toBeTruthy();

    const wrapper = mount(AgeGuess, {
        props: {
            title: "Guess the users age",
        },
    });
    const verifyClick = await wrapper.get("button").trigger("click");
    expect(wrapper.vm.user.search).toEqual(null);
});
//  Close server after all tests
afterAll(() => server.close())

// Reset handlers after each test `important for test isolation`
afterEach(() => server.resetHandlers())
