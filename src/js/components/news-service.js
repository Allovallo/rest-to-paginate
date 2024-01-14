export default class NewsApiService {
  constructor() {
    this.searchQuery = '';
    this.page = 1;
  }

  fetchArticles() {
    console.log('Перед запитом: ', this);
    const options = {
      headers: {
        Authorization: '265464eae7114d61af598e1a1efe990a',
      },
    };

    const url = `https://newsapi.org/v2/everything?q=${this.searchQuery}&language=en&pageSize=5&page=${this.page}`;

    fetch(url, options)
      .then(r => r.json())
      .then(data => {
        this.incrementPage();
        console.log('Після запиту', this);
      });
  }

  incrementPage() {
    this.page += 1;
  }

  resetPage() {
    this.page = 1;
  }

  get query() {
    return this.searchQuery;
  }

  set query(newQuery) {
    this.searchQuery = newQuery;
  }
}
