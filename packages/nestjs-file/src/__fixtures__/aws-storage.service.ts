import { FileInterface } from '@concepta/ts-common';
import { FileStorageServiceInterface } from '../interfaces/file-storage-service.interface';
import {
  AWS_KEY_FIXTURE,
  DOWNLOAD_URL_FIXTURE,
  UPLOAD_URL_FIXTURE,
} from './constants.fixture';

export class AwsStorageService implements FileStorageServiceInterface {
  KEY: string = AWS_KEY_FIXTURE;

  getUploadUrl(_file: FileInterface): string {
    return UPLOAD_URL_FIXTURE;
  }

  getDownloadUrl(_file: FileInterface): string {
    // make a call to aws to get signed download url
    return DOWNLOAD_URL_FIXTURE;
  }
}