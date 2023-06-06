class Portfolio {
  id: string;
  name: string;
  isDefault: string;
  clientId: string;

  constructor(
    id: string, 
    name: string,
    isDefault: string,
    clientId: string
  ) {
    this.id = id;
    this.name = name;
    this.isDefault = isDefault;
    this.clientId = clientId;
  }
}

export default Portfolio;
