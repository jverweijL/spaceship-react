const AUTH = 'XXBasic YWRtaW5AbGlmZXJheS5jb206dGVzdA==';

const DOMAIN = 'http://localhost:8080';

const GRAPHQL_ENDPOINT = `${DOMAIN}/o/graphql`;

const AUTHTOKEN = Liferay.authToken;

export {
    AUTH,
    DOMAIN,
    GRAPHQL_ENDPOINT,
    AUTHTOKEN
};