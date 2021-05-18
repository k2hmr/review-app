export const users = [
  {
    id: 1,
    sub: "testuser1",
    nickname: "ユーザー1",
    createdAt: "2020-12-20T00:00:00.000Z",
    updatedAt: "2020-12-20T00:00:00.000Z",
  },
  {
    id: 2,
    sub: "testuser2",
    nickname: "ユーザー2",
    createdAt: "2020-12-20T00:00:00.000Z",
    updatedAt: "2020-12-20T00:00:00.000Z",
  },
  {
    id: 3,
    sub: "testuser3",
    nickname: "ユーザー3",
    createdAt: "2020-12-20T00:00:00.000Z",
    updatedAt: "2020-12-20T00:00:00.000Z",
  },
];

export const reviews = [
  {
    id: 1,
    restaurantId: 1,
    title: "とんこつラーメン",
    comment: "おいしい。",
    userId: 1,
    user: users[0],
    createdAt: "2020-12-20T00:00:00.000Z",
    updatedAt: "2020-12-20T00:00:00.000Z",
  },
  {
    id: 2,
    restaurantId: 1,
    title: "キャベツトッピング",
    comment: "うまい。",
    userId: 2,
    user: users[1],
    createdAt: "2020-12-20T00:00:00.000Z",
    updatedAt: "2020-12-20T00:00:00.000Z",
  },
  {
    id: 3,
    restaurantId: 1,
    title: "チャーハン",
    comment: "美味。",
    userId: 3,
    user: users[2],
    createdAt: "2020-12-20T00:00:00.000Z",
    updatedAt: "2020-12-20T00:00:00.000Z",
  },
  {
    id: 4,
    restaurantId: 2,
    title: "家系ラーメン",
    comment: "デリシャス。",
    userId: 1,
    user: users[0],
    createdAt: "2020-12-20T00:00:00.000Z",
    updatedAt: "2020-12-20T00:00:00.000Z",
  },
  {
    id: 5,
    restaurantId: 2,
    title: "学生に人気",
    comment: "絶品。",
    userId: 3,
    user: users[2],
    createdAt: "2020-12-20T00:00:00.000Z",
    updatedAt: "2020-12-20T00:00:00.000Z",
  },
];

export const restaurants = [
  {
    id: 1,
    name: "ラーメン英 下高井戸店",
    image: "/images/restaurants/1.jpg",
    map:
      '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3000.693442376997!2d139.6321131408691!3d35.66172581258806!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x4eb9644808e5e833!2z44Op44O844Oh44Oz6IuxIOS4i-mrmOS6leaIuOW6lw!5e0!3m2!1sja!2sjp!4v1607814449799!5m2!1sja!2sjp" width="100%" height="100%" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>',
    reviews: [reviews[0], reviews[1], reviews[2]],
    createdAt: "2020-12-20T00:00:00.000Z",
    updatedAt: "2020-12-20T00:00:00.000Z",
  },
  {
    id: 2,
    name: "ラーメン桜道家",
    image: "/images/restaurants/2.jpg",
    map:
      '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6483.209791322628!2d139.63220908689902!3d35.66210495943449!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x28f7261d927e6b0e!2z44Op44O844Oh44Oz5qGc6YGT5a62!5e0!3m2!1sja!2sjp!4v1607819444355!5m2!1sja!2sjp" width="100%" height="100%" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>',
    reviews: [reviews[3], reviews[4]],
    createdAt: "2020-12-20T00:00:00.000Z",
    updatedAt: "2020-12-20T00:00:00.000Z",
  },
  {
    id: 3,
    name: "ラーメン豚山 下高井戸店",
    image: null,
    map:
      '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1364.812164407626!2d139.63848785124426!3d35.665377810438954!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x52853180e76b8558!2z44Op44O844Oh44Oz6LGa5bGxIOS4i-mrmOS6leaIuOW6lw!5e0!3m2!1sja!2sjp!4v1607820396307!5m2!1sja!2sjp" width="100%" height="100%" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>',
    reviews: [],
    createdAt: "2020-12-20T00:00:00.000Z",
    updatedAt: "2020-12-20T00:00:00.000Z",
  },
  {
    id: 4,
    name: "せい家 下高井戸店",
    image: null,
    map:
      '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d609.7116136690794!2d139.63992140856143!3d35.665935130405515!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x88540e2319135425!2z44Gb44GE5a62IOS4i-mrmOS6leaIuOW6lw!5e0!3m2!1sja!2sjp!4v1607820421211!5m2!1sja!2sjp" width="100%" height="100%" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>',
    reviews: [],
    createdAt: "2020-12-20T00:00:00.000Z",
    updatedAt: "2020-12-20T00:00:00.000Z",
  },
  {
    id: 5,
    name: "麺匠 ようすけ 鶏煮亭 下高井戸店",
    image: "/images/restaurants/5.jpg",
    map:
      '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d609.7116136690794!2d139.63992140856143!3d35.665935130405515!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xfb8efc788ed8ab9c!2z6bq65YygIOOCiOOBhuOBmeOBkSDpto_nha7kuq0g5LiL6auY5LqV5oi45bqX!5e0!3m2!1sja!2sjp!4v1607820440803!5m2!1sja!2sjp" width="100%" height="100%" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>',
    reviews: [],
    createdAt: "2020-12-20T00:00:00.000Z",
    updatedAt: "2020-12-20T00:00:00.000Z",
  },
  {
    id: 6,
    name: "麺匠 ようすけ 鶏煮亭 下高井戸店",
    name: "もちぶたラーメン 利田商店",
    image: null,
    map:
      '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d609.7099608469251!2d139.64091026651553!3d35.6661515503589!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x46b24612d4ed3307!2z44KC44Gh44G244Gf44Op44O844Oh44OzIOWIqeeUsOWVhuW6lw!5e0!3m2!1sja!2sjp!4v1607820466954!5m2!1sja!2sjp" width="100%" height="100%" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>',
    reviews: [],
    createdAt: "2020-12-20T00:00:00.000Z",
    updatedAt: "2020-12-20T00:00:00.000Z",
  },
  {
    id: 7,
    name: "中華そば ばんや",
    image: null,
    map:
      '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d609.7095852049362!2d139.641671081717!3d35.66620073663019!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xb0f267294c06c698!2z5Lit6I-v44Gd44GwIOOBsOOCk-OChA!5e0!3m2!1sja!2sjp!4v1607820498699!5m2!1sja!2sjp" width="100%" height="100%" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>',
    reviews: [],
    createdAt: "2020-12-20T00:00:00.000Z",
    updatedAt: "2020-12-20T00:00:00.000Z",
  },
  {
    id: 8,
    name: "醤油らーめん専門店 醤屋",
    image: null,
    map:
      '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d609.7095852049362!2d139.641671081717!3d35.66620073663019!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xc8130e472c06b350!2z6Yak5rK544KJ44O844KB44KT5bCC6ZaA5bqXIOmGpOWxiw!5e0!3m2!1sja!2sjp!4v1607820520923!5m2!1sja!2sjp" width="100%" height="100%" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>',
    reviews: [],
    createdAt: "2020-12-20T00:00:00.000Z",
    updatedAt: "2020-12-20T00:00:00.000Z",
  },
  {
    id: 9,
    name: "らーめん大 下高井戸店",
    image: null,
    map:
      '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d805.4611033550801!2d139.63977317369677!3d35.66718659341429!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x437fb85b071510ba!2z44KJ44O844KB44KT5aSnIOS4i-mrmOS6leaIuOW6lw!5e0!3m2!1sja!2sjp!4v1607820555616!5m2!1sja!2sjp" width="100%" height="100%" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>',
    reviews: [],
    createdAt: "2020-12-20T00:00:00.000Z",
    updatedAt: "2020-12-20T00:00:00.000Z",
  },
  {
    id: 10,
    name: "あぶら～亭 桜上水店",
    image: null,
    map:
      '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3241.327252115491!2d139.63096095178932!3d35.66894328009979!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6018f3b4ce3deb0b%3A0x5d92f002545faa33!2z44GC44G244KJ772e5LqtIOahnOS4iuawtOW6lw!5e0!3m2!1sja!2sjp!4v1607820588618!5m2!1sja!2sjp" width="100%" height="100%" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>',
    reviews: [],
    createdAt: "2020-12-20T00:00:00.000Z",
    updatedAt: "2020-12-20T00:00:00.000Z",
  },
];
