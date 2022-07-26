import React from 'react';

export type Children = { children?: React.ReactNode };
export type WithChildren<T = {}> = T & Children;
export type NavState = {
  from: string;
};
