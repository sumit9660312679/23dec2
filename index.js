var g_class = {
  'name': "Dec21WebFundamentals",
  'instructor': {
    'name': "manoj falaswal",
    'subject': "signal&system"
  },
  'students': [{
      'name': 'deepak dubey',
      'marks': 99,
    },
    {
      'name': 'sumit yadav',
      'marks': 39,
    },
    {
      'name': 'arpit goyal',
      'marks': 99,
    },
    {
      'name': 'sachin raj',
      'marks': 37,
    },
    {
     'name': 'shivam yadav',
     'marks': 36,
    },
    {
     'name': 'pushpendra singh',
     'marks': 85,
    },
    {
     'name': 'deepak yadav',
     'marks': 69,
    }
  ],
};
for( var property=0; property<g_class.students.length; property++ ){

  if( g_class.students[property].marks>=90 ){

    console.log( g_class.students[property].name );
  }
}
