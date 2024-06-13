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
            '/api': {
                target: 'https://todosvc.bmaster.kro.kr/',
                changeOrigin: true,
                // 요청 경로에서 '/api' 제거
                pathRewrite: { '^/api': '' },
                //ws: false,
                secure: false,
            },
        },
    },
});
