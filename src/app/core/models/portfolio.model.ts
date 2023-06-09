class Portfolio {
  id: string;
  name: string;
  defaultPortfolio: string;
  clientId: string;

  constructor(
    id: string, 
    name: string,
    defaultPortfolio: string,
    clientId: string
  ) {
    this.id = id;
    this.name = name;
    this.defaultPortfolio = defaultPortfolio;
    this.clientId = clientId;
  }
}

export default Portfolio;
