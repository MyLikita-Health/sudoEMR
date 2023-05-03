export const isAuthenticated = (user) => !!user;

export const hasAccess = (user = {}, rights = []) =>
  rights.some((right) => user.accessTo && user.accessTo.includes(right));

export const canUseThis = (user = {}, rights = []) =>
  rights.some(
    (right) => user.functionality && user.functionality.includes(right)
  );

export const hasRole = (user, roles) =>
  roles.some((role) => user.roles.includes(role));
