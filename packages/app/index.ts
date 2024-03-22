import { createTRPCProxyClient, httpLink } from "@trpc/client";

import type { AppRouter } from "@acme/api";

export const api = createTRPCProxyClient<AppRouter>({
  links: [httpLink({ url: `https://api.acme.com/` })],
});

api.hello.query();
