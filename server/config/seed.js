/**
 * Populate DB with sample data on server start
 * to disable, edit config/environment/index.js, and set `seedDB: false`
 */

'use strict';
import User from '../api/user/user.model';
import Syllabus from '../api/syllabus/syllabus.model';


Syllabus.find({}).removeAsync()
  .then(() => Syllabus.createAsync({
    academy: 'Business Academy Southwest',
    year: 2016,
    title: 'JS Web Apps',
    education: 'Computer Science, 4th Semester, Spring',
    lecturer: 'Lars Juuls Bilde',
    owner: '57afb6d1a3c410e81d8c257f',
    objective: 'Learn how to make a MEAN fullstack using JS',
    iconurl: 'https://upload.wikimedia.org/wikipedia/commons/b/b1/Meanstack-624x250.jpg',
    weekplans: [{
      week: 1,
      summary: 'Awesome week',
      topics: 'Topics test',
      literature: 'literature test',
      videos: 'videos test',
      assignments: 'assignments test',
      teaser: 'teaser test'
    }]

}));




User.find({}).removeAsync()
  .then(() => {
    User.createAsync({
      _id: '57afb6d1a3c410e81d8c2580',
      provider: 'local',
      name: 'Test User',
      email: 'test@example.com',
      password: 'test'
    }, {
      _id: '57afb6d1a3c410e81d8c257f',
      provider: 'local',
      role: 'admin',
      name: 'Admin',
      email: 'admin@example.com',
      password: 'admin'
    })
    .then(() => {
      console.log('finished populating users');
    });
  });
