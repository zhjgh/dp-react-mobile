export const imports = {
  'src/components/Ellipsis/index.mdx': () =>
    import(
      /* webpackPrefetch: true, webpackChunkName: "src-components-ellipsis-index" */ 'src/components/Ellipsis/index.mdx'
    ),
  'src/components/Home/index.mdx': () =>
    import(
      /* webpackPrefetch: true, webpackChunkName: "src-components-home-index" */ 'src/components/Home/index.mdx'
    ),
  'src/components/Slider/index.mdx': () =>
    import(
      /* webpackPrefetch: true, webpackChunkName: "src-components-slider-index" */ 'src/components/Slider/index.mdx'
    ),
}
