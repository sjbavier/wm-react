import navigationSaga from './components/container/container2/sagas'

export default function* IndexSaga (){
   yield [
        navigationSaga(),
   ]
};