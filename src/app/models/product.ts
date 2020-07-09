export class Product {
  id: number;
  sku: number;
  title: string;
  description: string;
  availableSizes: [];
  style: string;
  price: number;
  installments: number;
  currencyId: string;
  currencyFormat: string;
  isFreeShipping: boolean;
  imageUrl: string

  constructor(id, sku, title, description, price = 0, availableSizes, style,
    installments, currencyId, currencyFormat, isFreeShipping, 
    imageUrl = 'https://static.zattini.com.br/produtos/kit-camiseta-basica-c-5-pecas-masculinas/28/MSX-0011-028/MSX-0011-028_zoom1.jpg?ts=1574361247&ims=544x'
  ) {
    this.id = id
    this.sku = sku
    this.title = title
    this.description = description
    this.price = price
    this.availableSizes = availableSizes
    this.style = style
    this.installments = installments
    this.currencyId = currencyId
    this.currencyFormat = currencyFormat
    this.isFreeShipping = isFreeShipping
    this.imageUrl = imageUrl
  }
}

