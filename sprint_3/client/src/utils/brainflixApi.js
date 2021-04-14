// BrainFlix API
const url = "http://localhost:8080";
// const api_key = "?api_key=ba88a64d-5269-47da-aa69-dac14769135d";

// Video Api
export const videoListGetRequestApi = () => `${url}/videos`;

export const videoMetaGetRequestApi = (videoId) => `${url}/videos/${videoId}`;

export const videoPostRequestApi = () => `${url}/videos`;

// Comments Api
export const commentsPostRequestUrl = (videoId) =>
  `${url}/videos/${videoId}/comments`;

export const commentsDeleteRequestUrl = (videoId, commentId) =>
  `${url}/videos/${videoId}/comments/${commentId}`;
