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
import { Stargazer } from './stargazer';

/**
 * 
 * @export
 * @interface PaginatedStargazers
 */
export interface PaginatedStargazers {
    /**
     * Stargazerのリスト
     * @type {Array<Stargazer>}
     * @memberof PaginatedStargazers
     */
    'stargazers': Array<Stargazer>;
    /**
     * 1つ前のpage番号。存在しない場合はnull
     * @type {number}
     * @memberof PaginatedStargazers
     */
    'prev_page': number | null;
    /**
     * 1つ先のpage番号。存在しない場合はnull
     * @type {number}
     * @memberof PaginatedStargazers
     */
    'next_page': number | null;
    /**
     * リソースの総数
     * @type {number}
     * @memberof PaginatedStargazers
     */
    'total_count': number;
    /**
     * 現在のページ番号
     * @type {number}
     * @memberof PaginatedStargazers
     */
    'page': number;
    /**
     * 1ページあたりに含まれる要素数
     * @type {number}
     * @memberof PaginatedStargazers
     */
    'per_page': number;
    /**
     * per_pageに指定可能な数の最大値
     * @type {number}
     * @memberof PaginatedStargazers
     */
    'max_per_page': number;
}

