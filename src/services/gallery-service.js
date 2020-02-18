export default class GalleryService {
    _baseUrl = 'https://jsonplaceholder.typicode.com';

    getResourse = async (url) => {
        const res = await fetch(`${this._baseUrl}${url}`);

        if (!res.ok) {
            throw new Error(`Could not fetch ${this._baseUrl}${url}, received ${res.status}`);
        }

        return await res.json();
    }

    _transformUser = (user) => {
        return {
            id: user.id,
            name: user.name,
            email: user.email,
        }
    }

    getAllUsers = async () => {
        const res = await this.getResourse(`/users/`);
        return res.map(this._transformUser);
    }

    getUserAlbums = async (id) => {
        const res = await this.getResourse(`/users/${id}/albums`);
        return res;
    }

    getPhotosAlbum = async (id) => {
        const res = await this.getResourse(`/albums/${id}/photos`);
        return res;
    }
}