import React from 'react';

type ProviderComposerProps = {
  components: React.JSXElementConstructor<React.PropsWithChildren<unknown>>[];
  children: React.ReactNode;
};

export const ProviderComposer: React.FC<ProviderComposerProps> = ({ components, children }) => {
  return (
    <>
      {components.reduceRight((node, Component) => {
        return <Component>{node}</Component>;
      }, children)}
    </>
  );
};
