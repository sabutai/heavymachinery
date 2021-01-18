const SHOP_DATA = {
dozers: {
    id: 1,
    title: 'Бульдозеры',
    routeName: 'dozers',
    items: [
      {
        id: 1,
        name: 'Б10М',
        imageUrl: 'https://www.arthim.ru/upload/resize_cache/iblock/5f5/310_285_1/4.jpg',
        price: 25
      },
      {
        id: 2,
        name: 'ТМ1010 ГСТ12',
        imageUrl: 'https://mtz-market.ru/assets/images/products/853/buldozer-03.jpg',
        price: 18
      },
      {
        id: 3,
        name: 'john deere 850j',
        imageUrl: 'https://tkazimut.com/wp-content/uploads/2020/01/1b970f3b2316b5dd2ccbd00be978cf6c-349x250.jpg',
        price: 35
      },
      {
        id: 4,
        name: 'Четра Т-25.01ЯБР',
        imageUrl: 'https://progress21.org/image/cache/data/%D0%B1%D1%83%D0%BB%D1%8C%D0%B4%D0%BE%D0%B7%D0%B5%D1%80/P1020129-300x300.png',
        price: 25
      },
      {
        id: 5,
        name: 'Changlin CLT120',
        imageUrl: 'https://images.ua.prom.st/2020047708_w455_h430_buldozer-changlin-clt120.jpg',
        price: 18
      },
      {
        id: 6,
        name: 'XCMG TY230',
        imageUrl: 'https://www.xcmg.com.ru/upload/iblock/e94/050.jpg',
        price: 14
      },
      {
        id: 7,
        name: 'SHEHWA SD9',
        imageUrl: 'https://krasnoyarsk.rbauto.ru/upload/resize_cache/iblock/a5d/480_320_2/a5de7a65872e188b3c2c9238309c56c1.jpg',
        price: 18
      },
      {
        id: 8,
        name: 'Komatsu D375A-5',
        imageUrl: 'https://tsm-co.ru/wp-content/uploads/d-375-komacu_6.jpg',
        price: 14
      }
    ]
  },
  excavator: {
    id: 2,
    title: 'Эксковаторы',
    routeName: 'excavator',
    items: [
      {
        id: 10,
        name: 'Komatsu PC1100LC-6',
        imageUrl: 'https://catexcavatorservice.com/wp-content/uploads/2020/05/Komatsu-PC1100LC-6-Crawler-Excavator-Service-Manual-c.jpg',
        price: 220
      },
      {
        id: 11,
        name: 'JCB 220',
        imageUrl: 'https://traktorbook.com/wp-content/uploads/2015/05/jcb220-350x261.jpg',
        price: 280
      },
      {
        id: 12,
        name: 'Hitachi Zaxis 230',
        imageUrl: 'https://catexcavatorservicerepairmanual.com/wp-content/uploads/2015/09/Hitachi-Zaxis-230-230lc-240h-240lch-270-270lc-Excavator-Operator-Pdf-Manual-300x224.jpg',
        price: 110
      },
      {
        id: 13,
        name: 'Hyundai HX140L',
        imageUrl: 'https://willowbrookplant.com/wp-content/uploads/2019/02/hyundai-hx140l-crawler-excavator-featured-image_opt.jpg',
        price: 160
      },
      {
        id: 14,
        name: 'DOOSAN DX300LCA',
        imageUrl: 'https://www.truck1.eu/img/Construction_machinery_Crawler_excavator_DOOSAN_DX300LCA-xxl-4068/4068_9763369453876.jpg',
        price: 160
      },
      {
        id: 15,
        name: 'Caterpillar 320',
        imageUrl: 'https://www.quipbank.com/wp-content/uploads/2016/01/CAT-320-BL-Excavator-hire-sale-kenya.jpg',
        price: 160
      },
      {
        id: 16,
        name: 'JCB JS330',
        imageUrl: 'https://www.equipmanuals.com/wp-content/uploads/2015/11/JCB-JS330-JS450-JS460-Excavator-Service-Manual-PDF-Download.jpg',
        price: 190
      },
      {
        id: 17,
        name: 'VOLVO EC 340',
        imageUrl: 'https://autoline.info/img/s/construction-equipment-tracked-excavatorVOLVO-EC-340---1529326221897977914_common--18061815501753722700.jpg',
        price: 200
      }
    ]
  },
dumptrucks: {
    id: 3,
    title: 'Самосвалы',
    routeName: 'dumptrucks',
    items: [
      {
        id: 18,
        name: 'Doosan Moxy MT41',
        imageUrl: 'https://maxi-exkavator.ru/_modules/_cnews/images/announce480/1843.jpg',
        price: 125
      },
      {
        id: 19,
        name: 'Volvo A40',
        imageUrl: 'https://www.mechanization.ru/upload/images/resize/2394_330x220_1.jpg',
        price: 90
      },
      {
        id: 20,
        name: 'Volvo FMX 8х4',
        imageUrl: 'http://magistraltrade.ru/volvo-360x239.jpg',
        price: 90
      },
      {
        id: 21,
        name: 'БелАЗ 7528',
        imageUrl: 'https://engine-market.ua/uploads/company/4672/produce/gallery/samosval-karernyi-belaz-7528-0x0-47663.jpg',
        price: 165
      },
      {
        id: 22,
        name: 'БЕЛАЗ 75310',
        imageUrl: 'https://www.mybelaz.ru/upload/resize_cache/iblock/aac/310_285_1/aacee3faa155e3faccb0a73b7a31699c.jpg',
        price: 185
      }
    ]
  },
  womens: {
    id: 4,
    title: 'Womens',
    routeName: 'womens',
    items: [
      {
        id: 23,
        name: 'Blue Tanktop',
        imageUrl: 'https://i.ibb.co/7CQVJNm/blue-tank.png',
        price: 25
      },
      {
        id: 24,
        name: 'Floral Blouse',
        imageUrl: 'https://i.ibb.co/4W2DGKm/floral-blouse.png',
        price: 20
      },
      {
        id: 25,
        name: 'Floral Dress',
        imageUrl: 'https://i.ibb.co/KV18Ysr/floral-skirt.png',
        price: 80
      },
      {
        id: 26,
        name: 'Red Dots Dress',
        imageUrl: 'https://i.ibb.co/N3BN1bh/red-polka-dot-dress.png',
        price: 80
      },
      {
        id: 27,
        name: 'Striped Sweater',
        imageUrl: 'https://i.ibb.co/KmSkMbH/striped-sweater.png',
        price: 45
      },
      {
        id: 28,
        name: 'Yellow Track Suit',
        imageUrl: 'https://i.ibb.co/v1cvwNf/yellow-track-suit.png',
        price: 135
      },
      {
        id: 29,
        name: 'White Blouse',
        imageUrl: 'https://i.ibb.co/qBcrsJg/white-vest.png',
        price: 20
      }
    ]
  },
  mens: {
    id: 5,
    title: 'Mens',
    routeName: 'mens',
    items: [
      {
        id: 30,
        name: 'Camo Down Vest',
        imageUrl: 'https://i.ibb.co/xJS0T3Y/camo-vest.png',
        price: 325
      },
      {
        id: 31,
        name: 'Floral T-shirt',
        imageUrl: 'https://i.ibb.co/qMQ75QZ/floral-shirt.png',
        price: 20
      },
      {
        id: 32,
        name: 'Black & White Longsleeve',
        imageUrl: 'https://i.ibb.co/55z32tw/long-sleeve.png',
        price: 25
      },
      {
        id: 33,
        name: 'Pink T-shirt',
        imageUrl: 'https://i.ibb.co/RvwnBL8/pink-shirt.png',
        price: 25
      },
      {
        id: 34,
        name: 'Jean Long Sleeve',
        imageUrl: 'https://i.ibb.co/VpW4x5t/roll-up-jean-shirt.png',
        price: 40
      },
      {
        id: 35,
        name: 'Burgundy T-shirt',
        imageUrl: 'https://i.ibb.co/mh3VM1f/polka-dot-shirt.png',
        price: 25
      }
    ]
  }
};

export default SHOP_DATA;
