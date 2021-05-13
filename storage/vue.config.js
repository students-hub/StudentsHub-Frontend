import { name } from './package';

export const devServer = {
  port: 3000,
  headers: {
    'Access-Control-Allow-Origin': '*',
  },
};

export const configureWebpack = {
  output: {
    library: `${name}-[name]`,
    libraryTarget: 'umd',
    jsonpFunction: `webpackJsonp_${name}`,
  },
};