const { RESTDataSource } = require('apollo-datasource-rest');

// RESTDataSource: 
//It automatically handles resource caching and request deduplication for our REST API calls
//To keep data-fetching implementations in a dedicated class and keep resolvers simple and clean
class TrackAPI extends RESTDataSource {

    constructor() {
        super();
        this.baseURL = "https://odyssey-lift-off-rest-api.herokuapp.com/";
    }

    getTracksForHome() {
        return this.get("tracks");
    }

    getAuthor(authorId) {
        return this.get(`author/${encodeURIComponent(authorId)}`);
    }

    getTrackModules(trackId) {
        return this.get(`track/${encodeURIComponent(trackId)}/modules`);
    }

    getTrack(trackId) {
        return this.get(`track/${encodeURIComponent(trackId)}`);
    }

    getModule(moduleId) {
        return this.get(`/module/${encodeURIComponent(moduleId)}`);
    }

    incrementTrackViews(trackId) {
        return this.patch(`/track/${trackId}/numberOfViews`);
    }
}

module.exports = TrackAPI;