export enum PoItemListFilterMode {
  /** Verifica se o texto *inicia* com o valor pesquisado. Caso não seja especificado um tipo, será esse o utilizado. */
  startsWith,
  /** Verifica se o texto *contém* o valor pesquisado. */
  contains,
  /** Verifica se o texto *finaliza* com o valor pesquisado. */
  endsWith
}
