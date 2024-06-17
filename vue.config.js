const { defineConfig } = require('@vue/cli-service');

module.exports = defineConfig({
    transpileDependencies: true,
    lintOnSave: false,
    devServer: {
        client: {
            overlay: false,
        },
        port: 8088,
        // Proxy 설정
        proxy: {
            // 경로가 "/api" 로 시작하는 요청을 대상으로 proxy 설정
            '/': {
                target: 'http://localhost:3000',
                //127.0.0.1:3000 X
                //localhost:3000 O
                //localhost X
                //http://localhost O
                //http://127.0.0.1 O

                //target: 'https://todosvc.bmaster.kro.kr/', //예제 API 사이트
                changeOrigin: true,
                // 요청 경로에서 '/api' 제거
                pathRewrite: { '^/api': '' },
                ws: false,
                secure: false,
            },
        },
    },
});


// import { createProxyMiddleware } from 'http-proxy-middleware';

// const setupProxy = (app) => {
//     app.use(
//         '/',
//         createProxyMiddleware({
//             target: 'http://localhost:3000',
//             changeOrigin: true,
//         })
//     );
// };

// export default setupProxy;
