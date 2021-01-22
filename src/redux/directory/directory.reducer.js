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
    },
    {
      title: 'womens',
      imageUrl: 'https://i.ibb.co/GCCdy8t/womens.png',
      id: 4,
      linkUrl: 'shop/womens',
    },
    {
      title: 'mens',
      imageUrl: 'https://i.ibb.co/R70vBrQ/men.png',
      id: 5,
      linkUrl: 'shop/mens',
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