export const data = {
  success: true,
  data: [
    {
      id: 2,
      name: 'فروشگاه',
      questions: [
        {
          id: 3,
          question: 'از کدام موارد ناراضی بودید؟',
          type: {
            key: 4,
            text: 'چند گزینه ای'
          },
          is_required: false,
          options: [
            {
              id: 13,
              title: 'قیمت بالا',
              question_id: 3,
              status: 1
            },
            {
              id: 14,
              title: 'باز بودن کالا',
              question_id: 3,
              status: 1
            },
            {
              id: 15,
              title: 'بسته بندی نامناسب',
              question_id: 3,
              status: 1
            }
          ]
        },
        {
          id: 4,
          question: 'از کدام موارد راضی بودید؟',
          type: {
            key: 4,
            text: 'چند گزینه ای'
          },
          is_required: false,
          options: [
            {
              id: 16,
              title: 'تحویل در محل دیگر',
              question_id: 4,
              status: 1
            },
            {
              id: 17,
              title: 'تحویل به موقع کالا ',
              question_id: 4,
              status: 1
            },
            {
              id: 18,
              title: 'تحویل در محل',
              question_id: 4,
              status: 1
            }
          ]
        }
      ]
    },
    {
      id: 3,
      name: 'پیک',
      questions: [
        {
          id: 5,
          question: 'رفتار مناسب',
          type: {
            key: 1,
            text: 'بله و خیر'
          },
          is_required: false,
          options: [
            {
              id: 19,
              title: 'بله',
              question_id: 5,
              status: 1
            },
            {
              id: 20,
              title: 'خیر',
              question_id: 5,
              status: 1
            }
          ]
        },
        {
          id: 6,
          question: 'مواردی که راضی بودید؟',
          type: {
            key: 4,
            text: 'چند گزینه ای'
          },
          is_required: false,
          options: [
            {
              id: 21,
              title: 'رفتار مناسب',
              question_id: 6,
              status: 1
            }
          ]
        }
      ]
    },
    {
      id: 4,
      name: 'توضیحات',
      questions: [
        {
          id: 7,
          question: 'موارد دلخواه',
          type: {
            key: 2,
            text: 'متن'
          },
          is_required: false,
          options: []
        }
      ]
    },
    {
      id: 5,
      name: 'فروشنده',
      questions: [
        {
          id: 8,
          question: 'از کدام موارد راضی بودید؟',
          type: {
            key: 4,
            text: 'چند گزینه ای'
          },
          is_required: false,
          options: [
            {
              id: 22,
              title: 'رفتار محترمانه',
              question_id: 8,
              status: 1
            },
            {
              id: 23,
              title: 'سرعت عمل',
              question_id: 8,
              status: 1
            }
          ]
        },
        {
          id: 9,
          question: 'از کدام موارد ناراضی بودید؟',
          type: {
            key: 4,
            text: 'چند گزینه ای'
          },
          is_required: false,
          options: [
            {
              id: 24,
              title: 'رفتار نامناسب',
              question_id: 9,
              status: 1
            },
            {
              id: 25,
              title: 'عدم مهارت فروش',
              question_id: 9,
              status: 1
            }
          ]
        },
        {
          id: 10,
          question: 'سایر پیشنهادات و انتقادها',
          type: {
            key: 3,
            text: 'متن بلند'
          },
          is_required: false,
          options: []
        }
      ]
    }
  ]
}
export const factors = {
  success: true,
  data: {
    items: [
      {
        id: 221397,
        factor_date: '1401/05/29',
        factor_amount: '1000000',
        buy_sale: {
          key: 4,
          text: 'فاکتور فروش'
        },
        factor_type: {
          id: 1,
          name: 'عادی'
        },
        customer: {
          id: 80047,
          name: 'مهدی پاکزاد مقدم',
          number: '09215953121'
        },
        sell_agent: {
          id: 108,
          name: 'مهدی پاکزاد',
          number: '09215953121'
        },
        creator: {
          id: 94399,
          name: 'مهدی پاکزاد مقدم',
          username: '09215953121'
        },
        created: '1401/05/29 08:57',
        remind: '0',
        confirm: {
          key: 1,
          text: 'بلی',
          color: '#00b300'
        },
        branch: {
          id: 1,
          name: 'عصر ارتباط'
        },
        items: [
          {
            id: 551081,
            product: {
              id: 34090,
              name: 'میوه تمشک'
            },
            count: '2000',
            unit_price: '500',
            sum_price: '1000000',
            discount: '0',
            tax: '0'
          }
        ]
      },
      {
        id: 221372,
        factor_date: '1401/05/22',
        factor_amount: '300000',
        buy_sale: {
          key: 4,
          text: 'فاکتور فروش'
        },
        factor_type: {
          id: 1,
          name: 'عادی'
        },
        customer: {
          id: 80047,
          name: 'مهدی پاکزاد مقدم',
          number: '09215953121'
        },
        sell_agent: {
          id: 88,
          name: 'سارا سلاجقه',
          number: '09132969302'
        },
        creator: {
          id: 93021,
          name: 'سارا سلاجقه',
          username: '09132969302'
        },
        created: '1401/05/22 15:46',
        remind: '300000',
        confirm: {
          key: 1,
          text: 'بلی',
          color: '#00b300'
        },
        branch: {
          id: 15,
          name: 'سوپرمارکت'
        },
        items: [
          {
            id: 551024,
            product: {
              id: 34088,
              name: 'میوه in-fruit موز استوایی سبز'
            },
            count: '1',
            unit_price: '300000',
            sum_price: '300000',
            discount: '0',
            tax: '0'
          }
        ]
      },
      {
        id: 221371,
        factor_date: '1401/05/22',
        factor_amount: '3000000',
        buy_sale: {
          key: 4,
          text: 'فاکتور فروش'
        },
        factor_type: {
          id: 1,
          name: 'عادی'
        },
        customer: {
          id: 80047,
          name: 'مهدی پاکزاد مقدم',
          number: '09215953121'
        },
        sell_agent: {
          id: 88,
          name: 'سارا سلاجقه',
          number: '09132969302'
        },
        creator: {
          id: 93021,
          name: 'سارا سلاجقه',
          username: '09132969302'
        },
        created: '1401/05/22 15:43',
        remind: '0',
        confirm: {
          key: 1,
          text: 'بلی',
          color: '#00b300'
        },
        branch: {
          id: 15,
          name: 'سوپرمارکت'
        },
        items: [
          {
            id: 551023,
            product: {
              id: 34088,
              name: 'میوه in-fruit موز استوایی سبز'
            },
            count: '10',
            unit_price: '300000',
            sum_price: '3000000',
            discount: '0',
            tax: '0'
          }
        ]
      },
      {
        id: 221352,
        factor_date: '1401/05/13',
        factor_amount: '250000',
        buy_sale: {
          key: 4,
          text: 'فاکتور فروش'
        },
        factor_type: {
          id: 1,
          name: 'عادی'
        },
        customer: {
          id: 80047,
          name: 'مهدی پاکزاد مقدم',
          number: '09215953121'
        },
        sell_agent: {
          id: 111,
          name: 'یوسفی',
          number: '09133953892'
        },
        creator: {
          id: 92206,
          name: 'فاطمه یوسفی',
          username: '09133953892'
        },
        created: '1401/05/13 14:24',
        remind: '0',
        confirm: {
          key: 1,
          text: 'بلی',
          color: '#00b300'
        },
        branch: {
          id: 15,
          name: 'سوپرمارکت'
        },
        items: [
          {
            id: 551005,
            product: {
              id: 34086,
              name: 'fruit in-fruit موز استوایی'
            },
            count: '1',
            unit_price: '250000',
            sum_price: '250000',
            discount: '0',
            tax: '0'
          }
        ]
      },
      {
        id: 221347,
        factor_date: '1401/05/10',
        factor_amount: '200000',
        buy_sale: {
          key: 4,
          text: 'فاکتور فروش'
        },
        factor_type: {
          id: 1,
          name: 'عادی'
        },
        customer: {
          id: 80047,
          name: 'مهدی پاکزاد مقدم',
          number: '09215953121'
        },
        sell_agent: {
          id: 88,
          name: 'سارا سلاجقه',
          number: '09132969302'
        },
        creator: {
          id: 93021,
          name: 'سارا سلاجقه',
          username: '09132969302'
        },
        created: '1401/05/10 10:53',
        remind: '0',
        confirm: {
          key: 1,
          text: 'بلی',
          color: '#00b300'
        },
        branch: {
          id: 15,
          name: 'سوپرمارکت'
        },
        items: [
          {
            id: 551002,
            product: {
              id: 34086,
              name: 'fruit in-fruit موز استوایی'
            },
            count: '1',
            unit_price: '250000',
            sum_price: '200000',
            discount: '50000',
            tax: null
          }
        ]
      },
      {
        id: 221346,
        factor_date: '1401/05/10',
        factor_amount: '1380000',
        buy_sale: {
          key: 4,
          text: 'فاکتور فروش'
        },
        factor_type: {
          id: 1,
          name: 'عادی'
        },
        customer: {
          id: 80047,
          name: 'مهدی پاکزاد مقدم',
          number: '09215953121'
        },
        sell_agent: {
          id: 88,
          name: 'سارا سلاجقه',
          number: '09132969302'
        },
        creator: {
          id: 93021,
          name: 'سارا سلاجقه',
          username: '09132969302'
        },
        created: '1401/05/10 10:48',
        remind: '0',
        confirm: {
          key: 1,
          text: 'بلی',
          color: '#00b300'
        },
        branch: {
          id: 15,
          name: 'سوپرمارکت'
        },
        items: [
          {
            id: 551000,
            product: {
              id: 34089,
              name: 'میوه in-fruit توت فرنگی'
            },
            count: '1',
            unit_price: '400000',
            sum_price: '380000',
            discount: '20000',
            tax: null
          },
          {
            id: 551001,
            product: {
              id: 34086,
              name: 'fruit in-fruit موز استوایی'
            },
            count: '5',
            unit_price: '250000',
            sum_price: '1000000',
            discount: '250000',
            tax: null
          }
        ]
      },
      {
        id: 221344,
        factor_date: '1401/05/10',
        factor_amount: '600000',
        buy_sale: {
          key: 4,
          text: 'فاکتور فروش'
        },
        factor_type: {
          id: 1,
          name: 'عادی'
        },
        customer: {
          id: 80047,
          name: 'مهدی پاکزاد مقدم',
          number: '09215953121'
        },
        sell_agent: {
          id: 88,
          name: 'سارا سلاجقه',
          number: '09132969302'
        },
        creator: {
          id: 93021,
          name: 'سارا سلاجقه',
          username: '09132969302'
        },
        created: '1401/05/10 10:04',
        remind: '0',
        confirm: {
          key: 1,
          text: 'بلی',
          color: '#00b300'
        },
        branch: {
          id: 1,
          name: 'عصر ارتباط'
        },
        items: [
          {
            id: 550997,
            product: {
              id: 34086,
              name: 'fruit in-fruit موز استوایی'
            },
            count: '4',
            unit_price: '250000',
            sum_price: '600000',
            discount: '400000',
            tax: null
          }
        ]
      },
      {
        id: 221340,
        factor_date: '1401/05/10',
        factor_amount: '580000',
        buy_sale: {
          key: 4,
          text: 'فاکتور فروش'
        },
        factor_type: {
          id: 1,
          name: 'عادی'
        },
        customer: {
          id: 80047,
          name: 'مهدی پاکزاد مقدم',
          number: '09215953121'
        },
        sell_agent: {
          id: 88,
          name: 'سارا سلاجقه',
          number: '09132969302'
        },
        creator: {
          id: 93021,
          name: 'سارا سلاجقه',
          username: '09132969302'
        },
        created: '1401/05/10 10:02',
        remind: '0',
        confirm: {
          key: 1,
          text: 'بلی',
          color: '#00b300'
        },
        branch: {
          id: 1,
          name: 'عصر ارتباط'
        },
        items: [
          {
            id: 550995,
            product: {
              id: 34086,
              name: 'fruit in-fruit موز استوایی'
            },
            count: '1',
            unit_price: '250000',
            sum_price: '200000',
            discount: '50000',
            tax: null
          },
          {
            id: 550996,
            product: {
              id: 34089,
              name: 'میوه in-fruit توت فرنگی'
            },
            count: '1',
            unit_price: '400000',
            sum_price: '380000',
            discount: '20000',
            tax: null
          }
        ]
      },
      {
        id: 221339,
        factor_date: '1401/05/10',
        factor_amount: '400000',
        buy_sale: {
          key: 4,
          text: 'فاکتور فروش'
        },
        factor_type: {
          id: 1,
          name: 'عادی'
        },
        customer: {
          id: 80047,
          name: 'مهدی پاکزاد مقدم',
          number: '09215953121'
        },
        sell_agent: {
          id: 88,
          name: 'سارا سلاجقه',
          number: '09132969302'
        },
        creator: {
          id: 93021,
          name: 'سارا سلاجقه',
          username: '09132969302'
        },
        created: '1401/05/10 09:45',
        remind: '0',
        confirm: {
          key: 1,
          text: 'بلی',
          color: '#00b300'
        },
        branch: {
          id: 15,
          name: 'سوپرمارکت'
        },
        items: [
          {
            id: 550994,
            product: {
              id: 34089,
              name: 'میوه in-fruit توت فرنگی'
            },
            count: '1',
            unit_price: '400000',
            sum_price: '400000',
            discount: '0',
            tax: null
          }
        ]
      },
      {
        id: 221337,
        factor_date: '1401/05/10',
        factor_amount: '250000',
        buy_sale: {
          key: 4,
          text: 'فاکتور فروش'
        },
        factor_type: {
          id: 1,
          name: 'عادی'
        },
        customer: {
          id: 80047,
          name: 'مهدی پاکزاد مقدم',
          number: '09215953121'
        },
        sell_agent: {
          id: 115,
          name: 'محمد امین امیری فر',
          number: '09305640309'
        },
        creator: {
          id: 98025,
          name: 'محمد امین امیری فر',
          username: '09305640309'
        },
        created: '1401/05/10 09:27',
        remind: '0',
        confirm: {
          key: 1,
          text: 'بلی',
          color: '#00b300'
        },
        branch: {
          id: 1,
          name: 'عصر ارتباط'
        },
        items: [
          {
            id: 550992,
            product: {
              id: 34086,
              name: 'fruit in-fruit موز استوایی'
            },
            count: '1',
            unit_price: '250000',
            sum_price: '250000',
            discount: '0',
            tax: null
          }
        ]
      },
      {
        id: 221334,
        factor_date: '1401/05/10',
        factor_amount: '2150000',
        buy_sale: {
          key: 4,
          text: 'فاکتور فروش'
        },
        factor_type: {
          id: 1,
          name: 'عادی'
        },
        customer: {
          id: 80047,
          name: 'مهدی پاکزاد مقدم',
          number: '09215953121'
        },
        sell_agent: {
          id: 115,
          name: 'محمد امین امیری فر',
          number: '09305640309'
        },
        creator: {
          id: 98025,
          name: 'محمد امین امیری فر',
          username: '09305640309'
        },
        created: '1401/05/10 09:19',
        remind: '0',
        confirm: {
          key: 1,
          text: 'بلی',
          color: '#00b300'
        },
        branch: {
          id: 1,
          name: 'عصر ارتباط'
        },
        items: [
          {
            id: 550989,
            product: {
              id: 34086,
              name: 'fruit in-fruit موز استوایی'
            },
            count: '5',
            unit_price: '250000',
            sum_price: '1000000',
            discount: '250000',
            tax: null
          },
          {
            id: 550990,
            product: {
              id: 34088,
              name: 'میوه in-fruit موز استوایی سبز'
            },
            count: '3',
            unit_price: '300000',
            sum_price: '900000',
            discount: '0',
            tax: null
          },
          {
            id: 550991,
            product: {
              id: 34086,
              name: 'fruit in-fruit موز استوایی'
            },
            count: '1',
            unit_price: '250000',
            sum_price: '250000',
            discount: '0',
            tax: null
          }
        ]
      },
      {
        id: 221333,
        factor_date: '1401/05/10',
        factor_amount: '350000',
        buy_sale: {
          key: 4,
          text: 'فاکتور فروش'
        },
        factor_type: {
          id: 1,
          name: 'عادی'
        },
        customer: {
          id: 80047,
          name: 'مهدی پاکزاد مقدم',
          number: '09215953121'
        },
        sell_agent: {
          id: 115,
          name: 'محمد امین امیری فر',
          number: '09305640309'
        },
        creator: {
          id: 98025,
          name: 'محمد امین امیری فر',
          username: '09305640309'
        },
        created: '1401/05/10 09:17',
        remind: '0',
        confirm: {
          key: 1,
          text: 'بلی',
          color: '#00b300'
        },
        branch: {
          id: 1,
          name: 'عصر ارتباط'
        },
        items: [
          {
            id: 550988,
            product: {
              id: 34086,
              name: 'fruit in-fruit موز استوایی'
            },
            count: '2',
            unit_price: '250000',
            sum_price: '350000',
            discount: '150000',
            tax: null
          }
        ]
      },
      {
        id: 221320,
        factor_date: '1401/04/07',
        factor_amount: '-33000000',
        buy_sale: {
          key: 4,
          text: 'فاکتور فروش'
        },
        factor_type: {
          id: 1,
          name: 'عادی'
        },
        customer: {
          id: 80047,
          name: 'مهدی پاکزاد مقدم',
          number: '09215953121'
        },
        sell_agent: {
          id: 115,
          name: 'محمد امین امیری فر',
          number: '09305640309'
        },
        creator: {
          id: 98025,
          name: 'محمد امین امیری فر',
          username: '09305640309'
        },
        created: '1401/04/07 13:59',
        remind: '-33000000',
        confirm: {
          key: 0,
          text: 'خیر',
          color: '#e62e00'
        },
        branch: {
          id: 1,
          name: 'عصر ارتباط'
        },
        items: [
          {
            id: 550965,
            product: {
              id: 437,
              name: 'Console SONY  PS4 500GB R2 Slim 2116 1Controller Black Bi'
            },
            count: '1',
            unit_price: '33000000',
            sum_price: '-33000000',
            discount: '0',
            tax: null
          },
          {
            id: 550966,
            product: {
              id: 2288,
              name: 'Flash Memory Kodak 32GB K202 USB 2.0 Black Matin'
            },
            count: '1',
            unit_price: '780000',
            sum_price: '0',
            discount: '0',
            tax: null
          }
        ]
      },
      {
        id: 221312,
        factor_date: '1401/04/05',
        factor_amount: '200000',
        buy_sale: {
          key: 4,
          text: 'فاکتور فروش'
        },
        factor_type: {
          id: 1,
          name: 'عادی'
        },
        customer: {
          id: 80047,
          name: 'مهدی پاکزاد مقدم',
          number: '09215953121'
        },
        sell_agent: {
          id: 111,
          name: 'یوسفی',
          number: '09133953892'
        },
        creator: {
          id: 92206,
          name: 'فاطمه یوسفی',
          username: '09133953892'
        },
        created: '1401/04/05 11:08',
        remind: '0',
        confirm: {
          key: 1,
          text: 'بلی',
          color: '#00b300'
        },
        branch: {
          id: 15,
          name: 'سوپرمارکت'
        },
        items: [
          {
            id: 550958,
            product: {
              id: 34087,
              name: 'سوپر مارکت ماندا قارچ '
            },
            count: '1',
            unit_price: '200000',
            sum_price: '200000',
            discount: '0',
            tax: null
          }
        ]
      },
      {
        id: 221311,
        factor_date: '1401/04/05',
        factor_amount: '1200000',
        buy_sale: {
          key: 4,
          text: 'فاکتور فروش'
        },
        factor_type: {
          id: 1,
          name: 'عادی'
        },
        customer: {
          id: 80047,
          name: 'مهدی پاکزاد مقدم',
          number: '09215953121'
        },
        sell_agent: {
          id: 111,
          name: 'یوسفی',
          number: '09133953892'
        },
        creator: {
          id: 92206,
          name: 'فاطمه یوسفی',
          username: '09133953892'
        },
        created: '1401/04/05 11:07',
        remind: '0',
        confirm: {
          key: 1,
          text: 'بلی',
          color: '#00b300'
        },
        branch: {
          id: 15,
          name: 'سوپرمارکت'
        },
        items: [
          {
            id: 550957,
            product: {
              id: 34087,
              name: 'سوپر مارکت ماندا قارچ '
            },
            count: '6',
            unit_price: '200000',
            sum_price: '1200000',
            discount: '0',
            tax: null
          }
        ]
      },
      {
        id: 193730,
        factor_date: '1400/10/30',
        factor_amount: '7000000',
        buy_sale: {
          key: 4,
          text: 'فاکتور فروش'
        },
        factor_type: {
          id: 1,
          name: 'عادی'
        },
        customer: {
          id: 80047,
          name: 'مهدی پاکزاد مقدم',
          number: '09215953121'
        },
        sell_agent: {
          id: 15,
          name: 'گروه عبداللهی',
          number: '09131433961'
        },
        creator: {
          id: 22314,
          name: 'محمدرضا عبداللهی',
          username: '09131433961'
        },
        created: '1400/10/30 14:45',
        remind: '0',
        confirm: {
          key: 1,
          text: 'بلی',
          color: '#00b300'
        },
        branch: {
          id: 1,
          name: 'عصر ارتباط'
        },
        items: [
          {
            id: 503226,
            product: {
              id: 30358,
              name: 'Handsfree Lenovo  TG01 SE Black Bi - '
            },
            count: '1',
            unit_price: '7000000',
            sum_price: '7000000',
            discount: '0',
            tax: null
          },
          {
            id: 503264,
            product: {
              id: 27142,
              name: 'Glass Mobile Ceramic SAMSUNG A52 Transparent'
            },
            count: '1',
            unit_price: '400000',
            sum_price: '0',
            discount: '400000',
            tax: null
          }
        ]
      }
    ],
    _links: {
      self: {
        href: 'http://asrd.mobittest.ir/api/hesabro/shop-v1/factor?page=1'
      },
      first: {
        href: 'http://asrd.mobittest.ir/api/hesabro/shop-v1/factor?page=1'
      },
      last: {
        href: 'http://asrd.mobittest.ir/api/hesabro/shop-v1/factor?page=1'
      }
    },
    _meta: {
      totalCount: 16,
      pageCount: 1,
      currentPage: 1,
      perPage: 20
    }
  }
}
