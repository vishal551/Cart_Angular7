export class Product {
  constructor(
    public ProductID?: number,
    public CategoryID?: number,
    public ProductName?: string,
    public ProductQuantity?: number,
    public ProductPrice?: number,
    public InStock?: boolean,
    public ProductImage?: string,
    public ProductDescription?: string
  ) { }
}
