import { initTRPC } from "@trpc/server";

export const trpc = initTRPC.create();

const router = trpc.router({
  hello: trpc.procedure.query(() => "world"),
  test: trpc.procedure.query(() => "test"),
  ping: trpc.procedure.query(() => "pong"),
});

export type AppRouter = typeof router;
