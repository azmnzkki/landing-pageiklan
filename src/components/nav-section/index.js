export function createNavItem({ path, hasChild, externalLink }) {
  return {
    baseProps: {
      href: path,
      target: externalLink ? '_blank' : undefined,
      rel: externalLink ? 'noopener noreferrer' : undefined,
    },
  };
}

export const navItemStyles = {};
export const navSectionClasses = {};
