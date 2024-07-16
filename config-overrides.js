module.exports = {
    webpack: (config) => {
        config.ignoreWarnings = [
            {
                module: /@mediapipe\/tasks-vision/,
                message: /Failed to parse source map/,
            },
        ];
        return config;
    },
};
