class Bento {
  private matsu: number;
  private take: number;
  private ume: number;
  private discountCode: string;
  private areaCode: string;

  constructor(
    matsu: number,
    take: number,
    ume: number,
    discountCode: string,
    areaCode: string,
  ) {
    this.matsu = matsu;
    this.take = take;
    this.ume = ume;
    this.discountCode = discountCode;
    this.areaCode = areaCode;
  }

  get price(): number {
    return 1620;
  }
}

export default Bento;
