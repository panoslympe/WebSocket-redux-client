import { createListenerMiddleware, isAnyOf } from "@reduxjs/toolkit";
import { decrement, increment } from "./slice";

export const listenerMiddleware = createListenerMiddleware();
listenerMiddleware.startListening({
  matcher: isAnyOf(increment, decrement),
  effect: (action, listenerApi) =>
    localStorage.setItem(
      "messages",
      JSON.stringify((listenerApi.getState()).messages)
    )
});
