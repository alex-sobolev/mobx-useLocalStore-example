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
      this.fetching = true;

      const response = await fetch(dogPath);
      const data = await response.json();

      this.fetching = false;
      this.error = null;
      this.dogSrc = data.message;
    } catch (err) {
      this.fetching = false;
      this.error = err;
      this.dogSrc = '';
    }
  },
});
