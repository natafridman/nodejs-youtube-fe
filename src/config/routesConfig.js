import config from './default'

const backendRoutes = {
    AUTH_SIGNUP:        config.BE_URL + "/api/signup",
    AUTH_SIGNIN:        config.BE_URL + "/api/signin",
    VIDEOS_GETALL:      config.BE_URL + "/api/blob/get",
    VIDEOS_GETFROMUSER: config.BE_URL + "/api/blob/getUserVideos",
    VIDEO_GET:          config.BE_URL + "/api/blob/get/",
    VIDEO_GET_ONE:      config.BE_URL + "/api/blob/getVideo/",
    VIDEO_UPLOAD:       config.BE_URL + "/api/blob/upload",
    VIDEO_DELETE:       config.BE_URL + "/api/blob/delete/"
}

export default backendRoutes;