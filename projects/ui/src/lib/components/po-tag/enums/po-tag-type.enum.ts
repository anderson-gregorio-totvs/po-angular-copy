/**
 * @usedBy PoTagComponent
 *
 * @description
 *
 * Define os tipos disponíveis para o `po-tag`.
 */
export enum PoTagType {
  /** Erro, perigo, problema ou aviso crítico. */
  Danger = 'danger',

  /** Informativo ou explicativo. */
  Info = 'info',

  /** Confirmação, resultados positivos ou êxito. */
  Success = 'success',

  /** Aviso ou advertência. */
  Warning = 'warning',

  /** De uso geral, quando os tipos Info, Warning, Success e Danger não atendem a necessidade. */
  Neutral = 'neutral'
}
