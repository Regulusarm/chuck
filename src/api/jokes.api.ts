import api from "./index";

export default class JokesAPI {
  static async getJoke(): Promise<any> {
    return (await api.get(`/`)).data;
  }
}