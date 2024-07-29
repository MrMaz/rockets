export const ERROR_CODE_UNKNOWN = 'UNKNOWN';
export const ERROR_CODE_HTTP_UNKNOWN = 'HTTP_UNKNOWN';
export const ERROR_CODE_HTTP_BAD_REQUEST = 'HTTP_BAD_REQUEST';
export const ERROR_CODE_HTTP_NOT_FOUND = 'HTTP_NOT_FOUND';
export const ERROR_CODE_HTTP_INTERNAL_SERVER_ERROR =
  'HTTP_INTERNAL_SERVER_ERROR';

export const ERROR_MESSAGE_FALLBACK = 'Internal Server Error';

// TODO: add remaining error codes
export const HTTP_ERROR_CODE = new Map<number, string>();
HTTP_ERROR_CODE.set(400, ERROR_CODE_HTTP_BAD_REQUEST);
HTTP_ERROR_CODE.set(404, ERROR_CODE_HTTP_NOT_FOUND);
HTTP_ERROR_CODE.set(500, ERROR_CODE_HTTP_INTERNAL_SERVER_ERROR);
