import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default function handleProfileSignup(firstName, lastName, fileName) {
  return Promise
    .all([signUpUser(firstName, lastName), uploadPhoto(fileName)])
    .then((res) => (
      res.map((item) => ({
        status: item.status,
        value: item.status === 'fulfilled' ? item.value : String(item.reason),
      }))
    ));
}
