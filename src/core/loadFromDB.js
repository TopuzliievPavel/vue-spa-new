import { db } from '../core/dataBase';

function loadContent(path, ctx) {
  ctx.$store.commit('visibleSpinner', true);

  db.ref(path).once('value')
    .then((data) =>{
      ctx.content = data.val();
      ctx.$store.commit('visibleSpinner', false)
    })
}

export default loadContent
