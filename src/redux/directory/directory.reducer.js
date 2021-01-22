const INITIAL_STATE = {
  sections: [
    {
      title: 'Bulldozers',
      imageUrl: 'https://www.strongminers.com/Resources/Products/big/cb7c3d30b2624c68ab54fc83e516e9c3.jpg',
      id: 1,
      linkUrl: 'shop/bulldozers',
    },
    {
      title: 'Dumptrucks',
      imageUrl: 'http://kowsh.ru/imgs5/karernyi-samosval.jpg',
      id: 2,
      linkUrl: 'shop/dumptrucks',
    },
    {
      title: 'Excavators',
      imageUrl: 'https://static.tuugo.my/images/big/506/303/sewa_excavator_backhoe_johor.jpg',
      id: 3,
      linkUrl: 'shop/excavators',
    }
  ]
};

const directoryReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    default:
      return state;
  }
}

export default directoryReducer;