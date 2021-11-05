import React from "react";

export const combine = (providers) => providers.reduce(
  (AccumulatedProviders, [Provider, props = {}]) =>
    ({ children }) => (
      <AccumulatedProviders>
        <Provider {...props}>
          {children}
        </Provider>
      </AccumulatedProviders>
    ),
  ({ children }) => <>{children}</>
);