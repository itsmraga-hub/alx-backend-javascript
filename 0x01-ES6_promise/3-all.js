import { createUser, uploadPhoto } from './utils';

export default function handleProfileSignup() {
  return Promise
    .all([createUser(), uploadPhoto()])
    .then((arr) => {
      console.log(`${arr[1].body} ${arr[0].firstName} ${arr[0].lastName}`);
    })
    .catch(() => console.log('Signup system offline'));
}
