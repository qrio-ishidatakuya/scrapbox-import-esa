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

/**
 *
 * @export
 * @interface NewEmoji
 */
export interface NewEmoji {
  /**
   * 登録したい絵文字のコードです。絵文字を入力する際の両端の**:**を含めずに指定して下さい。
   * @type {string}
   * @memberof NewEmoji
   */
  code: string;
  /**
   * 既に登録されている絵文字に対するエイリアス絵文字を作成する際に指定して下さい。
   * @type {string}
   * @memberof NewEmoji
   */
  origin_code?: string;
  /**
   * 絵文字の画像データです。  - BASE64でencodeしたStringを指定して下さい。 - 新しい絵文字を作成する場合に指定して下さい。エイリアス絵文字を作成する際には不要です。 - 画像の条件   - 64KB以下   - 128px x 128px以上   - GIF or PNG
   * @type {File}
   * @memberof NewEmoji
   */
  image?: File;
}
