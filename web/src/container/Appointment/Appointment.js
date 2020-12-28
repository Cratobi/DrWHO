import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import { Switch, Route } from 'react-router-dom'
import {} from '../../store/actions'
import { format } from 'fecha'

class Appointment extends Component {
  componentDidMount() {}

  state = {
    appointment : [
      {
        _id        : '5fd7b897a0fbf5cf07d7980b',
        speciality : 'consectetur',
        name       : 'Noel Mathews',
        location   : '<SyntaxError: Unexpected identifier>, Florida',
        date       : 'Fri Apr 14 1989 06:05:21 GMT+0600 (Bangladesh Standard Time)',
        time       : '',
      },
      {
        _id        : '5fd7b8971573e5018cbabacc',
        speciality : 'ipsum',
        name       : 'Burke Rich',
        location   : '<SyntaxError: Unexpected identifier>, New Mexico',
        date       : 'Sun Jan 19 1986 19:10:47 GMT+0600 (Bangladesh Standard Time)',
        time       : '',
      },
      {
        _id        : '5fd7b8976b83ce0fd0b50bcb',
        speciality : 'sit',
        name       : 'Cathy Sutton',
        location   : '<SyntaxError: Unexpected identifier>, Texas',
        date       : 'Sat Nov 30 1974 00:36:20 GMT+0600 (Bangladesh Standard Time)',
        time       : '',
      },
      {
        _id        : '5fd7b897183d4f0d352feeb5',
        speciality : 'dolor',
        name       : 'Kelley Vasquez',
        location   : '<SyntaxError: Unexpected identifier>, Arizona',
        date       : 'Sun Oct 04 1970 06:17:00 GMT+0600 (Bangladesh Standard Time)',
        time       : '',
      },
      {
        _id        : '5fd7b897fca6c327bf67897f',
        speciality : 'dolor',
        name       : 'Valerie Mccall',
        location   : '<SyntaxError: Unexpected identifier>, Ohio',
        date       : 'Mon Mar 09 1992 00:06:58 GMT+0600 (Bangladesh Standard Time)',
        time       : '',
      },
      {
        _id        : '5fd7b8971c85fb205a878fd3',
        speciality : 'officia',
        name       : 'Dickson Hendricks',
        location   : '<SyntaxError: Unexpected identifier>, Oregon',
        date       : 'Thu Dec 03 1970 06:01:29 GMT+0600 (Bangladesh Standard Time)',
        time       : '',
      },
      {
        _id        : '5fd7b897ccb2f90b46ff2da2',
        speciality : 'consectetur',
        name       : 'Rocha Bolton',
        location   : '<SyntaxError: Unexpected identifier>, New York',
        date       : 'Fri Feb 02 2001 19:02:40 GMT+0600 (Bangladesh Standard Time)',
        time       : '',
      },
      {
        _id        : '5fd7b8971e18953e0d6c5caa',
        speciality : 'non',
        name       : 'Candy Rollins',
        location   : '<SyntaxError: Unexpected identifier>, Tennessee',
        date       : 'Mon Oct 09 1989 08:44:12 GMT+0600 (Bangladesh Standard Time)',
        time       : '',
      },
      {
        _id        : '5fd7b897f418effc4852689b',
        speciality : 'proident',
        name       : 'Emilia Mckee',
        location   : '<SyntaxError: Unexpected identifier>, Kentucky',
        date       : 'Wed Nov 09 2016 12:31:39 GMT+0600 (Bangladesh Standard Time)',
        time       : '',
      },
      {
        _id        : '5fd7b897ed9292bc8d11477b',
        speciality : 'dolor',
        name       : 'Howe Tyler',
        location   : '<SyntaxError: Unexpected identifier>, Federated States Of Micronesia',
        date       : 'Fri May 03 2019 15:36:44 GMT+0600 (Bangladesh Standard Time)',
        time       : '',
      },
      {
        _id        : '5fd7b897f9798c8ec054a5b0',
        speciality : 'laboris',
        name       : 'Goodman Jacobs',
        location   : '<SyntaxError: Unexpected identifier>, Missouri',
        date       : 'Mon Nov 23 1992 10:05:13 GMT+0600 (Bangladesh Standard Time)',
        time       : '',
      },
      {
        _id        : '5fd7b897b2fab3d6e5537f4f',
        speciality : 'nostrud',
        name       : 'Juliette Mejia',
        location   : '<SyntaxError: Unexpected identifier>, Connecticut',
        date       : 'Tue May 13 1975 18:04:18 GMT+0600 (Bangladesh Standard Time)',
        time       : '',
      },
      {
        _id        : '5fd7b8971bbf22ddc36857ee',
        speciality : 'tempor',
        name       : 'Hudson Carney',
        location   : '<SyntaxError: Unexpected identifier>, North Carolina',
        date       : 'Thu Sep 21 1978 17:05:03 GMT+0600 (Bangladesh Standard Time)',
        time       : '',
      },
      {
        _id        : '5fd7b89778b5498002e451c8',
        speciality : 'enim',
        name       : 'Mcfadden Porter',
        location   : '<SyntaxError: Unexpected identifier>, South Carolina',
        date       : 'Mon Feb 10 1986 05:02:15 GMT+0600 (Bangladesh Standard Time)',
        time       : '',
      },
      {
        _id        : '5fd7b8977ebc8c4ba1675b91',
        speciality : 'sint',
        name       : 'Kitty Holman',
        location   : '<SyntaxError: Unexpected identifier>, Oklahoma',
        date       : 'Sun Nov 16 1986 14:16:27 GMT+0600 (Bangladesh Standard Time)',
        time       : '',
      },
      {
        _id        : '5fd7b897101c04c7828de849',
        speciality : 'ex',
        name       : 'Tate Mullins',
        location   : '<SyntaxError: Unexpected identifier>, Idaho',
        date       : 'Sun Dec 02 1984 18:11:11 GMT+0600 (Bangladesh Standard Time)',
        time       : '',
      },
      {
        _id        : '5fd7b897e4a00edc1c9600f6',
        speciality : 'nisi',
        name       : 'Wynn Fox',
        location   : '<SyntaxError: Unexpected identifier>, Alaska',
        date       : 'Sat May 13 2006 14:06:33 GMT+0600 (Bangladesh Standard Time)',
        time       : '',
      },
      {
        _id        : '5fd7b897f983bd6284dd9ca8',
        speciality : 'sunt',
        name       : 'Cummings Hughes',
        location   : '<SyntaxError: Unexpected identifier>, Illinois',
        date       : 'Thu Oct 17 1991 21:07:38 GMT+0600 (Bangladesh Standard Time)',
        time       : '',
      },
      {
        _id        : '5fd7b897fe51a91477443308',
        speciality : 'et',
        name       : 'Ortega Watts',
        location   : '<SyntaxError: Unexpected identifier>, Delaware',
        date       : 'Sun Apr 05 2009 10:32:59 GMT+0600 (Bangladesh Standard Time)',
        time       : '',
      },
      {
        _id        : '5fd7b897e7d9439fb083270f',
        speciality : 'aliqua',
        name       : 'Berger Cameron',
        location   : '<SyntaxError: Unexpected identifier>, Palau',
        date       : 'Sat Oct 02 1993 17:58:43 GMT+0600 (Bangladesh Standard Time)',
        time       : '',
      },
      {
        _id        : '5fd7b89742366cf96e8a0b00',
        speciality : 'culpa',
        name       : 'Francesca Harding',
        location   : '<SyntaxError: Unexpected identifier>, Guam',
        date       : 'Tue Jul 01 2014 00:44:43 GMT+0600 (Bangladesh Standard Time)',
        time       : '',
      },
      {
        _id        : '5fd7b89759c64612c863546d',
        speciality : 'ad',
        name       : 'Woods Sykes',
        location   : '<SyntaxError: Unexpected identifier>, Puerto Rico',
        date       : 'Wed Feb 17 1999 06:30:33 GMT+0600 (Bangladesh Standard Time)',
        time       : '',
      },
      {
        _id        : '5fd7b89741065436fd00e4be',
        speciality : 'consequat',
        name       : 'Long Ferguson',
        location   : '<SyntaxError: Unexpected identifier>, Virginia',
        date       : 'Wed Dec 15 2004 15:39:51 GMT+0600 (Bangladesh Standard Time)',
        time       : '',
      },
      {
        _id        : '5fd7b897414c79b351b1f186',
        speciality : 'sunt',
        name       : 'Louise Patrick',
        location   : '<SyntaxError: Unexpected identifier>, Nebraska',
        date       : 'Sat May 16 1981 10:09:06 GMT+0600 (Bangladesh Standard Time)',
        time       : '',
      },
      {
        _id        : '5fd7b89764ac47338193962a',
        speciality : 'ut',
        name       : 'Trudy Bonner',
        location   : '<SyntaxError: Unexpected identifier>, Nevada',
        date       : 'Sat Jul 13 2019 17:37:21 GMT+0600 (Bangladesh Standard Time)',
        time       : '',
      },
      {
        _id        : '5fd7b897f74cbf81efc107c6',
        speciality : 'quis',
        name       : 'Williams Maldonado',
        location   : '<SyntaxError: Unexpected identifier>, Maryland',
        date       : 'Tue Jul 20 2010 00:15:38 GMT+0600 (Bangladesh Standard Time)',
        time       : '',
      },
      {
        _id        : '5fd7b89702215af0c0cd45d4',
        speciality : 'id',
        name       : 'Avery Norton',
        location   : '<SyntaxError: Unexpected identifier>, District Of Columbia',
        date       : 'Wed Oct 04 2006 01:04:18 GMT+0600 (Bangladesh Standard Time)',
        time       : '',
      },
      {
        _id        : '5fd7b8970d70a534e316e169',
        speciality : 'quis',
        name       : 'Gonzalez Barrera',
        location   : '<SyntaxError: Unexpected identifier>, Wisconsin',
        date       : 'Tue Sep 28 1999 22:38:46 GMT+0600 (Bangladesh Standard Time)',
        time       : '',
      },
      {
        _id        : '5fd7b897b7608e1e1cf67051',
        speciality : 'in',
        name       : 'Wilson Jensen',
        location   : '<SyntaxError: Unexpected identifier>, Virgin Islands',
        date       : 'Fri May 30 2014 15:12:26 GMT+0600 (Bangladesh Standard Time)',
        time       : '',
      },
      {
        _id        : '5fd7b897fc2c86bd23694add',
        speciality : 'dolore',
        name       : 'Lilly Mcclain',
        location   : '<SyntaxError: Unexpected identifier>, Colorado',
        date       : 'Sat Oct 22 2016 09:17:58 GMT+0600 (Bangladesh Standard Time)',
        time       : '',
      },
      {
        _id        : '5fd7b897e20044dca5291169',
        speciality : 'laborum',
        name       : 'Christian Alvarez',
        location   : '<SyntaxError: Unexpected identifier>, Utah',
        date       : 'Sun Jul 06 1980 15:06:45 GMT+0600 (Bangladesh Standard Time)',
        time       : '',
      },
      {
        _id        : '5fd7b89719794b87129acbe9',
        speciality : 'sit',
        name       : 'Bauer Christensen',
        location   : '<SyntaxError: Unexpected identifier>, New Hampshire',
        date       : 'Mon Jul 11 2016 08:21:00 GMT+0600 (Bangladesh Standard Time)',
        time       : '',
      },
      {
        _id        : '5fd7b897c538387222608675',
        speciality : 'ipsum',
        name       : 'Le Brewer',
        location   : '<SyntaxError: Unexpected identifier>, Northern Mariana Islands',
        date       : 'Sat Apr 16 2005 01:58:48 GMT+0600 (Bangladesh Standard Time)',
        time       : '',
      },
      {
        _id        : '5fd7b8977ff8f66ad9bcc6b3',
        speciality : 'ipsum',
        name       : 'Michele Benson',
        location   : '<SyntaxError: Unexpected identifier>, Louisiana',
        date       : 'Fri Jan 31 1986 02:38:55 GMT+0600 (Bangladesh Standard Time)',
        time       : '',
      },
    ],
    status      : [
      {
        _id        : '5fd7d500d4418b1d15512920',
        speciality : 'mollit',
        name       : 'Matthews Blevins',
        location   : '<SyntaxError: Unexpected identifier>, Vermont',
        date       : 'Tue May 21 1974 08:57:43 GMT+0600 (Bangladesh Standard Time)',
        time       : '',
        status     : 'Rejected',
      },
      {
        _id        : '5fd7d500e7c53c1fe0f78994',
        speciality : 'sint',
        name       : 'Whitehead Gross',
        location   : '<SyntaxError: Unexpected identifier>, North Carolina',
        date       : 'Wed Jan 13 1993 16:54:02 GMT+0600 (Bangladesh Standard Time)',
        time       : '',
        status     : 'Rejected',
      },
      {
        _id        : '5fd7d5009f8aba0c36e64558',
        speciality : 'Lorem',
        name       : 'Kerri Lancaster',
        location   : '<SyntaxError: Unexpected identifier>, Virgin Islands',
        date       : 'Wed Sep 11 1996 05:20:48 GMT+0600 (Bangladesh Standard Time)',
        time       : '',
        status     : 'Pending',
      },
      {
        _id        : '5fd7d500aafb2f941f59d8a0',
        speciality : 'duis',
        name       : 'Buckley Watkins',
        location   : '<SyntaxError: Unexpected identifier>, Oklahoma',
        date       : 'Sat Mar 27 2010 15:34:37 GMT+0600 (Bangladesh Standard Time)',
        time       : '',
        status     : 'Pending',
      },
      {
        _id        : '5fd7d500b72afb51ac53e792',
        speciality : 'ex',
        name       : 'Hansen Spencer',
        location   : '<SyntaxError: Unexpected identifier>, Virginia',
        date       : 'Tue Jan 22 1991 04:03:53 GMT+0600 (Bangladesh Standard Time)',
        time       : '',
        status     : 'Rejected',
      },
      {
        _id        : '5fd7d50001be2a445f36be4b',
        speciality : 'excepteur',
        name       : 'Rowena Savage',
        location   : '<SyntaxError: Unexpected identifier>, Massachusetts',
        date       : 'Thu Nov 22 1979 14:07:03 GMT+0600 (Bangladesh Standard Time)',
        time       : '',
        status     : 'Rejected',
      },
      {
        _id        : '5fd7d500b5e31c6c5709a020',
        speciality : 'elit',
        name       : 'Leanna Beck',
        location   : '<SyntaxError: Unexpected identifier>, South Carolina',
        date       : 'Sat Apr 06 1996 00:13:26 GMT+0600 (Bangladesh Standard Time)',
        time       : '',
        status     : 'Rejected',
      },
      {
        _id        : '5fd7d5003629ea1e794e8180',
        speciality : 'magna',
        name       : 'Bishop Joyce',
        location   : '<SyntaxError: Unexpected identifier>, Alaska',
        date       : 'Sat Feb 24 2018 10:37:28 GMT+0600 (Bangladesh Standard Time)',
        time       : '',
        status     : 'Rejected',
      },
      {
        _id        : '5fd7d5006247bb442465a201',
        speciality : 'labore',
        name       : 'Powers Mcfadden',
        location   : '<SyntaxError: Unexpected identifier>, Kentucky',
        date       : 'Sun Feb 07 1993 23:25:38 GMT+0600 (Bangladesh Standard Time)',
        time       : '',
        status     : 'Rejected',
      },
      {
        _id        : '5fd7d5009f609791cc50aacf',
        speciality : 'sunt',
        name       : 'Johnston Cabrera',
        location   : '<SyntaxError: Unexpected identifier>, Tennessee',
        date       : 'Sat May 29 1999 13:10:46 GMT+0600 (Bangladesh Standard Time)',
        time       : '',
        status     : 'Rejected',
      },
      {
        _id        : '5fd7d500001d162ad5d7c45a',
        speciality : 'nulla',
        name       : 'Reid Ramirez',
        location   : '<SyntaxError: Unexpected identifier>, Mississippi',
        date       : 'Fri Oct 12 1984 05:20:43 GMT+0600 (Bangladesh Standard Time)',
        time       : '',
        status     : 'Pending',
      },
      {
        _id        : '5fd7d5006c57fb99eb92bc83',
        speciality : 'occaecat',
        name       : 'Figueroa Hurley',
        location   : '<SyntaxError: Unexpected identifier>, Delaware',
        date       : 'Wed Oct 22 1975 18:23:02 GMT+0600 (Bangladesh Standard Time)',
        time       : '',
        status     : 'Pending',
      },
      {
        _id        : '5fd7d50095534b3a9066c481',
        speciality : 'incididunt',
        name       : 'Erin Duke',
        location   : '<SyntaxError: Unexpected identifier>, Washington',
        date       : 'Sun May 02 2010 04:37:41 GMT+0600 (Bangladesh Standard Time)',
        time       : '',
        status     : 'Pending',
      },
      {
        _id        : '5fd7d500d192c3b1c47e97f5',
        speciality : 'dolor',
        name       : 'Janette Walsh',
        location   : '<SyntaxError: Unexpected identifier>, Michigan',
        date       : 'Mon Apr 22 2019 13:38:29 GMT+0600 (Bangladesh Standard Time)',
        time       : '',
        status     : 'Pending',
      },
      {
        _id        : '5fd7d50029e886b708ae5a8b',
        speciality : 'minim',
        name       : 'June Rose',
        location   : '<SyntaxError: Unexpected identifier>, American Samoa',
        date       : 'Wed Dec 22 2004 20:46:17 GMT+0600 (Bangladesh Standard Time)',
        time       : '',
        status     : 'Rejected',
      },
      {
        _id        : '5fd7d500f312616414a8f707',
        speciality : 'occaecat',
        name       : 'Lesa Hatfield',
        location   : '<SyntaxError: Unexpected identifier>, Wyoming',
        date       : 'Sat May 06 1972 06:56:37 GMT+0600 (Bangladesh Standard Time)',
        time       : '',
        status     : 'Pending',
      },
      {
        _id        : '5fd7d500cd84ffb7f57f3828',
        speciality : 'consequat',
        name       : 'Betty Jefferson',
        location   : '<SyntaxError: Unexpected identifier>, Idaho',
        date       : 'Tue Oct 17 2000 09:07:25 GMT+0600 (Bangladesh Standard Time)',
        time       : '',
        status     : 'Rejected',
      },
      {
        _id        : '5fd7d5008436f20e55733dd7',
        speciality : 'esse',
        name       : 'Wanda Cleveland',
        location   : '<SyntaxError: Unexpected identifier>, New Hampshire',
        date       : 'Tue Feb 13 2018 21:19:28 GMT+0600 (Bangladesh Standard Time)',
        time       : '',
        status     : 'Pending',
      },
      {
        _id        : '5fd7d500be3a6b6cf0c20b26',
        speciality : 'esse',
        name       : 'Sherman Graves',
        location   : '<SyntaxError: Unexpected identifier>, District Of Columbia',
        date       : 'Sat Aug 16 1997 09:21:29 GMT+0600 (Bangladesh Standard Time)',
        time       : '',
        status     : 'Pending',
      },
      {
        _id        : '5fd7d5008c49b657b1440398',
        speciality : 'consequat',
        name       : 'Welch Singleton',
        location   : '<SyntaxError: Unexpected identifier>, Louisiana',
        date       : 'Sat Oct 09 1993 10:27:00 GMT+0600 (Bangladesh Standard Time)',
        time       : '',
        status     : 'Rejected',
      },
      {
        _id        : '5fd7d500737e7907d2c79ced',
        speciality : 'id',
        name       : 'Rodgers Acevedo',
        location   : '<SyntaxError: Unexpected identifier>, Georgia',
        date       : 'Wed Aug 24 1988 06:26:54 GMT+0600 (Bangladesh Standard Time)',
        time       : '',
        status     : 'Pending',
      },
      {
        _id        : '5fd7d500995c3deae5d96704',
        speciality : 'officia',
        name       : 'Whitney Warren',
        location   : '<SyntaxError: Unexpected identifier>, Colorado',
        date       : 'Wed Jul 22 2015 07:18:31 GMT+0600 (Bangladesh Standard Time)',
        time       : '',
        status     : 'Pending',
      },
      {
        _id        : '5fd7d5008513e3ffa227d423',
        speciality : 'officia',
        name       : 'Munoz Guy',
        location   : '<SyntaxError: Unexpected identifier>, North Dakota',
        date       : 'Wed May 27 1998 10:19:10 GMT+0600 (Bangladesh Standard Time)',
        time       : '',
        status     : 'Rejected',
      },
      {
        _id        : '5fd7d500531aa0e8eba396b3',
        speciality : 'proident',
        name       : 'Brooks Howe',
        location   : '<SyntaxError: Unexpected identifier>, Kansas',
        date       : 'Wed Jul 19 2017 11:53:37 GMT+0600 (Bangladesh Standard Time)',
        time       : '',
        status     : 'Rejected',
      },
      {
        _id        : '5fd7d5003a85930cde1ef1a6',
        speciality : 'ea',
        name       : 'Gallagher Wilkinson',
        location   : '<SyntaxError: Unexpected identifier>, Minnesota',
        date       : 'Mon Nov 24 2014 13:56:35 GMT+0600 (Bangladesh Standard Time)',
        time       : '',
        status     : 'Pending',
      },
      {
        _id        : '5fd7d500d4394eabbe04f6f0',
        speciality : 'enim',
        name       : 'Robles Gardner',
        location   : '<SyntaxError: Unexpected identifier>, Missouri',
        date       : 'Wed Dec 03 2008 18:55:41 GMT+0600 (Bangladesh Standard Time)',
        time       : '',
        status     : 'Pending',
      },
      {
        _id        : '5fd7d500e109c1566136e051',
        speciality : 'do',
        name       : 'Angeline Albert',
        location   : '<SyntaxError: Unexpected identifier>, Texas',
        date       : 'Tue Jun 28 1994 10:53:25 GMT+0600 (Bangladesh Standard Time)',
        time       : '',
        status     : 'Pending',
      },
      {
        _id        : '5fd7d500b310d86bb331948d',
        speciality : 'commodo',
        name       : 'Scott Oneal',
        location   : '<SyntaxError: Unexpected identifier>, Palau',
        date       : 'Tue Feb 16 1982 08:04:12 GMT+0600 (Bangladesh Standard Time)',
        time       : '',
        status     : 'Rejected',
      },
      {
        _id        : '5fd7d500070de85123080ff0',
        speciality : 'officia',
        name       : 'Baldwin Smith',
        location   : '<SyntaxError: Unexpected identifier>, Illinois',
        date       : 'Thu Mar 09 1978 10:37:29 GMT+0600 (Bangladesh Standard Time)',
        time       : '',
        status     : 'Rejected',
      },
      {
        _id        : '5fd7d50087c2a11419ab5c34',
        speciality : 'do',
        name       : 'Fanny Dunlap',
        location   : '<SyntaxError: Unexpected identifier>, New Jersey',
        date       : 'Fri Jan 24 2003 23:24:30 GMT+0600 (Bangladesh Standard Time)',
        time       : '',
        status     : 'Rejected',
      },
      {
        _id        : '5fd7d500064ada3e1bc9c8a5',
        speciality : 'duis',
        name       : 'Naomi Burton',
        location   : '<SyntaxError: Unexpected identifier>, Utah',
        date       : 'Mon Jul 26 1976 22:13:12 GMT+0600 (Bangladesh Standard Time)',
        time       : '',
        status     : 'Rejected',
      },
      {
        _id        : '5fd7d500db17b7f99d117b6d',
        speciality : 'labore',
        name       : 'Flores Gilliam',
        location   : '<SyntaxError: Unexpected identifier>, Nevada',
        date       : 'Mon Jan 12 1987 15:03:05 GMT+0600 (Bangladesh Standard Time)',
        time       : '',
        status     : 'Rejected',
      },
      {
        _id        : '5fd7d500908956bd49ca909d',
        speciality : 'magna',
        name       : 'Willa Giles',
        location   : '<SyntaxError: Unexpected identifier>, Iowa',
        date       : 'Sat Sep 27 1997 17:08:49 GMT+0600 (Bangladesh Standard Time)',
        time       : '',
        status     : 'Pending',
      },
      {
        _id        : '5fd7d500059bf863257fca98',
        speciality : 'fugiat',
        name       : 'Ratliff Dickson',
        location   : '<SyntaxError: Unexpected identifier>, Oregon',
        date       : 'Mon Aug 26 2002 00:51:50 GMT+0600 (Bangladesh Standard Time)',
        time       : '',
        status     : 'Pending',
      },
      {
        _id        : '5fd7d50057ad33adac062c69',
        speciality : 'ut',
        name       : 'Alana Cooke',
        location   : '<SyntaxError: Unexpected identifier>, Wisconsin',
        date       : 'Wed Oct 04 2006 11:18:26 GMT+0600 (Bangladesh Standard Time)',
        time       : '',
        status     : 'Pending',
      },
      {
        _id        : '5fd7d5004063f2d0c1ac8254',
        speciality : 'magna',
        name       : 'Jennings Webster',
        location   : '<SyntaxError: Unexpected identifier>, Pennsylvania',
        date       : 'Tue Jan 07 1992 07:24:00 GMT+0600 (Bangladesh Standard Time)',
        time       : '',
        status     : 'Rejected',
      },
      {
        _id        : '5fd7d500ea67f3aaf7240fea',
        speciality : 'sunt',
        name       : 'Faye Castillo',
        location   : '<SyntaxError: Unexpected identifier>, Connecticut',
        date       : 'Sun Mar 11 2007 10:29:15 GMT+0600 (Bangladesh Standard Time)',
        time       : '',
        status     : 'Pending',
      },
      {
        _id        : '5fd7d5004e0ba0d7c44341a2',
        speciality : 'quis',
        name       : 'Nash Hammond',
        location   : '<SyntaxError: Unexpected identifier>, Arkansas',
        date       : 'Mon Sep 06 1993 08:23:45 GMT+0600 (Bangladesh Standard Time)',
        time       : '',
        status     : 'Pending',
      },
      {
        _id        : '5fd7d5004f10985245eb8091',
        speciality : 'ullamco',
        name       : 'Cherie Blackburn',
        location   : '<SyntaxError: Unexpected identifier>, Puerto Rico',
        date       : 'Sat Nov 25 2006 15:36:36 GMT+0600 (Bangladesh Standard Time)',
        time       : '',
        status     : 'Pending',
      },
      {
        _id        : '5fd7d500502e2fb5c51df5d4',
        speciality : 'deserunt',
        name       : 'Ramos Beach',
        location   : '<SyntaxError: Unexpected identifier>, Nebraska',
        date       : 'Thu Apr 27 2017 22:45:44 GMT+0600 (Bangladesh Standard Time)',
        time       : '',
        status     : 'Pending',
      },
      {
        _id        : '5fd7d500c15daf942e469b04',
        speciality : 'ad',
        name       : 'Moore Blake',
        location   : '<SyntaxError: Unexpected identifier>, California',
        date       : 'Mon Apr 23 1973 17:08:26 GMT+0600 (Bangladesh Standard Time)',
        time       : '',
        status     : 'Pending',
      },
      {
        _id        : '5fd7d50072fc3e8b481486e2',
        speciality : 'tempor',
        name       : 'Kennedy Pitts',
        location   : '<SyntaxError: Unexpected identifier>, Ohio',
        date       : 'Mon Aug 11 1986 13:24:54 GMT+0600 (Bangladesh Standard Time)',
        time       : '',
        status     : 'Rejected',
      },
      {
        _id        : '5fd7d500c518fe80eec4bb97',
        speciality : 'do',
        name       : 'Bessie Schwartz',
        location   : '<SyntaxError: Unexpected identifier>, Hawaii',
        date       : 'Sun Apr 05 1998 23:34:36 GMT+0600 (Bangladesh Standard Time)',
        time       : '',
        status     : 'Rejected',
      },
      {
        _id        : '5fd7d5006c8a1ef02d0f613e',
        speciality : 'mollit',
        name       : 'Gilliam Mccarty',
        location   : '<SyntaxError: Unexpected identifier>, Alabama',
        date       : 'Thu Sep 24 1998 19:30:13 GMT+0600 (Bangladesh Standard Time)',
        time       : '',
        status     : 'Pending',
      },
      {
        _id        : '5fd7d500f6bcd8719f0b9afd',
        speciality : 'veniam',
        name       : 'Kent Moreno',
        location   : '<SyntaxError: Unexpected identifier>, West Virginia',
        date       : 'Sun Mar 14 1993 08:48:00 GMT+0600 (Bangladesh Standard Time)',
        time       : '',
        status     : 'Rejected',
      },
      {
        _id        : '5fd7d5004ef8d4177c0b8ac7',
        speciality : 'eu',
        name       : 'Rebekah Ewing',
        location   : '<SyntaxError: Unexpected identifier>, New Mexico',
        date       : 'Thu Aug 19 2010 01:23:38 GMT+0600 (Bangladesh Standard Time)',
        time       : '',
        status     : 'Rejected',
      },
      {
        _id        : '5fd7d5008c46a0d5ee79255d',
        speciality : 'nostrud',
        name       : 'Stacie Harper',
        location   : '<SyntaxError: Unexpected identifier>, New York',
        date       : 'Sat Aug 16 2008 17:24:54 GMT+0600 (Bangladesh Standard Time)',
        time       : '',
        status     : 'Rejected',
      },
      {
        _id        : '5fd7d5007dee4abd225572a3',
        speciality : 'aliqua',
        name       : 'Summer Moss',
        location   : '<SyntaxError: Unexpected identifier>, Northern Mariana Islands',
        date       : 'Sat Oct 16 2010 20:57:25 GMT+0600 (Bangladesh Standard Time)',
        time       : '',
        status     : 'Pending',
      },
      {
        _id        : '5fd7d5002b971b559f7f68bd',
        speciality : 'anim',
        name       : 'Nichols Yates',
        location   : '<SyntaxError: Unexpected identifier>, Federated States Of Micronesia',
        date       : 'Mon Apr 19 2010 11:24:50 GMT+0600 (Bangladesh Standard Time)',
        time       : '',
        status     : 'Pending',
      },
      {
        _id        : '5fd7d500ee04dc21e2b20c0e',
        speciality : 'duis',
        name       : 'Gonzales Delgado',
        location   : '<SyntaxError: Unexpected identifier>, Maryland',
        date       : 'Tue Jan 29 2002 00:34:22 GMT+0600 (Bangladesh Standard Time)',
        time       : '',
        status     : 'Pending',
      },
      {
        _id        : '5fd7d500a30641ea520e2dce',
        speciality : 'velit',
        name       : 'Witt Camacho',
        location   : '<SyntaxError: Unexpected identifier>, Arizona',
        date       : 'Sat Oct 03 1992 20:32:26 GMT+0600 (Bangladesh Standard Time)',
        time       : '',
        status     : 'Rejected',
      },
      {
        _id        : '5fd7d5006f39e86eb1f6eb52',
        speciality : 'sint',
        name       : 'Lavonne Wiley',
        location   : '<SyntaxError: Unexpected identifier>, Maine',
        date       : 'Thu Feb 05 1976 02:46:54 GMT+0600 (Bangladesh Standard Time)',
        time       : '',
        status     : 'Pending',
      },
    ],
  }

  render() {
    const { temp } = this.props
    const { appointment, status } = this.state

    return (
      <Fragment>
        {/* Main */}
        <section className='col'>
          <div className='d-flex justify-content-between mx-5 mt-4'>
            <h6 className='text-muted'>Appointments: {appointment.length}</h6>
          </div>

          {/* Appointments */}
          <div className='container-fluid row flex-wrap justify-content-center grid-card-last m-0'>
            {appointment.map(({ _id, speciality, name, location, date }) => (
              <div key={_id} className='card shadow-sm flex-fill m-1' style={{ width: '100%' }}>
                <div className='card-body row'>
                  <div className='col'>
                    {/* <figure className='figure' style={{ minWidth: '10rem', width: '10rem' }}>
                    <img src={avatar} className='figure-img img-fluid rounded' alt={name} />
                  </figure> */}
                    <h4 className='card-title mb-4'>
                      {name}
                      <br />
                      <small className='text-muted'>Specialized</small>
                    </h4>
                    <div className='mb-2'>
                      <h6 className='mb-0 text-muted'>Location</h6>
                      <small>{location}</small>
                    </div>
                  </div>
                  <div className='col d-flex flex-column align-items-end'>
                    <div className='text-end'>
                      <small className='mb-0 text-muted'>Date & Time</small>
                      <h6>{format(new Date(date), 'Do MMM, YYYY (hh:mm A)')}</h6>
                    </div>
                    <div className='mt-auto'>
                      <button className='btn btn-danger'>Cancel</button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Right Bar */}
        <section className='col-3 hanging'>
          <div className='d-flex justify-content-between ms-3 mt-4'>
            <h6 className='text-muted'>Status: {appointment.length}</h6>
          </div>
          {status.map(({ _id, speciality, name, location, status }) => (
            <div key={_id} className='card shadow-sm flex-fill m-1' style={{ width: '100%' }}>
              <div className='card-body row'>
                <div className='col'>
                  {/* <figure className='figure' style={{ minWidth: '10rem', width: '10rem' }}>
                    <img src={avatar} className='figure-img img-fluid rounded' alt={name} />
                  </figure> */}
                  <h5 className='card-title mb-4'>
                    {speciality}
                    <br />
                    <small className='text-muted'>{name}</small>
                  </h5>
                  <div className='mb-2'>
                    <h6 className='mb-0 text-muted'>Location</h6>
                    <small>{location}</small>
                  </div>
                  <h6 className='text-danger'>{status}</h6>
                </div>
              </div>
            </div>
          ))}
        </section>
      </Fragment>
    )
  }
}

const mapStateToProps = state => ({})
const mapDispatchToProps = dispatch => ({})

export default connect(mapStateToProps, mapDispatchToProps)(Appointment)
