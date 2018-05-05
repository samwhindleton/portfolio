// use to import .css file into NextJS project,
// without CSS modules.
const withCSS = (module.exports = require('@zeit/next-css')());



// // use when exporting project to a static HTML app.
// const withCSS = require('@zeit/next-css');
// const exportPathMap = (() => {
//   return {
//     '/': { page: '/' },
//     '/about': { page: '/about' },
//     '/conact': { page: '/contact' },
//     '/portfolio': { page: '/portfolio' },
//     '/resume': { page: '/resume' }
//   };
// });
// module.exports = withCSS(exportPathMap());
