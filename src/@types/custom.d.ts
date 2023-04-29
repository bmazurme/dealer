declare module '*.svg' {
  const content: any;
  export default content;
}

declare module '@heroicons/react/solid';

declare module '*.css' {
  interface IClassNames {
    [className: string]: string
  }
  const classNames: IClassNames;
  export = classNames;
}
