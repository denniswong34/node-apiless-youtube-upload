const promptLoginAndGetCookies =  require('./methods/promptLoginAndGetCookies');
const checkCookiesValidity = require('./methods/checkCookiesValidity');
import uploadVideo, {VideoObj} from './methods/uploadVideo'
import YoutubeUploader from './YoutubeUploader'

export default YoutubeUploader
export {
    promptLoginAndGetCookies,
    checkCookiesValidity,
    uploadVideo,
    VideoObj
}
