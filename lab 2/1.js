const SELECT_PERCENT = 0.4;
const GENERATE_PERCENT = 0.4;
const USERS_COUNT = 5;

const data = [
  {
    user_id: 5,
    date: new Date(2020, 09, 20),
    products_id: [90],
  },
  {
    user_id: 2,
    date: new Date(2020, 09, 18),
    products_id: [10, 20],
  },
  {
    user_id: 4,
    date: new Date(2020, 09, 8),
    products_id: [30],
  },
  {
    user_id: 3,
    date: new Date(2020, 09, 15),
    products_id: [30, 50, 70],
  },
  {
    user_id: 1,
    date: new Date(2020, 09, 28),
    products_id: [90],
  },
  {
    user_id: 1,
    date: new Date(2020, 09, 23),
    products_id: [30],
  },
  {
    user_id: 2,
    date: new Date(2020, 09, 21),
    products_id: [30],
  },
  {
    user_id: 2,
    date: new Date(2020, 09, 27),
    products_id: [40, 60, 70],
  },
  {
    user_id: 4,
    date: new Date(2020, 09, 16),
    products_id: [40, 70],
  },
  {
    user_id: 4,
    date: new Date(2020, 09, 25),
    products_id: [90],
  },
];

const combo = [
  [[1], [2], [3], [4], [5]],
  [[1, 2] [1, 3], [1, 4], [1, 5]]
]

function sortPhase() {
  const comparator = (d1, d2) => {
    return d1.user_id - d2.user_id || d1.date - d2.date;
  };

  data.sort(comparator);
}

function selectPhase(selectPercent) {
  const result = [];

  const joinTime = [];
  data.forEach(d => {
    const products = d.products_id;
    const users = [];

    data.forEach(d1 => {
      let joined = true;

      products.forEach(p => {
        if (!joined) return;

        joined = d1.products_id.includes(p);
      });

      if (joined) {
        if (!users.includes(d1.user_id)) {
          users.push(d1.user_id)
        }
      }
    });

    if (!joinTime.find(j => j.id === products.toString())) {
      joinTime.push({
        id: products.toString(),
        count: users.length,
        array: products,
      });
    }
  });

  joinTime.forEach(j => {
    if (j.count / USERS_COUNT >= selectPercent) {
      if (j.array.length > 1) {
        j.array.forEach(r => {
          if (!result.find(f => f[0] === r && f.length === 1))
            result.push([r]);
        });
      }
      result.push(j.array);
    }
  });

  result.sort((i1, i2) => {
    return i1[i1.length - 1] - i2[i2.length - 1];
  });

  return result.map((r, i) => ({
    id: i + 1,
    item: r
  }));
}

function transformationPhase(selectArray) {
  const result = [];

  data.forEach(d => {
    if (result.find(r => r.user_id === d.user_id)) return;
    
    const userProducts = [];
    
    data.filter(dt => dt.user_id === d.user_id).forEach(dt => userProducts.push(dt.products_id));

    result.push({
      user_id: d.user_id,
      products_id: userProducts
    });
  });

  result.forEach(r => {
    r.select_id = [];

    r.products_id.forEach(p => {
      if (p.length === 1) {
        const selectItem = selectArray.find(s => s.item.toString() === p.toString());
        if (selectItem) {
          r.select_id.push([selectItem.id]);
        }
      } else {
        const sel_id = [];

        selectArray.forEach(sA => {
          let joined = true;
          sA.item.forEach(s => {
            if (!joined) return;

            joined = p.includes(s);
          });

          if (joined) {
            sel_id.push(sA.id);
          }
        });

        if (sel_id.length)
          r.select_id.push(sel_id);
      }
    });
  });

  return result.map(r => r.select_id);
}

function generatePhase(transArray, genPercent) {
  const getAllSubsets = theArray => theArray.reduce(
    (subsets, value) => subsets.concat(
     subsets.map(set => [value,...set])
    ),
    [[]]
  );

  const result = [];

  let max = transArray[0][0][0];
  
  transArray.forEach(tA => {
    tA.forEach(t => {
      const m = Math.max(...t);
      if (max < m) {
        max = m;
      }
    })
  });

  const subsets = getAllSubsets(Array.from({length: max}, (_, k) => k + 1));

  subsets.forEach(sub => {
    if (!sub.length) return;
    let count = 0;
    
    sub.forEach(s => {
      let joined = true;
      transArray.forEach(tA => {
        tA.forEach(t => {
          if (!joined) return;

          joined = t.includes(s);
        });
      });
      if (joined) {
        count++;
      }
    });

    result.push({
      id: sub.toString(),
      count: count,
    });
  });

  console.log(result);
}



function main() {
  // console.log('----------------------------------------------------------------------------------------------------')
  // console.log('Start:');
  // console.log(data);

  sortPhase();
  // console.log('----------------------------------------------------------------------------------------------------')
  // console.log('After sort phase:');
  // console.log(data);

  const selectArray = selectPhase(SELECT_PERCENT);
  // console.log('----------------------------------------------------------------------------------------------------')
  // console.log('After select phase:')
  // console.log(selectArray);
  
  const transformationArray = transformationPhase(selectArray);
  // console.log('----------------------------------------------------------------------------------------------------')
  // console.log('After transformation phase:')
  // console.log(transformationArray);

  generatePhase(transformationArray, GENERATE_PERCENT);
  // console.log('----------------------------------------------------------------------------------------------------')
  // console.log('After transformation phase:')
  // console.log(transformationArray);
}

main();

