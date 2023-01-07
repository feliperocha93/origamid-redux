// Currying Function
const li = Array.from(document.querySelectorAll('li'));

const getElementAttr = (key) => (el) => el.getAttribute(key);

const getAttrDataSlide = getElementAttr('data-slide');

const dataSlideList = li.map(getAttrDataSlide);

function reducer(state = { loading: false, data: null, error: null }, action) {
  switch (action.type) {
    case 'FETCH_STARTED':
      return { ...state, loading: true };
    case 'FETCH_SUCCESS':
      return { loading: false, data: action.payload, error: null };
    case 'FETCH_ERROR':
      return { loading: false, error: action.payload, data: null };
    default:
      return state;
  }
}

const { compose, applyMiddleware } = Redux;

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
// já vamos criar um Middleware, deixe assim por enquanto
const enhancer = composeEnhancers(applyMiddleware());

const store = Redux.createStore(reducer, enhancer);