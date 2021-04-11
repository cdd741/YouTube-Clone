// BrainFlix API
const url = "https://project-2-api.herokuapp.com";
const api_key = "?api_key=ba88a64d-5269-47da-aa69-dac14769135d";

// Video Api
export const videoListGetRequestApi = () => `${url}/videos${api_key}`;

export const videoMetaGetRequestApi = (videoId) =>
  `${url}/videos/${videoId}${api_key}`;

// Comments Api
export const commentsPostRequestUrl = (videoId) =>
  `${url}/videos/${videoId}/comments${api_key}`;

export const commentsDeleteRequestUrl = (videoId, commentId) =>
  `${url}/videos/${videoId}/comments/${commentId}${api_key}`;
