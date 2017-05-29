import Request from './request';

const Settings = {
  ACCESS_TOKEN: '9a8cd815163e5e68aa4ab4a9be9519c54f851ec2de320e365dc5e591fbfc95fd',
  URI: 'https://api.dribbble.com/v1/',
};

class ShotsDataSource {
  static getAll(page = 1) {
    return Request.do('GET', `${Settings.URI}/shots/?page=${page}&access_token=${Settings.ACCESS_TOKEN}`);
  }

  static getOne(id = 0) {
    return Request.do('GET', `${Settings.URI}/shots/${id}?access_token=${Settings.ACCESS_TOKEN}`);
  }
}

export default ShotsDataSource;
