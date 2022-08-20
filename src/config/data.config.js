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
