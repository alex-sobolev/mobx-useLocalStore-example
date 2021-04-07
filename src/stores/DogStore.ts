export interface IDogStore {
  dogSrc: string;
  fetching: boolean;
  error: string | null;
  fetchDog: () => Promise<void>;
}

const dogPath = `https://dog.ceo/api/breeds/image/random`;

export const DogStore = (): IDogStore => ({
  dogSrc: '',
  fetching: false,
  error: null,
  async fetchDog() {
    try {
      console.log('fetching dog...');
      this.fetching = true;

      const response = await fetch(dogPath);
      const data = await response.json();
      console.log('Dog fetch success:', data);

      this.fetching = false;
      this.error = null;
      this.dogSrc = data.message;
      console.log('this', JSON.stringify(this));
    } catch (err) {
      this.error = err;
      this.dogSrc = '';
    }
  },
});
