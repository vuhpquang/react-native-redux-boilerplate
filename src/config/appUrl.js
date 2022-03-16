/* eslint-disable import/no-unresolved */
import {
  IS_DEV as ENV_IS_DEV,
  S3_SOUTH_STORAGE as ENV_S3_SOUTH_STORAGE,
  APP_URL as ENV_APP_URL,
  LINK_MXH_WEB as ENV_LINK_MXH_WEB,
  LINK_MAIN_WEB as ENV_LINK_MAIN_WEB,
  LINK_YOOT_WAY as ENV_LINK_YOOT_WAY,
  LINK_YOOT_JOB as ENV_LINK_YOOT_JOB,
  LINK_YOOT_RECRUITER as ENV_LINK_YOOT_RECRUITER,
  LINK_YOOT_WORLD as ENV_LINK_YOOT_WORLD,
  LINK_YOOT_SIGN as ENV_LINK_YOOT_SIGN,
  LINK_CRAWL as ENV_LINK_CRAWL,
} from '@env';

export const BASE_URL = 'http://localhost:1337';

export const appURL = ENV_APP_URL;
export const LINK_MXH_WEB = ENV_LINK_MXH_WEB;
export const LINK_MAIN_WEB = ENV_LINK_MAIN_WEB;
export const LINK_YOOT_WAY = ENV_LINK_YOOT_WAY;
export const LINK_YOOT_JOB = ENV_LINK_YOOT_JOB;
export const LINK_YOOT_RECRUITER = ENV_LINK_YOOT_RECRUITER;
export const LINK_YOOT_WORLD = ENV_LINK_YOOT_WORLD;
export const LINK_YOOT_SIGN = ENV_LINK_YOOT_SIGN;
export const LINK_LOG_OUT = `${LINK_MXH_WEB}/logout`;

export const S3_SOUTH_STORAGE = ENV_S3_SOUTH_STORAGE;
export const S3_SOUTH_STORAGE_IMAGE = `${S3_SOUTH_STORAGE}/images`;
export const LINK_MXH = `${ENV_APP_URL}:8899`;
export const LINK_SKILL = `${ENV_APP_URL}:7799`;
export const LINK_HUONGNGHIEP = `${ENV_APP_URL}:9944`;
export const LINK_SOCKET = `${ENV_APP_URL}:9595`;
export const LINK_VIECLAM = `${ENV_APP_URL}:9927`;
export const LINK_DUHOC = `${ENV_APP_URL}:9924`;
export const LINK_CRAWL = ENV_LINK_CRAWL;

export const WEB_APP = 'http://web.yoot.vn';

export const IS_DEV = ENV_IS_DEV;
