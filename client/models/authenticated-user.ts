/* tslint:disable */
/* eslint-disable */
/**
 * esa API v1
 * チームのナレッジ共有サービス[esa.io](https://esa.io/)のAPI v1の仕様書
 *
 * The version of the OpenAPI document: 1.0.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


// May contain unused imports in some cases
// @ts-ignore
import { Team } from './team';

/**
 * 現在のアクセストークンで認証中のユーザの情報を表します。
 * @export
 * @interface AuthenticatedUser
 */
export interface AuthenticatedUser {
    /**
     * サービス内で一意なユーザIDです
     * @type {number}
     * @memberof AuthenticatedUser
     */
    'id': number;
    /**
     * ユーザの名前です
     * @type {string}
     * @memberof AuthenticatedUser
     */
    'name': string;
    /**
     * ユーザのスクリーンネームです
     * @type {string}
     * @memberof AuthenticatedUser
     */
    'screen_name': string;
    /**
     * ユーザの作成日時です
     * @type {string}
     * @memberof AuthenticatedUser
     */
    'created_at': string;
    /**
     * ユーザの更新日時です
     * @type {string}
     * @memberof AuthenticatedUser
     */
    'updated_at': string;
    /**
     * ユーザのアイコンのURLです
     * @type {string}
     * @memberof AuthenticatedUser
     */
    'icon': string;
    /**
     * ユーザのemailアドレスです
     * @type {string}
     * @memberof AuthenticatedUser
     */
    'email': string;
    /**
     * 所属するチームです
     * @type {Array<Team>}
     * @memberof AuthenticatedUser
     */
    'teams'?: Array<Team>;
}

