export const IsUserLogedIn = () => sessionStorage.getItem("token") !== null

export const GetBaseUrl = () => new RegExp(/^.*\//).exec(window.location.href);

export const AuthTokenExists = () => sessionStorage.getItem("token") !== null