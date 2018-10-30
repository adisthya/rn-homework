import faker from 'faker';

faker.locale = 'id_ID';
const fetchNamesApi = () => {
  let data = [];
  for(i=0; i < 20; i++) {
    data.push({
      'image': faker.image.avatar(),
      'name': `${faker.name.firstName()} ${faker.name.lastName()}`,
      'address': faker.address.streetAddress()
    });
  }

  return data;
};

export default fetchNamesApi;
