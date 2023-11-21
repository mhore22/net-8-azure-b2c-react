export const msalConfig = {
    auth: {
        clientId: '#######################',
        clientSecret: "#######################",
        authority: '#######################',       
        knownAuthorities: ['#######################'],
        redirectUri: "https://localhost:44449/",
    },
    cache: {
        cacheLocation: 'sessionStorage',
        storeAuthStateInCookie: false,
    }
};

// Add scopes here for ID token to be used at Microsoft identity platform endpoints.
export const loginRequest = {
    scopes: ["User.Read"]
};

// Add the endpoints here for Microsoft Graph API services you'd like to use.
export const graphConfig = {
    graphMeEndpoint: "Enter_the_Graph_Endpoint_Here/v1.0/me"
};